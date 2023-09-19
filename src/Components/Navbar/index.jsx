import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { EcoContext } from "../../Context"
import {FiShoppingCart} from "react-icons/fi"

export function Navbar(){

    
    const activeStyle="underline underline-offset-4"
    const {count,setShop,shop,setSearch,Login} =useContext(EcoContext)
    const correo=(Login)=>{
        const result=Login.length!=0?Login.email:"prueba@gmail.com"
        return result
    }
    return(
        <nav className=" flex justify-between items-center fixed z-10 top-0 w-full px-3 py-5 ">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink  to="/" >
                            Shopi
                            
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={()=>{{setSearch("")}}} className={({isActive})=>isActive? activeStyle:undefined}>
                            All
                            
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"  onClick={()=>{{setSearch("")}}} className={({isActive})=>isActive? activeStyle:undefined}>
                            Electronics
                            
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/jewerly" onClick={()=>{{setSearch("")}}} className={({isActive})=>isActive? activeStyle:undefined}>
                            Jewerly
                            
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mens" onClick={()=>{{setSearch("")}}}  className={({isActive})=>isActive? activeStyle:undefined}>
                            Mens  
                                  
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/womens " onClick={()=>{{setSearch("")}}} className={({isActive})=>isActive? activeStyle:undefined}>
                           Womens
                           
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">    
                   {correo(Login)}
                    
                </li>
                <li>
                    <NavLink to="orders" className={({isActive})=>isActive? activeStyle:undefined}>
                            Myorders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/acount" className={({isActive})=>isActive? activeStyle:undefined}>
                            My acount
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign" className={({isActive})=>isActive? activeStyle:undefined}>
                            Sign in
                    </NavLink>
                </li>
                <li className="flex flex-column items-center cursor-pointer">
                    
                    <div className="flex ">
                        <div><FiShoppingCart onClick={()=>(setShop(!shop))}  /></div>
                        <div>{count}</div>
                    </div>
                            
                    
                </li>
                
               
            </ul>
        </nav>
    )
}