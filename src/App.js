import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Sidebar />} />
        <Route path='home' element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
