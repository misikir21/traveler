
export default function App() {
  return ( <div className="app">
      <Logo/>
      <Form/>
      <Itemlist/>
      <Stats/>
    </div>
 ); }

function Logo(){
return <h1>🌴far away👜</h1>
}

function Form(){
return (
  <div className="add-form">
    <h3>waht do you need for your 🤟trip?</h3>
  </div>
)
}

function Itemlist(){
return <div className="list"></div>
}

function Stats(){
  return(
    <footer className="stats">
      <em>you have x items list,and you alreday packed x(x)</em>
    </footer>
  ) 
  }