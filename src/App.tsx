import React from 'react';
import Header from './pages/Header'
import Fotter from './pages/Fotter';
import Top from './pages/Top';

import {BrowserRouter,Routes , Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
       <Routes>
        <Route path="gitpage" >
         <Route path='top' element={<Top/>} />
         <Route path=''/>
        </Route>
       </Routes>
      </BrowserRouter>
      <Fotter />
    </>
  );
}

export default App;
