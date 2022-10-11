import './App.css';
import  Card from "./components/card/Card.jsx";
import data from './helper/data';

function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item)=>{
        const {id,language,img,btnName} = item
        return <Card  key ={id} language={language} img={img} btnName={btnName}/>
      })}
    </div>
  );
}

export default App;
