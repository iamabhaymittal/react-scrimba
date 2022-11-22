import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
import Card from "./components/Card.js";
import MyNavbar from "./components/Navbar.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
      </header>
      {cards}
    </div>
  );
}

export default App;
