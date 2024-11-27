
import './App.css'

//create a react component: React components are functions that return UI
function Header({name,year}){

  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>

  )
}

const items = [
  "Vegetable Momo",
  "Pasta", "Fried Potatoes", "Tofu and Vegetables"
];

function Main({dishes}){
  return (
    <ul>
     {dishes.map((dish)=> (
      <li style={{listStyleType:"none"}}>{dish}</li>
      ))}
      
    </ul>
  )
}


function App() {
  return (
    <div>
    <Header name="Anil" year = {new Date().getFullYear()}/>

    <Main dishes ={items}/>

    </div>
  );
}

export default App
