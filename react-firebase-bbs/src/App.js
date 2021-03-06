import './App.css';
import "./css/menu.css";
import "./css/writer.css"
import Header from './comps/Header';
import MainNav from './comps/MainNav';
import BBsMain from './comps/BBsMain';
import BBsWrite from './comps/BBsWrite';
import Login from './comps/Login';
import Join from './comps/Join';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
	  <BrowserRouter>
    <div className="App">
		  <Header/>
		  <MainNav/>
		  <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} exact />
		<Route path="/write/:id" component={BBsWrite} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/join" component={Join} />
    </div>
	</BrowserRouter>
  );
}

export default App;
