import React from "react";
import Header from "./Shopping/Header";
import HomePage from "./Shopping/HomePage";
import Uploads from "./Shopping/Uploads";
import Comment from "./Shopping/Comment";
import Comments from "./Shopping/Comments";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import antd from "antd/dist/antd.css";

const App = () => {
  return (
    <div style={{ backgroundColor: " #191a1c" }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post" component={Uploads} />
          <Route path="/comment/:id" component={Comment} />
          <Route path="/comments/" component={Comments} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
