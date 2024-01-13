import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import ShowUser from './pages/Users/ShowUser';
function App() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Users' element={<Users/>} />
      <Route path='/Users/:userId' element={<ShowUser />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
