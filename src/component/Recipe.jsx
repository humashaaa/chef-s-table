
const Recipe = ({recipe}) => {
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
    <div class="card-actions">
        <br />
        <hr />
        <br />

        {/* Ingredients */}
        <h1>Ingredients: {ingredients.length}</h1>
        <ol>
        
                {
                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }

        </ol>
        <br />
        <hr />
        <br />
        
        {/* main */}
        <div>
            {/* part-1 */}
            <div>
                <img src="" alt="" />
                <p>{preparing_time}</p>
            </div>

            {/* part-2 */}

            <div>
                <img src="" alt="" />
                <p>{calories}</p>
            </div>
        </div>

      <button className="bg-green-500 rounded-xl p-2" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500">Want to cook</button>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Recipe;