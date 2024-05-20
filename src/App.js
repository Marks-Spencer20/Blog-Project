import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './routes/Blog';
import News from './routes/News';
import Sports from './routes/Sports';
import About from './routes/About';
import Home from './routes/Home';
import Football from './routes/Football';
import Tennis from './routes/Tennis';
import OtherSports from './routes/OtherSports';
import Netball from './routes/Netball';


const App = () => {
  return (
    
    <BrowserRouter>
     
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/News" element={<News/>}/>
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Football" element={<Football/>}/>
          <Route path="/Tennis" element={<Tennis/>}/>
          <Route path="/Netball" element={<Netball/>}/>
          <Route path="/OtherSports" element={<OtherSports/>}/>

          
          
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
