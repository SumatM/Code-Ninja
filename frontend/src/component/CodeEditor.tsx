import MonacoEditor from 'react-monaco-editor';

interface Code {
  code:string,
  onChange:any
}

const CodeEditor = ({ code, onChange}:Code) => {
  return (
    <MonacoEditor
      width="100%"
      height="500"
      language="javascript" 
      theme="vs-dark" 
      value={code}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
