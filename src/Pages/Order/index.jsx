import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { EcoContext } from "../../Context";
import { Ordercard } from "../../Components/OrderCard";
import {BiArrowBack} from "react-icons/bi"
import { Link  } from "react-router-dom"
import { useParams } from "react-router-dom";

export function Order(){
    let {last} =useParams()
    let {index} =useParams()  
    const {Order} = useContext(EcoContext)
    
    if(last=="last"){
        index=Order.length-1 
    }
    
    console.log(index)
    return(
        <Layout>
            <div className="flex justify-between gap-6  align-center ">   
                <Link to="/orders">
                    <BiArrowBack className=" mt-1"></BiArrowBack>
                </Link>
                <p className="mt-15" >My order</p>
            </div>
            
            <div className="w-2/3 ">
                {Order?.[index]?.products.map((dato)=>(<Ordercard key={dato.id} datacarro={dato} value={true} />))}
            </div>
        </Layout>
    )
}