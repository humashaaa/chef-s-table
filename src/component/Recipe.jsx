import { CiClock2 } from "react-icons/ci";
import { LuFlame } from "react-icons/lu";


const Recipe = ({recipe, handleWantToCook}) => {
    const{recipe_name, short_description,ingredients, preparing_time,calories,recipe_image} = recipe
    return (
        <div>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={recipe_image} alt="Shoes" className="h-72 rounded-2xl bg-cover w-80" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{recipe_name}</h2>
    <p className="text-gray-500">{short_description}</p>
    <div >
        <br />
        <hr />
        {/* <br /> */}

        {/* Ingredients */}
        <h1>Ingredients: {ingredients.length}</h1>
        <ol>
        
                {
                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }

        </ol>
        <br />
        <hr />
        {/* <br /> */}
        
        {/* main */}
        <div className="flex items-center justify-around">
            {/* part-1 */}
            <div className="flex justify-center items-center gap-1">
                <p><CiClock2></CiClock2></p>
                <p>{preparing_time} min</p>
            </div>

            {/* part-2 */}

            <div className="flex justify-center items-center gap-1">
                <p><LuFlame></LuFlame></p>
                <p>{calories} calories</p>
            </div>
        </div>

      <div>
        <br />
        <button onClick={() =>handleWantToCook(recipe)} class="btn btn-active bg-green-500 ">Want to cook</button>
      
      </div>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Recipe;