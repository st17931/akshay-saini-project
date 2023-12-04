import { useEffect, useState } from "react";
import Card from "./Card";

const Body = ()=>{
  const [restaurantsData, setRestaurantsData] = useState([]);

  const getResturants = async ()=>{
    const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await res.json();
    //console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurantsData(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  }

  useEffect(()=>{
    getResturants();
  },[]);

    return(
      <div className='bodyDiv'>
        
        {restaurantsData.map((restaurant)=>{
          return <Card resName={restaurant.info.name} resId={restaurant.info.id} resCuisines={restaurant.info.cuisines}/>
        })}
        {/* {[<h1>This is first</h1>,<h2>This is second</h2>]} */}

      </div>
    )
  }

  export default Body;