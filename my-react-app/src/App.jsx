
import './App.css'

//create a react component: React components are functions that return UI
function Header(props){

  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>

  )
}

function App() {
  return (
    <div>
    <Header name="Anil" year = {new Date().getFullYear()}/>

    <main>
      <h2>We server vegeterian dishes.</h2>
    </main>

    </div>
  );
}

export default App
