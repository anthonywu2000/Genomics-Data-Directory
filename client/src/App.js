import './App.css';
import PsetAPI from './PsetAPI';
import PsetDB from './PsetDB';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar title={"ORCESTRA PSets"} link1={"API"} link2={"Database"} ref1={"/"} ref2={"/database"} />
        <Routes>
          <Route path="/" element={<PsetAPI />} />
          <Route path="/database" element={<PsetDB />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
