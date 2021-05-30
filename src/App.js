import { Switch,Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";


function App() {
  return (
    <>
    <Switch>
      <Route path="/list">
        <ListPage />
      </Route>
      <Route path='/:id' component ={ DetailPage } />
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
