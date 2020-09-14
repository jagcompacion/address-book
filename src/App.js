import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadContacts } from "./actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./components/Topbar";

import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Contacts />
        </Route>
        <Route path="/add-contact">
          <AddContact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
