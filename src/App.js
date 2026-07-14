import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';




function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookInfo />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;


