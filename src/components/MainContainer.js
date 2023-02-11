import React from 'react'
import face from '../images/face.svg'
import arrow from '../images/arrow.svg'
import symbol from '../images/mars-symbol.svg'
import venus from '../images/venus-symbol.svg'          //imported svg and framer for animation
import card from '../images/card--white.svg'
import card_ from '../images/card.svg'
import calendar_ from '../images/calendar.svg'
import left from '../images/leftarrow.svg'
import {motion} from 'framer-motion'

const leftsideVariants={
   hidden:{
    opacity:0,
    x:700                   //Leftpanel Animation
   },
   visible:{
    opacity: 1,
    x: 0,
    transition:{delay:0.15, duration: 0.75, type: 'tween'}
   }
}
const rightsideVariants={
    hidden:{
     opacity:0,
     x:-700                 //Rightpanel Animation
    },
    visible:{
     opacity: 1,
     x: 0,
     transition:{delay:0.15, duration: 0.75, type: 'tween'}
    }
 }

 
 const rightArrowButton={
    hover:{
        scale: 1.1,
        transition:{
            yoyo: Infinity
        }                               //Animation of button
    }, 
    pressed:{
        scale:0.9
    }
 }

 const leftArrowButton={
    hover:{
        scale: 1.1,                     // Animation of Button
        transition:{
            yoyo: Infinity
        }
    }, 
    pressed:{
        scale:0.9
    }
 }

export const MainContainer = ({container, changeContainerState}) => {


    const handleChangeState=() =>{
        changeContainerState();                                     

}
    return(
        <div className='main-box'>
            {container==='initial' &&(
            <>
            <motion.div className='leftside'
            variants={leftsideVariants}
            initial="hidden" animate="visible">
                <img src={face} alt="leftside-face"/>                      
                <h1>Front-end challenge!</h1>
                <p><br></br> This is a design that you will need
                 <br></br>
                 to code up and impress us
                </p>
                <motion.button onClick={handleChangeState} variants={rightArrowButton} whileHover="hover" whileTap="pressed">
                <img src={arrow} alt="leftside-arrow"/></motion.button>
               </motion.div>
            <motion.div className='rightside'
            variants={rightsideVariants}
            initial="hidden" animate="visible">
                <form autoComplete="off">
                <div className='custom-input'>
                <div className='custom-input_'>
                <label>Name<input name="name" type="Text"/></label>
                </div>
                </div>
                <div className='custom-inputi'>
                <div className='gender-icons'>
                <label>Gender</label><button><img src={symbol} alt="symbol"/></button><button style={{background:"transparent"}}>Male</button>
                <button className='btn2'><img src={venus} alt="venus"/></button><button style={{background:"transparent"}}>Female</button>
                </div>
                </div>
                <div className='custom-input'>
                <div className='custom-input_'>
                <label>Date of Birth<input name="date" type="date"/></label>
                </div>
                </div>
                <div className='custom-input'>
                <div className='custom-input_'>
                <label>Email<input name="email" type="email"/></label>
                </div>
                </div>
                <div className='custom-input'>
                <div className='custom-input_'>
                <label>Mobile<input name="mobile" type="tel"/></label>
                </div>  
                </div>
                <div className='custom-input'>
                <div className='custom-input_'>
                <label>Customer ID<input name="customer_id" type="Text"/></label>
                </div>
                </div>

                <div className='custom-input_a'>
            
                <label>Membership</label><button style={{background:"#a6a8aa"}}><img src={card} alt="card"/>
                </button><button style={{background:"transparent"}}>Classic</button>
                <button className='btn2'><img src={card_} alt="card_"/></button><button style={
                {background:"transparent"}}>Silver</button><button><img src={card_} alt="card_"/></button>
                <button style={{background:"transparent"}}>Gold</button>
                
                </div>
                <div className='custom-input_but'>
                <button type='submit'
                className='save'>SAVE</button>
                <div className='custom-input_s'>
                <button type='submit'
                className='cancel' onClick={{handleChangeState}}>CANCEL</button>
                </div>
                </div>
                </form>
                
            </motion.div>
            </>
            )}
            {
                container==='changed' &&(
                    <>
                        <div className='leftside'>
                        <img src={face} alt="leftside-face"/>
                        <h1>Front-end challenge!</h1>
                        <p><br></br> This is a design that you will need
                        <br></br>
                        to code up and impress us
                        </p>
                        <motion.button onClick={handleChangeState}variants={rightArrowButton} whileHover="hover" whileTap="pressed"><img src={left} alt="leftside-arrow"/></motion.button>
                        </div>
                        <motion.div  className='rightside-form' variants={leftArrowButton} whileHover="hover" whileTap="pressed">

                          <h1>My world today</h1>
                          <p><br></br>Pellentesque habitant morbi tristique senectus et netus et malesuada
                            <br></br>
                            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
                            <br></br>
                            eget, tempor sit amet, ante. <a href="#" style={{color:"black", fontWeight:"bold"}}>View all days </a>eu libero sit amet quam
                            <br></br>
                            egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
                            <br></br>
                            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
                            <br></br>
                            erat wisi, condimentum sed, commodo vitae, omare sit amet, wisi.
                            <br></br>
                            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
                            <br></br>
                            orci, sagittis tempus lacus enim ac dui, Donec non enim in turpis
                            <br></br>
                            pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus
                            <br></br>
                            tortor neque egestas augue, eu vulputate magna eros eu erat Aliquam
                            <br></br>
                            erat.
                          </p>
                        </motion.div>

                    </>
                )
            }
        </div>
    )
}