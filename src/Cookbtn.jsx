
const Cookbtn = ({cookbtn, index, handlePrepare}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = cookbtn
    console.log(cookbtn)
    return (
        <div>

             {/* table */}
             <div class="overflow-x-auto">
  <table class="table">
    
    <tbody className="bg-slate-200 mb-3" >
      <tr>
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calories</td>
        <td><button onClick={() => handlePrepare(recipe_id)} class="btn bg-green-500">Preparing</button></td>
      </tr>
    </tbody>
  </table>
</div>




            
        </div>
    );
};

export default Cookbtn;