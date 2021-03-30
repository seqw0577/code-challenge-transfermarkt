import React from "react";
import IndexPage from "../view/index";
import PlayerPage from "../view/player";
import Undefined404Page from "../view/404";

const routes = [{
  path: "/",
  exact: true,
  render(props){
    return <IndexPage {...props} />
  }
},{
  path: "/player/:id",
  exact: true,
  render(props){
    return <PlayerPage {...props} />
  }
},{
  path: "",
  exact: false,
  render(props){
    return <Undefined404Page {...props} />
  }
}];


export {routes};