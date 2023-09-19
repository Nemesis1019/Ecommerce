import { useContext } from "react"
import { EcoContext } from "../../Context"
import {IoIosCloseCircle} from "react-icons/io"
import { Ordercard } from "../OrderCard"
import { Link  } from "react-router-dom"

export function Checkout(){
    const {carro,setShop,total,Order,setOrder,setCarro,setCount}=useContext(EcoContext)
    

    
    const suma=(data)=>{
        let suma=0
        data.forEach((carr)=>suma=suma+carr.price)
        
        return suma
    }
    const Orderadd=()=>{
        const orderCar={
            date:"01-01-01",
            products:carro,
            totalproducts:carro.length,
            Totalprice:suma(carro)
        }
        setOrder([...Order,orderCar])
        setCarro([])
        setCount(0)
        
    }
    return(
        <aside className="flex flex-col fixed right-0 border bg-zinc border-black rounded-lg w-[360px] h-[calc(100vh-80px)] // Arbitrary values> overflow-y-scroll ">
           <div className="flex justify-between items-center p-6">
            
                <div className="font-medium">My order</div>
                <div className="absolute top-0 right-0 flex justify-center  hover:scale-125   bg-zinc items-center w-6 h-6 rounded-full m-2 p-1" onClick={()=>(setShop(false))}><IoIosCloseCircle className="text-black"/></div>
           </div>
           <div>
            {carro?.map((dato)=>(<Ordercard key={dato.id} datacarro={dato} value={false}/>))}
           </div>
            <div className="flex justify-between p-6 mb-6 flex-1"> 
                <div>Total</div>
                <div>{suma(carro)}</div>
                
            </div>
            <div className="flex justify-center w-full  ">
            <Link to="/orders/last/">
            <button className="text-center bg-black p-6 text-white rounded-lg cursor-pointer " onClick={()=>(Orderadd(), setShop(false))}>Checkout</button>
            </Link>
            </div>
            
           
        </aside>
    )
}