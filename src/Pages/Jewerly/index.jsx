import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { EcoContext } from "../../Context";
import { Card } from "../../Components/Card";
import { useEffect } from "react";
import {BiSearchAlt2} from "react-icons/bi"
import { Checkout } from "../../Components/Checkout"
import { Detail } from "../../Components/Detail"
export function Jewerly(){
    const {Item,Filtred,setFiltred,Search,setSearch,Ultimo,setUltimo,det,shop} = useContext(EcoContext)

    const filterElectronics=(Item)=>{
       return Item?.filter((item)=>item.category.toLowerCase().includes("jewelery"))
        
        
    }
    const filterSearchJewerly=(Item,Search)=>{
      const Jewerly= Item?.filter((item)=>item.category.toLowerCase().includes("jewelery"))
      return Jewerly.filter((item)=>item.title.toLowerCase().includes(Search.toLowerCase()))
    }
    useEffect(()=>{ setFiltred(filterElectronics(Item),setUltimo(filterSearchJewerly(Item,Search)))

    },[Item,Search])

    const renderView = () => {
        
      const datos = Search.length>0?Ultimo:Filtred
        if (datos?.length > 0) {
          return datos.map(item => (
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
          
            <div className="  grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ml-5 max-w-screen-lg mt-4 ">
                {renderView()}
            </div>
            {det?<Detail />:null}
            {shop?<Checkout/>:null}
        </Layout>
    )
}
