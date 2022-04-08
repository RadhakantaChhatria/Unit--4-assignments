
import './App.css';
import {Menu1, Menu2} from './Day1/Menu'
import JoinUs from './Day12/JoinUs'
import Settings from './Day12/Settings'
import Login from './Day12/Login'
import ContactUs from './Day12/ContactUs'
import Search from './Day12/Search'
import Help from './Day12/Help'
import Home from './Day12/Home'
import Download from './Day12/Download'


function App() {
  return (
    <>
    <div className="App">
      <Menu1/>
      <Menu2/>
    </div>
    <div className="buttons">
      <JoinUs/>
      <Settings/>
      <Login/>
      <ContactUs/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
    </div>
    </>
  );
}

export default App;
