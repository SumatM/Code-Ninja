import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

interface Display {
  show: string;
}

export const OutputField = ({ show }: Display) => {
  return (
    <div>
      <div>
        <AceEditor
          width="100%"
          height="100vh"
          mode="javascript"
          theme="monokai"
          value={show}
          placeholder="
          
          Output will show here!!"
          fontSize="1.1rem"
          wrapEnabled={true}
          readOnly
        />
      </div>
    </div>
  );
};
