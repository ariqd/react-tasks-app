import { Route } from "react-router-dom";
import Auth from "../views/Auth";
import Tasks from "../views/Tasks";
import PrivateRoute from "./PrivateRoutes";

const Routes = () => {

  return (
    <>
      <Route exact path="/" component={Auth} />
      <PrivateRoute exact path="/tasks" component={Tasks} />
    </>
  );
};

export default Routes;
