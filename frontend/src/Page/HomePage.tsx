import CodeEditor from "../component/CodeEditor"
import { OutputField } from "../component/OutputField"
import styled from 'styled-components'
import { useState } from 'react';
import { FunctionalButtons } from "../component/FunctionalButtons";
import { getResponse } from "../utils/getResponse";
import LoadingSpinner from "../component/Loading";
import {PiArrowsLeftRightBold} from 'react-icons/pi'
import {VscDebugAltSmall} from 'react-icons/vsc'
import {BsCheck2Circle} from 'react-icons/bs'

export const HomePage = () => {

    const [code, setCode] = useState('');

    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    const [output, setOutput] = useState('')

    const [loading, setLoading] = useState(false);

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
    };
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    async function convertCode() {
        if(!code){
          return  alert('Please Enter Your Code in Input Area')
        }
        setLoading(true);
        let cmd = { endpoint: 'convert', input: { code, language: selectedLanguage } }
        let response: string = await getResponse(cmd);
        setLoading(false);
        console.log(response);
        setOutput(response);
    }


    async function debugCode() {
        if(!code){
            return  alert('Please Enter Your Code in Input Area')
          }
        setLoading(true);
        let cmd = { endpoint: 'debug', input: {code:code} }
        let response: string = await getResponse(cmd);
        setLoading(false);
        setOutput(response);
    }

    async function checkCodeQuality() {
        if(!code){
            return  alert('Please Enter Your Code in Input Area')
          }
        setLoading(true);
        let cmd = { endpoint: 'quality', input: {code:code} }
        let response: string = await getResponse(cmd);
        setLoading(false);
        setOutput(response);
    }





    return (
        <DIV>
            <h1>Code-Ninja</h1>
            <div className="buttons_action">

                {/* output lan  */}
                <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                </select>
                <FunctionalButtons title={"Convert Code"} action={convertCode} icon={<PiArrowsLeftRightBold size={"1.1rem"}/>}/>
                <FunctionalButtons title={"Debug Code"} action={debugCode} icon={<VscDebugAltSmall size="1.1rem"/>} />
                <FunctionalButtons title={"Code Quality Check"} action={checkCodeQuality} icon={<BsCheck2Circle size="1.1rem"/>} />
            </div>
            <div className="container">
                <div>
                    <CodeEditor code={code} onChange={handleCodeChange} />
                </div>
                <div>
               {loading ?  <LoadingSpinner/>  :<OutputField show={output} />}
                </div>
            </div>
        </DIV>
    )
}


const DIV = styled.div`
   text-align:center;
   padding-bottom:6vh;

   h1{
    color:#bfc3c3;
   }
   
   .container{
    display:flex;
    padding:15px;
    border:1px solid black;
    margin-top:35px;
    background-color:#2874A6;
    justify-content:space-between;

   }

   .container>div{
    width:49%
   }
   .container>div:nth-child(1){
    text-align:left;
   }

   .buttons_action{
    display:flex;
    justify-content:space-around;
    margin-top:40px;
   }

   select{
    padding:10px;
    background-color:#21618C;
    color:white;
   }

   button{
    padding:10px;
    background-color:#21618C;
    color:white;

   }

`