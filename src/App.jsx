import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation } from "./component/navigation/navigation";
import { Landing } from "./component/landing/landing";
import { ContactForm } from "./component/contactForm/Contact";

import { Spinner } from "./component/spinner/Spinner";

import "./App.scss";

function App() {
  const [stateSpinner, setStateSpinner] = useState(false);

  useEffect(() => {
    setTimeout(() => setStateSpinner(false), 2200);
    setTimeout(() => setStateSpinner(true), 200);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Landing />
            {stateSpinner ? <Spinner /> : ""}
          </Route>
          {/* <Route path='/about'>
          <About />
        </Route>
        <Route path='/project'>
          <Projects />
        </Route> */}
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export { App };
