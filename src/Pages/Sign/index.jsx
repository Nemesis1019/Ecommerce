import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import SingImg from "../../assets/user-interface.png"
import { EcoContext } from "../../Context";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function Sign(){
    const {Login,setLogin}=useContext(EcoContext)
    let email=""
    let password=""
    
    const validate=(Login)=>{
        if(Login.length===0){
            return(
                <Layout>
                    <div className="w-full h-screen flex flex-col justify-center items-center    ">
                        <div className="flex flex-col justify-center items-center gap-4 bg-zinc w-4/5 h-2/3 rounded-lg">
                            <div>
                                <div className="w-20 h-20">
                                    <img src={SingImg}></img>
                                </div>
                            </div>
                            <div className="flex flex-col w-2/4 h-10 gap-4">
                                <input  type="email" onChange={(event)=>email=(event.target.value)} placeholder="Ingrese el email" ></input>
                                <input  type="password" onChange={(event)=>password=event.target.value} placeholder="Ingrese la contraseña"></input>
                                <button className="items-center bg-black w-2/5 cursor-pointer  text-white" onClick={()=>user(email,password)}>Sign in</button>
                            </div>
                        </div>   
                    </div>
                </Layout>
            )
        }
        else{
            return(
                <Layout>
                    <Navigate to="/acount"></Navigate>
                </Layout>
            )
        }
    }

    const user=(email,password)=>{
        const defaultemail="admin@gmail.com"
        const defaultpassword="admin"
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValid = emailRegex.test(email);
    
    if((email==="" || password==="")){
        
        toast.error("Hay recuadros por llenar",{duration:2000,position:"bottom-right"})
    }
    else if(!isValid){
        toast.error("Ingresa una direccion de email valida",{duration:2000,position:"bottom-right"})
    }
    else if(email!=defaultemail || password!=defaultpassword){
        toast.error("Email y/o contraseña incorrectos",{duration:2000,position:"bottom-right"})
        

    }
    
    else if((email===defaultemail) && password==defaultpassword){
        const data={
            "email":email,
            "password":password
        }
        toast(`Bienvenido ${email}`,{duration:2000,position:"bottom-right",icon:"😄"})
        setLogin(data)    
    }
    }
    return(
        <div>
            {validate(Login)}
        </div>
        
    )
}