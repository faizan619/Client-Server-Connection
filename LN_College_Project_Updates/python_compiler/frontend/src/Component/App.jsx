import { useState } from "react"
import axios from 'axios';

function App() {

    const [code,setCode] = useState('');
    const [output,setOutput] = useState('');

    const handleSubmit = async ()=>{

        const payload = {
            language:"py",
            code
        };

        try{   
            const {data} = await axios.post("http://localhost:5000/run",payload)
            setOutput(data.output);
            console.log("faizan data",data)
            setCode("");
        }catch(err){
            console.log(`error is app.js catch :${err.response}`);
        }
    }

  return (
    <>
        <div className="container">
            <h1>Online Code Compiler</h1>
            <textarea name="code" id="code" cols="70" rows="20" value={code} 
            onChange={
                (e)=>{
                    setCode(e.target.value)
                    }
                }></textarea>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p style={{ whiteSpace: "pre-wrap" }}>{output}</p>
            
        </div>
    </>
  )
}

export default App