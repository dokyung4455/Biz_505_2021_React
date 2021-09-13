import './App.css';
import './css/BucketMain.css';
import BBsMain from './comps/BucketMain';
import Header from './comps/Header';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <Header/>
      </header>
	  <body>
		  <BBsMain/>
	  </body>
	  <Footer/>
    </div>
  );
}

export default App;
