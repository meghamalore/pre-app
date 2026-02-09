import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {

  const[firstItem,setfirstItem] = useState({
        name: "Biryani",
                quantity: 2
  });
  useEffect(() => {
   setTimeout(() => {
        setfirstItem(item => {
            return {
                ...item,
                quantity:10
            }
        })
   }, 6000);
  })

    return <section className="max-w-sm mx-auto">
        <h1>Cart</h1>
        <ul>
            <li><MenuItem item={firstItem} />
            </li>
            <li><MenuItem item={{
                name: "Chiken Handi ",
                quantity: 1
            }} />
            </li>
            <li><MenuItem item={{
                name: "Halwa Puri",
                quantity: 1
            }} />
            </li>
        </ul>

    </section>
}

export default Cart;