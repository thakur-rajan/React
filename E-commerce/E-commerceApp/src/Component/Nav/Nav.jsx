import './Nav.css'
import { FaShopify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

export default function Nav(){

    return(
        <>
          <div className="nav">
             <div className="topnav">
                 <div className="logo">
                    <span>V-Shop</span>
                    <FaShopify />
                 </div>
                    <form className="searchbox" action="">
                        <input type="text" placeholder='Search' />
                        <button><IoIosSearch /></button>
                    </form>
                    <div className="cart">
                        <TiShoppingCart />
                        <span>0</span>
                    
                 </div>
             </div>
             <div className="bottomnav">
                <li>Home</li>
                <li>Shop</li>
                <li>Cart</li>
                <li>Contact</li>
             </div>
          </div>
        </>
    )
}