import Login from './component/Login';
import Main from './component';
import Redirect from './component/Redirect';
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/redirect",
    component : Redirect
  }
];

export default routes;
