import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvailablelMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://meals-b48a5-default-rtdb.firebaseio.com/meals.json")
      const responseData = await response.json();
      const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price
          })

        }
        setMeals(loadedMeals)
        setIsloading(false)
    };
    fetchMeals();
  }, []);

if (isLoading) {
  return (
    <section className={classes.MealsLoading} >
      <p>loading....</p>
    </section>
  )
}

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
  
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailablelMeals;
