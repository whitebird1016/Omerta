import { Switch, Redirect, Route } from "react-router-dom";
import Coming from "../../components/coming";
import { Public_Profix, Public_Coming } from "../../config";
import Home from "./home";
const PublicPage = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={Public_Coming} />
      </Route>
      <Route path={Public_Coming} component={Coming} />
      <Route path={Public_Profix} component={Home} />
    </Switch>
  );
};
export default PublicPage;
