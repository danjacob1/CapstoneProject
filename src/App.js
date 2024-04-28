
import './App.css';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import Reservation from './Components/Reservation/reservation';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import OrderOnline from './Components/Order Online/orderOnline';
import ConstructionPage from './Components/Login/logIn';
import Scrolltotop from './Components/OtheComponents/scrolltotop';
function App() {
  return (
  <div>
  
        <Scrolltotop/>
        <Nav />
        <Routes>
          <Route path='/' element={<><Header/><Main/></>} />
          <Route path='/Reservation' element={<Reservation />} />
          <Route path='/Order Online' element={<OrderOnline/>}/>
          <Route path='Log In' element={<ConstructionPage/>}/>
        </Routes>
        <Footer />
        
    
    </div>
  );
}

export default App;
