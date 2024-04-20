
import './App.css';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import Reservation from './Components/Reservation/reservation';
import { Route,Routes, } from 'react-router-dom';
import Testimonials from './Components/Main/testimonial';

function App() {
  return (
  <div>
           
         <Nav/>
              
               <Routes>
                  <Route path='/home' element={
                    <>
                       <Header/>
                       <Main/>
                 </>
              }>
               </Route>

                <Route path='Reservation'element={
                  <Reservation/>
                }>

                  </Route>
           </Routes>
           
          <Footer/>
           
  </div>
  );
}

export default App;
