import { useState } from 'react'
import './App.css'
import Cooking from './component/Cooking'
import Recipe from './component/Recipe'
import Recipes from './component/Recipes'
import Nav from './component/header/Nav'
import Cookbtn from './Cookbtn'

function App() {

  const [wantToCook, setWantToCook] = useState([])


  //  
  const handleWantToCook = (recipe) =>{
    const isExist = wantToCook.find(item => item.recipe_id == recipe.id)
    if(!isExist){
      const newWantToCook = [...wantToCook, recipe]
      setWantToCook(newWantToCook)
    }
    else{
      alert("already exist")
    }
  }
  // 

  // handle preparing

  const handlePrepare = (id) =>{

    const preparing = wantToCook.filter(item => item.recipe_id !== id)
    setWantToCook(preparing)
    
  }

  return (
    <>
     <Nav></Nav>
     <div className='bg text-center p-11 space-x-3 space-y-5'>
      <h1 className='text-white text-6xl mt-24'>Discover an exceptional cooking class tailored for you!</h1>
      <p className='text-gray-300'>This rich and silky chocolate mousse recipe is really just two easy recipes—chocolate custard and whipped cream—combined to make one elegant dessert.
</p>
<button class="btn bg-green-500 text-black border-none btn-xs sm:btn-sm md:btn-md lg:btn-lg">Explore now</button>
<button class="btn glass h-16">Our feedback</button>
     </div>

     {/* our recipe section */}

     <div className='text-center mt-32 space-y-5'>
      <h1 className='text-black text-3xl'>Our Recipes</h1>
      <p className='text-gray-500'>This rich and silky chocolate mousse recipe is really just two easy recipes—chocolate custard and whipped cream—combined to make one elegant dessert.
</p>
     </div>

     {/* recipe card */}

     <div className='flex justify-around mt-28 gap-7'>
      <Recipes handleWantToCook={handleWantToCook}></Recipes>


      <div>
        {/* want to cook and currently cooking main div */}
  
        <Cooking wantToCook={wantToCook}
         handlePrepare={handlePrepare}></Cooking>
      </div>


     </div>


   





    </>
  )
}

export default App
