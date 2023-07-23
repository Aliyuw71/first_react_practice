
import Product from "./components/Product"
import Counter from './components/Counter';
import styles from "./App.module.css"
import ToDoList from "./components/ToDoList";
import Jokes from "./components/Jokes";
function App() {
  const name = "Whayasay"
return (
  <div className="App">
        <h1>Hello {name}</h1>
    <Counter />
    <h3 className={styles.error}>An error occured</h3>
    <div className={styles.container}>
      <Product 
      name = "Google home"
      description = "Your AI assistant"
      price = {59.99}
      />
      <Product 
      name = "iPhone 14"
      description = "The best iPhone at the moment"
      price = {1200}
      />
      <Product 
      name = "Google Pixel"
      description = "Android with the best camera"
      price = {1050}
      />
</div>
    <ToDoList />
    <Jokes />
  </div>
)
 }

export default App;
