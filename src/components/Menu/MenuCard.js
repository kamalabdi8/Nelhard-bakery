import React, { useState } from "react";

function MenuCard({ Menu, setMenu }) {
const [isordered, setisordered] = useState(false);
const [showDetails, setShowDetails] = useState(false); // State for showing details
const [isHidden, setIsHidden] = useState(false); // State for hiding the card

const handleStockToggle = () => {
const updatedStockStatus = !isordered;
setisordered(updatedStockStatus);
fetch(`http://localhost:6001/Menu/${Menu.id}`, {
method: "PATCH",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ isordered: updatedStockStatus })
})
.then(response => response.json())
.then(updatedMenu => {
setMenu(prev =>
prev.map((p) => (p.id === Menu.id ? updatedMenu : p))
);
})
.catch(error => console.error("Error updating menu item:", error));
};

const handleDetailsClick = () => {
setShowDetails(prev => !prev);
};

if (isHidden) return null; // Hide component if isHidden is true

return (
<li className="card" data-testid={`Menu-item-${Menu.id}`}>
<img src={Menu.image || "https://via.placeholder.com/400"} alt={Menu.name} />
<h4>{Menu.name}</h4>
<p>Price: ${Menu.price}</p>
<div className="extra content">
{showDetails && <MenuDetails Menu={Menu} />}

<button className="button" onClick={handleDetailsClick}>
{showDetails ? "Less Info" : "More Info"}
</button>
<button className="button" onClick={() => setIsHidden(true)}>
Hide Me
</button>
</div>
<div>
<button 
onClick={handleStockToggle} 
className={isordered ? "ordered" : "order-now"}
>
{isordered ? "Ordered" : "Order Now!"} 
</button>
</div>
</li>
);
}

export default MenuCard;