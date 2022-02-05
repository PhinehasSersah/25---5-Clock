import react from 'react';
import './App.css';
import { Header } from './components/Header/header';
import ClockLogics from './components/Clock/clockLogics';



function App() {
  return (
    <div className="App">
      <Header />
      <ClockLogics />
    </div>
  );
}

export default App;
