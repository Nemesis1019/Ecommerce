import { useContext } from "react"
import {EcoContext} from "../../Context"
import {BiCartAdd} from "react-icons/bi"
import {AiOutlineCheckCircle} from "react-icons/ai"
export function Card(data){
    const {count,setCount,setDet,setCarro,carro}=useContext(EcoContext)
    const AddProduct=(valor)=>{
        
        setCarro([...carro,valor])
        setCount(count+1);
    }
    const RenderIcon=(id)=>{
        const Isin = carro.filter(producto => producto.id === id).length
        
        if(Isin){
            return(
                <div className="absolute top-0 right-0 flex justify-center  hover:scale-125 cursor-pointer   bg-verde items-center w-6 h-6 rounded-full m-2 p-1"><AiOutlineCheckCircle className="text-white"/></div>
            )
        }
        else{
            return(
                <div className="absolute top-0 right-0 flex justify-center  hover:scale-125 cursor-pointer  bg-zinc items-center w-6 h-6 rounded-full m-2 p-1" onClick={()=>{ AddProduct(data.data)}}><BiCartAdd className="text-black"/></div>
            )
            }    
        
    }
    return(
        <div className="   w-70 h-70 bg-zinc rounded-lg" >
            <figure className="relative mb-2 w-full h-4/5 " >
                <span className="absolute bottom-0 left-0 bg-black text-white rounded-lg text-xs m-2 px-3 py-2">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg cursor-pointer" src={data.data.image} onClick={()=>(setDet(data.data))}/>
                {RenderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-xs lg:tex-sm xl  font-light ml-2">{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    )
}