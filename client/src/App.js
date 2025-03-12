import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Chat from './components/Chat';

import './App.css';

function App() {
  const [code, setCode] = useState('// Write your code here...');

  return (
    <div className="App">
      <h1>Real-time Code Collaboration Platform</h1>
      <p>Welcome to the collaborative coding environment!</p>
      <CodeEditor code={code} onCodeChange={setCode} />
      <Chat />
    </div>
  );
}


export default App;
