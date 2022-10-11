import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageOne from "./Componenets/PageOne";
import RemainSame from "./Componenets/RemainSame";
import PageTwo from "./Componenets/PageTwo";
import PageThree from "./Componenets/PageThree";
import PageFour from "./Componenets/PageFour";
function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <RemainSame />
        <switch>
          <Route exact path="/cryptonaukriAps/">
            <PageOne />
          </Route>
          <Route exact path="/cryptonaukriAps/pagetwo">
            <PageTwo />
          </Route>
          <Route exact path="/cryptonaukriAps/pagethree">
            <PageThree />
          </Route>
          <Route exact path="/cryptonaukriAps/pageFour">
            <PageFour />
          </Route>
        </switch>
      </div>
      {/* <Switch>
         <Route path="/favourites" component={PageOne} />
      </Switch> */}
    </Router>
  );
}

export default App;
