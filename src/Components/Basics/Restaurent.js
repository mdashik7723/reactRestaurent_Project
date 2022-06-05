import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqlist = [...new Set(Menu.map((Element) => {
  return Element.category;
})), "All"
];
console.log(uniqlist);
const Restaurent = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setmenuList] = useState(uniqlist)

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatelist = Menu.filter((Element) => {
      return Element.category === category;
    })
    setMenuData(updatelist)
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );

};

export default Restaurent;