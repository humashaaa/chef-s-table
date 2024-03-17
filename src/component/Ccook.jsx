
const Ccook = ({cCook, index, handlePrepare}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = cCook
    return (
        <div>

<div class="overflow-x-auto">
  <table class="table">
   <tbody className="bg-slate-200 mb-3">
      <tr>
        <th>{index + 1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} min</td>
        <td>{calories} calorie</td>
      </tr>
      </tbody>
     
  </table>
</div>
            




        </div>
    );
};

export default Ccook;