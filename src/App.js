const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
  { id: 2, description: "Shoe", quantity: 4, packed: false },
];
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
return (
  <div className="list">
  <ul>
    {initialItems.map((item)=>(
      <Item item={item}/>
      ))}
  </ul>
  </div>
);
}

function Item({item}){
return <span style={item.packed?{textDecoration:"line-through"}:{}}>
<li>{item.description} {item.quantity}</li>

</span> 
}

function Stats(){
  return(
    <footer className="stats">
      <em>you have x items list,and you alreday packed x(x)</em>
    </footer>
  ) 
  }