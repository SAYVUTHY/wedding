import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Letter } from './Component/Letter';
import { Location } from './Component/Location';
import { Home } from './Component/Home';
import { Planwedding } from './Component/Planwedding';
import { GoogleMap } from './Component/GoogleMap';
import { Acknow } from './Component/Acknow';



function App() {



  return (
    <>
      <BrowserRouter>

        <div className='content'>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/:nameid' element={<Home />} />
            <Route path='/letter' element={<Letter />} />
            <Route path='/location' element={<Location />} />
            <Route path='/Planwedding' element={<Planwedding/>} />
            <Route path='/GoogleMap' element={<GoogleMap/>}/>
            <Route path='/Thanks' element={<Acknow/>}/>
          </Routes>
          {/* <Home/> */}
          {/* <Letter/> */}
          {/* <Location /> */}
          
        </div>

      </BrowserRouter>

      {/* <div className='removeleft'>a</div>
      <div className='removeright'>a</div> */}

    </>
  );
}

export default App;
