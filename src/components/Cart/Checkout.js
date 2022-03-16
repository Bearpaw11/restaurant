import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim === 5;

const Checkout = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true
  })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipIsValid = isFiveChars(enteredZip);

setFormInputsValidity({
  name: enteredNameIsValid,
  street: enteredStreetIsValid,
  zip: enteredZipIsValid,
  city: enteredCityIsValid
});

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredStreetIsValid &&
      enteredZipIsValid;

    

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid}`

  const StreetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid}`
      
  const zipControlClasses = `${classes.control} ${
    formInputsValidity.zip ? '' : classes.invalid}`

  const cityControlClasses = `${classes.control} ${
      formInputsValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid Name</p>}
      </div>
      <div className={StreetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid Street</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor="zip">Zip Code</label>
        <input type="text" id="zip" ref={zipInputRef} />
        {!formInputsValidity.zip && <p>Please enter a valid Zip Code (5 digits long)</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
