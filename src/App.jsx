import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './sections/Home';
import ReactProjects from './sections/ReactProjects';
import BlenderProjects from './sections/BlenderProjects';
import YouTube from './sections/YouTube';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="react-projects" element={<ReactProjects />} />
            <Route path="blender-projects" element={<BlenderProjects />} />
            <Route path="youtube" element={<YouTube />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
