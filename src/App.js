import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import Accueil from "./pages/acueil/Accueil.component";
import Boutique from "./pages/boutique/Boutique.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/products" component={Boutique} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
