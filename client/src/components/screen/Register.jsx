import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Register() {

    // const history = useHistory();
    const history1 = useNavigate();

    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });

    let name,value;
    const handleInputs = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e)=>{
        console.log("posting started");
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} = user;
        console.log("posting check user");
        const res = await  fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        console.log("res upper done")
        const data = await res.json();
        console.log("res lower done")

        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
            history1.push("/");
            // history1("./register",{replace:true});
        }
    }

  return (
    <>
        <div className="Container">
            <div className="registerSection">
                <div className="registerForm">
            <h1 className='registerTitle title'>Registration</h1><br/>
                    <form method="POST">
                        <div className="RegisterInputField">
                        <div className="gol">
                            <div className="Registername">
                                <label htmlFor=""> name:</label><br />
                                <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='codofile' /><br />
                            </div>
                            <div className="Registeremail">
                                <label htmlFor="">Email:</label><br />
                                <input type="text" name="email" id="name" autoComplete='off' value={user.email} onChange={handleInputs} placeholder='CodoFile@gmail.com' /><br />
                            </div>
                        </div>
                        <div className="gol">
                            <div className="Registerphone">
                                <label htmlFor="">Phone:</label><br />
                                <input type="number" name="phone" id="phone" autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='123456' /><br />
                            </div>
                            <div className="Registerwork">
                                <label htmlFor="">Work:</label><br />
                                <input type="text" name="work" id="work" autoComplete='off' value={user.work} onChange={handleInputs} placeholder='123456' /><br />
                            </div>
                        </div>
                        <div className="gol">
                            <div className="Registerpassword">
                                <label htmlFor="">Password:</label><br />
                                <input type="password" name="password" id="name" autoComplete='off' value={user.password} onChange={handleInputs} placeholder='123456' /><br />
                            </div>
                            <div className="Registercpassword">
                                <label htmlFor="">Confirm Password:</label><br />
                                <input type="password" name="cpassword" id="name" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='123456' /><br />
                            </div><br />
                        </div>
                        </div>
                        {/* <button className="btn" onClick={PostData}><a href="/">Submit</a></button> */}
                        <input type="submit" onClick={PostData} className="btn"/>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register