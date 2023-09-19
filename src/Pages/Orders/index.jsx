import { Layout } from "../../Components/Layout";
import { OrdesCard } from "../../Components/OrdersCard";
import { useContext } from "react";
import { EcoContext } from "../../Context";

export function Orders(){
    const {Order}=useContext(EcoContext)
    return(
        <Layout>
            <div>
                <div className="mb-4 flex justify-center">
                    <p className="text-xl font-sans">My orders</p>
                </div>
            {Order.map((dato,index)=>(
                <OrdesCard key={dato.id} data={dato} indice={index}/>
            ))} 
            </div>  
        </Layout>
    )
}