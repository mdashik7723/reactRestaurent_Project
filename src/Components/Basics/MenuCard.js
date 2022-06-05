import React from 'react'
const MenuCard = ({menuData}) =>{
    // console.log(menuData);
  return (
      <>
      <section className='main-card-container'>
      {menuData.map((Element)=>{

                   
          const {id,name,category,description,image} = Element;
          return (
              <>
              
            <div className='card-container'key={id}>
            <div className='card'>
              <div className="card-body">
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'> </span>
                <span className='card-title'>{name}</span>
                <br/>
                <span className='card-description subtle'>{description}</span>
                <div className='card-read'>READ</div>
                <img src={image} alt="" className='card-media'/>
                <span className='card-tag subtle'>Order now</span>
              </div>
            </div>
          </div>
          
          </>
          )
      })}

</section>
    
  </>
  )
}
export default MenuCard;