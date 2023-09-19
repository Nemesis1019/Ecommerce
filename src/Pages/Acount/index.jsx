import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { EcoContext } from "../../Context"
import SingImg from "../../assets/user-interface.png"
import {AiTwotoneShopping} from "react-icons/ai"
import { Navigate } from "react-router-dom"

export function Acount(){
    const {Login,Order} = useContext(EcoContext)
    
    const eco=(Login)=>{
        if(Login.length!=0){
            return(
                <Layout>
                    <div className="w-full h-screen flex flex-col justify-center items-center    ">
                        <div className="flex flex-col justify-center items-center gap-4 bg-zinc w-4/5 h-2/3 rounded-lg">
                            <div className="w-20 h-20">
                                <img src={SingImg}></img>
                            </div>
                            <div>
                                {Login.email}
                            </div>
                            <div className="flex gap-2">
                            <AiTwotoneShopping className="mt-1 "></AiTwotoneShopping>
                                {Order.length}
                            </div>
                        </div>   
                     </div>
                </Layout>
            )
        }
        else{
            return(
                <Layout><Navigate to="/sign"></Navigate></Layout>
            )
        }
    }
    return(
        <div>
            {eco(Login)}
        </div>
    )
}