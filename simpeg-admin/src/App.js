import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import ErrorPage from "./pages/errorpage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/dashboard";
import IndexUser from "./pages/userProfile";
import UserAdmin from "./pages/datauser";
import IndexPegawai from "./pages/pegawai";
import IndexPegDetail from "./pages/pegdetail";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/user" component={IndexUser} />
        <PrivateRoute exact path="/datauser" component={UserAdmin} />
        <PrivateRoute exact path="/pegawai" component={IndexPegawai} />
        <PrivateRoute exact path="/pegdetail" component={IndexPegDetail} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
