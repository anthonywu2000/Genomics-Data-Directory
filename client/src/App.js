import './App.css';
import PsetAPI from './PsetAPI';
import PsetDB from './PsetDB';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PsetAPI />} />
          <Route path="/database" element={<PsetDB />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;