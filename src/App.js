import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import NewPage from './components/NewPage';
import LastPage from './components/LastPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-wrap md:flex md:flex-row xl:justify-between'>
      <MainPage />
      <NewPage />
      </div>
      <LastPage />
    </div>
  );
}

export default App;
