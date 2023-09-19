import {MdOutlineAccountCircle} from "react-icons/md"
import {BiLogIn} from 'react-icons/bi';
import { useContext } from "react";
import { EcoContext } from "../../Context";
import { NavLink } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineMenu} from "react-icons/ai"
import {BiShoppingBag} from "react-icons/bi"
export function Navmobile(){
    
    
    const {count,setShop,shop,Menu,setMenu} =useContext(EcoContext)
    
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full px-3 py-5 ">
            <ul className="flex items-center gap-3">
                <li className="cursor-pointer" onClick={()=>(setMenu(!Menu))}>
                <AiOutlineMenu/>
                </li>
                <li className="font-bold text-lg">
                    <NavLink  to="/" >
                            Shopi
                    </NavLink>
                </li>
                
            </ul>
            <ul className="flex items-center gap-3">
                
                <li>
                    <NavLink to="orders"  >
                        <BiShoppingBag size={24}/> 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/acount"  >
                            <MdOutlineAccountCircle size={24} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign"    >
                            <BiLogIn size={24} />
                    </NavLink>
                </li>
                <li className="flex flex-column items-center cursor-pointer">
                    
                    <div className="flex ">
                        <div className="mt-1"><FiShoppingCart onClick={()=>(setShop(!shop))}  /></div>
                        <div>{count}</div>
                    </div>
                            
                    
                </li>
                
               
            </ul>
        </nav>
    )
}