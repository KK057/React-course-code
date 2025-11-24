import './App.css';
import Description from './Description.jsx';
import ProductTab_props from './ProductTab_props.jsx';

function Boss(){
  return <h2>I am the boss</h2>;
}//There should be always one parent element in one component
//jsx not have class attributes but className
//Use camelCase in most of the things


function App() {
  return (<>
  <Boss/>
  <Description/>
  <button>Click me</button>
  <p>2*22 ={2*22}</p>
  <ProductTab_props/>
  </>);//react fragment to let you group a list of chidren without adding extra nodes
}

export default App;