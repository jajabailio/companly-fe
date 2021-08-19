import "./App.css";
import { Route, Switch } from "react-router-dom";
import Company from "./pages/Company";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <div className="App">
      <main className="container-fluid p-0">
        <Switch>
          <Route path="/company/:id" component={CompanyDetails}></Route>
          <Route path="/" component={Company}></Route>
          {/* <Route path="/find-craftsman" component={FindCraftsman}></Route> */}
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
