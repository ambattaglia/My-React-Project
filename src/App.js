
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Discounted from './components/Discounted';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;

