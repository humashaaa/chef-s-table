import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleWantToCook}) => {

    const[recipes, setRecipes] = useState([])

    useEffect( ()=>{
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])
    return (
        <div>
            <div className="grid grid-cols-2 gap-10">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} 
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}
                    ></Recipe>)
            }

            </div>


       
        </div>
    );
};

export default Recipes;