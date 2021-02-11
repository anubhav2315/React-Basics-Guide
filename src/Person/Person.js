//Import React as it converts JSX into HTML
import React from 'react'
//Import Person.css file to import the CSS Styling from Person.css
import './Person.css'
const person = (props) => {
    return (
    
    <div className='Person'>
    <p1 onClick = {props.click}>I am a {props.name} with age : {props.age}</p1>
    <p1>{props.childen}</p1><br />    
    <input type="text" onChange={props.nameChange} value = {props.name}/>
    </div>
        
        
        )
}
export default person