import './App.css';
import InputTextSection from "./Component/InputTextSection";
import SampleTextSection from "./Component/SampleTextSection";
import { createContext, useState } from 'react';
import Dashboard from './Component/Dashboard';
import { data } from './TextData';
import { Notes } from './Component/Notes';

export const MyContext = createContext();

function App() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState("Start");
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(data[0]);

  return (
    <div className="App">
      <MyContext.Provider value={{input, setInput, status, setStatus, counter, setCounter, text, setText}}>
        <h1>Typing Speed Tester</h1>
        <span>Author: Victor Anokwuru</span>
        <InputTextSection />
        <SampleTextSection />
        <Dashboard />
        <Notes />
      </MyContext.Provider>
    </div>
  );
}

export default App;
