import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Inicial } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/inicial" element={<Inicial />} />
        {/* Add other routes here as needed */}

        <Route path="*" element={<Navigate to="/inicial" />} />
      </Switch>
    </BrowserRouter>
  );
};
