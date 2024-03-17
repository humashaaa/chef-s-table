import { useState } from 'react'
import './App.css'
import Cooking from './component/Cooking'
import Recipe from './component/Recipe'
import Recipes from './component/Recipes'
import Nav from './component/header/Nav'
import Cookbtn from './Cookbtn'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer'


function App() {

  const [wantToCook, setWantToCook] = useState([])
  const [cCook, setcCook] = useState([])


  //  
  const handleWantToCook = (recipe) =>{
    const isExist = wantToCook.find(item => item.recipe_id == recipe.recipe_id)
    if(!isExist){
      const newWantToCook = [...wantToCook, recipe]
      setWantToCook(newWantToCook)
    }
    else{
      toast.warn(" Already added")
    }
  }
  // 

  // handle preparing

  const handlePrepare = (id) =>{

    const preparing = wantToCook.filter(item => item.recipe_id !== id)
    const item = wantToCook.find(item => item.recipe_id == id)
    setWantToCook(preparing)
    setcCook([...cCook, item])
    
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
        <ToastContainer></ToastContainer>

        <Cooking wantToCook={wantToCook}
        cCook={cCook}
         handlePrepare={handlePrepare}></Cooking>
      </div>
     

     </div>


   <Footer></Footer>





    </>
  )
}

export default App
