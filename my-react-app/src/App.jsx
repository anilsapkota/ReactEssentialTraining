
import './App.css'

//create a react component: React components are functions that return UI
function Header(){
  return (
    <header>
      <h1>Anil's Kitchen</h1>
    </header>

  )
}

function App() {
  return (
    <div>
    <Header />

    <main>
      <h2>We server vegeterian dishes.</h2>
    </main>

    </div>
  );
}

export default App
