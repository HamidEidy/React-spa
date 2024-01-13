import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import ShowUser from './pages/Users/ShowUser';
import Posts from './pages/Posts';
import ShowPost from './pages/Posts/ShowPost';
function App() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Users' element={<Users/>} />
      <Route path='/Users/:userId' element={<ShowUser />} />
      <Route path='/Posts' element={<Posts />} />
      <Route path='Posts/:postId' element={<ShowPost />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
