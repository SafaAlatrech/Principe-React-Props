import React from 'react'

import ChildComponent from './ChildComponent'
const ParentComponent = () => {

const handleAlert = (name) => {
alert(`Hi! I'am a ${name}`)
}
    
    return (
        <div className='Parent-name'>
            <ChildComponent 
            title="React Introduction" 
            subtitle="React Props || Tuesday 22 2021 " 
            studentNumber= {10} 
            IntoductionAgenda = {[
          "Introduction to React props", 
          "Types of props", 
          "Children props", 
          "Destructring"
            ]}    
            handleAlert = {handleAlert}
            condititionalProp="Hi ! I'am conditional Prop"
         >
            <div>

                     <h4>Hi, I'am a child props</h4>
                     <p>Hi , I'am child Two</p>

            </div>

          </ChildComponent>   
        </div>
    )
}

export default ParentComponent
