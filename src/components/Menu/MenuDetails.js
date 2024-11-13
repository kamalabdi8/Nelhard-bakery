import React, { useEffect, useState } from 'react';

function MenuDetails({ MenuId }) {
const [Menu, setMenu] = useState(null);

useEffect(() => {
// Fetch Menu data from local server
fetch(`http://localhost:6001/Menu/${MenuId}`)
.then(response => response.json())
.then(data => setMenu(data))
.catch(error => console.error("Error fetching menu data:", error));
}, [MenuId]);

if (!Menu) return <div>Loading...</div>;

const { rating, moreinfo } = Menu;
return (
<div>
<p>
Rating: <b>{rating}</b>
</p>
<p>
{moreinfo}
</p>
</div>
);
}

export default MenuDetails;
