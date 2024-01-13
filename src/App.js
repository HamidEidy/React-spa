import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
function App() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Users' element={<Users/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
