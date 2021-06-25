import React from 'react'
import PropTypes from 'prop-types'


const ChildComponent = ({handleAlert, title, subtitle, studentNumber, IntoductionAgenda,children, condititionalProp}) => {
   // console.log(props)
//const { 
 //   handleAlert,
 //   title,
  //  subtitle, 
   // studentNumber, 
   // IntoductionAgenda,
   // children

//} = props
 
    const handlClick = () => handleAlert(title)

    return (
        <div>
            {/* {handleAlert(title)} */}
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <h4>Student watching the video :{studentNumber}</h4>


          <div>Introduction to Agenda</div>  
          <ul>
               {IntoductionAgenda.map((el,i) => (
                   <li key={i} >{el}</li>
               ))}
          </ul>
          {children}
          {condititionalProp   ?
          <h3> Hi , I'am a conditional Prop</h3> : 
          <h3>Ooops! i'am a seconde conditional prop</h3>
        }
          <button onClick={handlClick}>Click Me</button>
        </div>
    )}

ChildComponent.defaultProps  = {
     title : 'This is default Title '

}

 // Prototype :
ChildComponent.propTypes = {
title: PropTypes.string.isRequired,
subtitle : PropTypes.string.isRequired,
studentNumber : PropTypes.number.isRequired,
IntoductionAgenda : PropTypes.array.isRequired,
handleAlert : PropTypes.func.isRequired
}

export default ChildComponent
