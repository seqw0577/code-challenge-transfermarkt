import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./router_list";

function IndexRouter(props) {
    return <Switch>
        {routes.map((item,index)=>{
            return <Route 
                path={item.path}
                exact={item.exact}
                key={index}
                render={(routerProps)=>{
                    return item.render({...routerProps,...props});
                }}
            />
        })}
    </Switch>
}
export default IndexRouter;