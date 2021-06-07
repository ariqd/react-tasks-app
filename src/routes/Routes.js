import { Route } from "react-router-dom";
import Auth from "../views/Auth";
import Tasks from "../views/Tasks";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Auth} />
      <Route exact path="/tasks" component={Tasks} />
    </>
  );
};

export default Routes;
