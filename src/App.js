const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Shoe", quantity: 4, packed: false },
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
  <Form className="add-form">
    <h3>waht do you need for your 🤟trip?</h3>
    <select>
      {Array.from({length:20},(_,i)=>i +1).map((num)=>(
        <option value={num} key={num}>{num}</option>
      ))}
    </select>
    <input type="text" placeholder="item..."/>
    <button>Add</button>
  </Form>
)
}





function Itemlist(){
return (
  <div className="list">
  <ul>
    {initialItems.map((item)=>(
      <Item item={item} key={item.id}/>
      ))}
  </ul>
  </div>
);
}

function Item({item}){
return <span style={item.packed?{textDecoration:"line-through"}:{}}>
<li>{item.description} {item.quantity}
<button>❌</button>
</li>

</span>
}

function Stats(){
  return(
    <footer className="stats">
      <em>you have x items list,and you alreday packed x(x)</em>
    </footer>
  ) 
  }