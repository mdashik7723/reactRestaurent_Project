import React from 'react'

const Navbar = ({filterItem ,menuList}) => {
  return (
    <>
        <nav className='navbar'>
      <div className='btn-group'>
        {menuList.map((Element) => {
          return <button className='btn-group__item' onClick={()=>filterItem(Element)} >{Element}</button>
        })}
        
       
      </div>
    </nav>
    </>
  )
}

export default Navbar;