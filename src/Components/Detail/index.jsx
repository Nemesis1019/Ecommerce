import { useContext } from "react"
import { EcoContext } from "../../Context"
import {IoIosCloseCircle} from "react-icons/io"

export function Detail(data){
    const {det,setDet}=useContext(EcoContext)
    return(
        <aside className="flex flex-col fixed right-0 border bg-zinc border-black rounded-lg w-[360px] h-[calc(100vh-80px)] // Arbitrary values>">
           <div className="flex justify-between items-center p-6">
                <div className="font-medium">Detail</div>
                <div className="absolute top-0 right-0 flex justify-center  hover:scale-125   bg-zinc items-center w-6 h-6 rounded-full m-2 p-1" onClick={()=>(setDet(null))}><IoIosCloseCircle className="text-black"/></div>
           </div>
            <figure className="w-full grid justify-items-center ">
                <img className=" h-52 w-52 border-black  rounded-lg " src={det.image}/>
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium ">$ {det.price}</span>
                <span className="font-medium mb-2">{det.title}</span>
                <span className="text-xs">{det.description}</span>
            </p>
        </aside>
    )
}