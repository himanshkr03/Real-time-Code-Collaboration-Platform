import React from 'react';
import { socket } from '../socket';

import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = ({ code, onCodeChange }) => {
  return (
    <CodeMirror
      value={code}
      options={{
        lineNumbers: true,
        mode: 'javascript',
      }}
      onBeforeChange={(editor, data, value) => {
        socket.emit('code change', value);

        onCodeChange(value);
      }}
    />
  );
};

export default CodeEditor;
