import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //      <h1>Hi I am a React App</h1>
  //      <Person name ='Anubhav' age = '26'>My Hobbies are : Football</Person> <br />
  //      <Person name ='Manu' age ='24'/> <br />
  //     </div>
  //   );


  


    //Understanding state Objects
  

    //Below code implements state in normal way
    //Adding the Handler in the code for the Switch Button
    state  = {
        Person : [
          {'name':'Anubhav', 'age':26},
          {'name':'Abhinav','age':24},
          {'name':'Manu','age':28}
        ]
    }


    switchNameHandler = (newName) => {

      console.log("Was Clicked")


      this.setState({Person : [
        {'name':newName, 'age':26},
        {'name':'Abhinav','age':24},
        {'name':'Manu','age':20}
      ]})
    }

    nameChangedHandler = (event) => {

      console.log("Was Clicked")


      this.setState({Person : [
        {'name':'Anubhav', 'age':26},
        {'name':event.target.value,'age':24},
        {'name':'Manu','age':20}
      ]})
    }
    render() {
      return (
        <div className="App">
         <h1>Hi I am a React App</h1>
         <button onClick = {this.switchNameHandler.bind(this,'Anubhav Goyal')}>Switch Name</button>
         <Person name ={this.state.Person[0].name} age = {this.state.Person[0].age} >My Hobbies are : Football</Person> <br />
         <Person name ={this.state.Person[1].name}  age ={this.state.Person[1].age} click = {this.switchNameHandler.bind(this,'Anubhav Goyal')} nameChange = {this.nameChangedHandler}/> <br />
         <Person name ={this.state.Person[2].name}  age ={this.state.Person[2].age} click = {()=>this.switchNameHandler('Abhinav Goyal')}/> <br />

        </div>
      );


    

  }
}

export default App;
