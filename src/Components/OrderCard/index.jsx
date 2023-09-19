import {IoIosCloseCircle} from "react-icons/io"
import { EcoContext } from "../../Context"
import { useContext } from "react"

export function Ordercard(datacarro,value){
    const {setCarro,carro,setCount}=useContext(EcoContext)
    const EliminarCar=(index)=>{
        const naw=[...carro]
        const indice=naw.findIndex((item)=>item.id===index)
        naw.splice(indice,1)
        
        return setCarro(naw),setCount(naw.length)
    }
    const Cerrar=(valor)=>{
        if(!valor){
            return(
                <IoIosCloseCircle onClick={()=>{
                    EliminarCar(datacarro.datacarro.id)
                }} className="text-black cursor-pointer"/>
            )
        }
        else{
            return(
                null
            )
        }
    }
    
    return(
        <div className="flex justify-between items-center  mb-4">

            <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img src={datacarro.datacarro.image} alt="jpak" className="w-full h-full rounded-lg object-cover"/>
            </figure>
            <p className="text-xs font-light">{datacarro.datacarro.title}</p>
            </div>
            <div className="flex items-center gap-2">
            
            <p className="text-lg font-medium">{datacarro.datacarro.price}</p>
            {Cerrar(datacarro.value)}
            </div>
            
        </div>
    )
}