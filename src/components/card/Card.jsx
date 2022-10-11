import cardStyle from "./Card.module.css"
import  Button from "../button/Button"
import React from 'react'


const Card = ({id,language,img,btnName}) => {
  return (
    <div >
        <h1 className={cardStyle.title}>{language}</h1>
        <img src={img} alt="img" className={cardStyle["images"]}/>
        <Button btnName={btnName}/>
    </div>
  )
}

export default Card
