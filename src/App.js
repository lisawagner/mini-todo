import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:id" element={<SingleProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
