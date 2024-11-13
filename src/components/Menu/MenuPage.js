import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

function MenuPage() {
const [menus, setMenus] = useState([]);
// Fetch Menu data 
useEffect(() => {
fetch("http://localhost:6001/Menu")
.then((res) => res.json())
.then((data) => setMenus(data))
.catch((error) => console.error("Error fetching menu data:", error));
}, []);

return (
<main>
{menus.map((menu) => (
<MenuCard key={menu.id} Menu={menu} setMenu={setMenus} />
))}
</main>
);
}

export default MenuPage;

