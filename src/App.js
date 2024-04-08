
import './App.css';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import { Route,Routes, } from 'react-router-dom';

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
           </Routes>
          <Footer/>
           
  </div>
  );
}

export default App;
