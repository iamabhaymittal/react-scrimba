import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
import Card from "./components/Card.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <header className="App-header"></header>
      {cards}
    </div>
  );
}

export default App;
