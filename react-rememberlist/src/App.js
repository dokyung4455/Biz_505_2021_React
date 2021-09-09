import './App.css';
// import Header from './comps/Header';
// import RemBody from './comps/RemBody';
// import Footer from './comps/Footer';
import {Header,Footer} from "./comps/index";
import { RemBody } from "./comps/index";

function App() {
  return (
    <div className="App">
		<Header/>
		<RemBody/>
		<Footer/>
    </div>
  );
}

export default App;
