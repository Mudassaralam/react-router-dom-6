import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Page404 from './components/pages/Page404';
import Users from './components/pages/Users';
import Filter from './components/pages/Filter';
import Company from './components/pages/Company';
import Channel from './components/pages/Channel';
import Others from './components/pages/Others';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* <Route path='/*' element={<Page404 />} /> */}
          {/* <Route path='/*' element={<Navigate to='/' />} />  */}
          {/* <Route path='/users/:name' element={<Users />} /> */}
          <Route path='/filter' element={<Filter />} />
          <Route path='/contact/' element={<Contact />}>
              <Route path='company'  element={<Company />}/>
              <Route path='channel'  element={<Channel />}/>
              <Route path='others'  element={<Others />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
