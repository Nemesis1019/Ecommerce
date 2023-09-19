import {Layout} from "../../Components/Layout"
import { Card } from "../../Components/Card"

import { Detail } from "../../Components/Detail"
import { useContext, useEffect, useState } from "react"
import { EcoContext } from "../../Context"
import { Checkout } from "../../Components/Checkout"
import {BiSearchAlt2} from "react-icons/bi"
export function Home(){
    
    const {det,shop,Item,Search,setSearch,setFiltred,Filtred} = useContext(EcoContext)
    const ver=(Item,Search)=>{
      return (Item?.filter((item)=>item.title.toLowerCase().includes(Search.toLowerCase())))
      
    }
    useEffect(()=>{ setFiltred(ver(Item,Search))

    },[Item,Search])

    const renderView = () => {
        const itemsToRender = Search?.length > 0
          ? Filtred
          : Item;
    
        if (itemsToRender?.length > 0) {
          return itemsToRender.map(item => (
            <Card key={item.id} data={item} />
          ));
        } else {
          return <p>No Results Found</p>;
        }
      };
    
    
    return(
        <Layout>
            <div className="flex gap-2">
            <input className="rounded-lg text-center" onChange={(event)=>setSearch(event.target.value)} placeholder="Ingresa el nombre" ></input>
            <BiSearchAlt2 className="mt-1"/>
          </div>
            <div className=" grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ml-5 max-w-screen-lg mt-4">
            
            
            {renderView()} 
            </div>
            {det?<Detail />:null}
            {shop?<Checkout/>:null}
            
        </Layout>

        
    )
}