import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="blogs/:id" element={<BlogDetails/>}/>
            <Route path="*" element={<NotFound />} />{/* ESTA PAGINA DE -NAO ENCONTRADA- TEM QUE SER A ULTIMA */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
