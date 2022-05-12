import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { Switch, Route } from "react-router-dom";

// import Show from "./Component/Show/Show";

function App() {
  return (
    <div className="App">
      {/* <Show /> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
