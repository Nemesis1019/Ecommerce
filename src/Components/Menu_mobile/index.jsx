import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { EcoContext } from "../../Context"
export function Menumo(){
    const {Menu,setMenu} =useContext(EcoContext)
    const activeStyle="text-black text-lg"
    const rendermenu=(Menu)=>{
        if(Menu){
            return(
                <aside className="  fixed z-10 top-16  px-3  left-0  bg-white border-solid border-2 border-black  w-1/6 h-1/4   ">
           <ul className="flex flex-col  mt-4 ml-4">
            
            <li className="font-bold text-metal text-lm">
                <NavLink to="/electronics"  onClick={()=>(setMenu(false))} className={({isActive})=>isActive? activeStyle:undefined}>
                    Electronics          
                </NavLink>
            </li>
            <hr></hr>
            <li className="font-bold text-metal text-lm">
                <NavLink to="/jewerly" onClick={()=>(setMenu(false))}  className={({isActive})=>isActive? activeStyle:undefined}>
                    Jewerly                
                </NavLink>
            </li>
            <hr></hr>
            <li className="font-bold text-metal text-lm">
                <NavLink to="/mens" onClick={()=>(setMenu(false))}   className={({isActive})=>isActive? activeStyle:undefined}>
                    Mens                      
                </NavLink>
            </li>
            <hr></hr>
            <li className="font-bold text-metal text-lm">
                <NavLink to="/womens " onClick={()=>(setMenu(false))}  className={({isActive})=>isActive? activeStyle:undefined}>
                    Womens
                </NavLink>
            </li>
            <hr></hr>
           </ul>
        </aside>
            )
        
        }
    }
    return(
        <div>{rendermenu(Menu)}</div>
        
    )

}