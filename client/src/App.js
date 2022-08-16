import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import Create from "./components/Create";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path='/product/:productId'>
            <Product/>
          </Route>
          <Route exact path='/create'>
            <Create/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
