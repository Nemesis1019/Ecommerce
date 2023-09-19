import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { EcoContext } from "../../Context";
import { Card } from "../../Components/Card";
import { useEffect } from "react";
import {BiSearchAlt2} from "react-icons/bi"
import { Checkout } from "../../Components/Checkout"
import { Detail } from "../../Components/Detail"


export function Womens(){
    const {det,shop,Item,Filtred,setFiltred,Search,setSearch,Ultimo,setUltimo} = useContext(EcoContext)

    const filterElectronics=(Item)=>{
       return Item?.filter((item)=>item.category.toLowerCase().includes("women's clothing"))
        
        
    }
    const FilterSearchElectronics=(Item,Search)=>{
      const electronic = Item?.filter((item)=>item.category.toLowerCase().includes("women's clothing"))
      return electronic?.filter((item)=>item.title.toLowerCase().includes(Search.toLowerCase()))
    }
    useEffect(()=>{ setFiltred(filterElectronics(Item),setUltimo((FilterSearchElectronics(Item,Search))))

    },[Item,Search])

    const renderView = () => {
        const jewer = Search.length>0?Ultimo:Filtred
    
        if (jewer?.length > 0) {
          return jewer.map(item => (
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
            <div className=" grid gap-4 grid-cols-4 w-full ml-5 max-w-screen-lg mt-4">
                {renderView()}
            </div>
            {det?<Detail />:null}
            {shop?<Checkout/>:null}
        </Layout>
    )
}