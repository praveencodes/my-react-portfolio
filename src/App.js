import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
