

const Card = ({resName, resId, resCuisines})=>{
    
    return(
      <div className='cardDiv'>
        
        <img alt="my image" src="https://etimg.etb2bimg.com/photo/75161189.cms"/>
        <h3>{resName}</h3>
        {resCuisines.map((cuisines)=>cuisines)}
      </div>
    )
  }

  export default Card;