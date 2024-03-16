import './App.css'
import Nav from './component/header/Nav'

function App() {

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


   





    </>
  )
}

export default App
