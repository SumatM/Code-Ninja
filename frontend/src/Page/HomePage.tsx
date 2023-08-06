import CodeEditor from "../component/CodeEditor"
import { OutputField } from "../component/OutputField"
import styled from 'styled-components'
import { useState } from 'react';
import { FunctionalButtons } from "../component/FunctionalButtons";

export const HomePage = () => {

    const [code, setCode] = useState('');

    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
    };
    const handleLanguageChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
      };

    return (
        <DIV>
            <h1>Code-Ninja</h1>
            <div className="buttons_action">
                <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                </select>
                <FunctionalButtons title={"Convert Code"} action={'ads'} />
                <FunctionalButtons title={"Debug Code"} action={'ads'} />
                <FunctionalButtons title={"Code Quality Check"} action={'ads'} />
            </div>
            <div className="container">
                <div>
                    <CodeEditor code={code} onChange={handleCodeChange} />
                </div>
                <div>
                    <OutputField />
                </div>
            </div>
        </DIV>
    )
}


const DIV = styled.div`
   text-align:center;
   
   .container{
    display:flex;
    padding:15px;
    border:1px solid black;

   }

   .container>div{
    width:50%
   }
   .container>div:nth-child(1){
    text-align:left;
   }

   .buttons_action{
    display:flex;
    justify-content:center;
   }

   select{
    padding:10px;
    margin: 1 10px;
   }

   button{
    padding:10px;
    margin: 1 10px;
   }

`