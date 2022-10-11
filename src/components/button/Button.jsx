import butonStyle from "./Button.module.css"

const Button = ({btnName}) =>{
  return (
    <div className={butonStyle.title}>
      <button className={butonStyle.btn}>{btnName}</button>
    </div>
  )
}

export default Button
