import react, {useContext, useEffect, useState} from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false)
    const CartCtx = useContext(CartContext)
    const { items } = CartCtx
    const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

   
    const btnClasses =`${classes.button} ${buttonBump ? classes.bump : ''}`

    useEffect(() => {
      if(items.length === 0) {
        return
      } 
      setButtonBump(true);
      const timer = setTimeout(() => {
        setButtonBump(false)
      }, 300)
      
      return () => {
        clearTimeout(timer)
      }
    }, [items]);

  return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
      </button>
    
  )
}
export default HeaderCartButton;