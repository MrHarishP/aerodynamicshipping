import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Export from './Pages/Export';
import Import from './Pages/Import/Import'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" Component={About } />
        <Route path="/contact" Component={Contact } />
        <Route path="/Export" Component={Export } />
        <Route path='/Import' Component={Import}/>
      </Routes>
    </Router>
  );
}

export default App;
