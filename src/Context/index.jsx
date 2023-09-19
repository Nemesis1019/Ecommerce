import { createContext, useState } from "react";
import { useEffect } from "react";
import {urlapi} from "../API"
const EcoContext=createContext()


  
  function Ecoprovider({children}){
    const [Item,setItem] = useState(null)
    const [count,setCount]=useState(0)
    const [det,setDet]=useState(null)
    const [carro,setCarro]=useState([])
    const [shop,setShop]=useState(false)
    const [total,setTotal]=useState(0)
    const [Order,setOrder]=useState([])
    const [Search,setSearch]=useState("")
    const [Filtred,setFiltred]=useState([])
    const [Ultimo,setUltimo]=useState([])
    const [Login,setLogin]=useState([])
    const [Menu,setMenu]=useState(false)
   
    
    useEffect(()=>{
        fetch(`${urlapi}/products`)
        .then(result=>result.json())
        .then(data=>setItem(data))
    
    
      },[])
      
        
    
    return(
        <EcoContext.Provider value={{count,setCount,det,setDet,carro,setCarro,shop,setShop,total,setTotal,
        Order,setOrder,setItem,Item,setSearch,Search,setFiltred,Filtred,Ultimo,setUltimo,Login,setLogin,Menu,setMenu}}>
            {children}
        </EcoContext.Provider>
    )
}

export {EcoContext,Ecoprovider}

