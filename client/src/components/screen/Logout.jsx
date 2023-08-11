import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout() {
  const nav = useNavigate();

  useEffect(()=>{
    fetch('http://localhost:5000/logout',{
      method: 'GET',
      headers:{
        // Accept:"application/json",
        'Content-Type': 'application/json'
      },
      // credentials:'include'
    }).then((res)=>{
        nav('/login',{replace:true})
        if (res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <>
        <div>hello</div>
    </>
  )
}

export default Logout