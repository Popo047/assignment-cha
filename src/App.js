import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/cart" component={Cart} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
