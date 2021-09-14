import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div >
    {/* <Header/> */}
 
   <Navbar/>
    <Home/>
    <Footer/>

    </div>
  );
}

export default App;
