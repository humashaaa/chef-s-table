import Cookbtn from "../Cookbtn";
import Ccook from "./Ccook";

const Cooking = ({wantToCook, handlePrepare, cCook}) => {
    // console.log(wantToCook)
    console.log(cCook)

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold">Want to cook : {wantToCook.length}</h1>
            <br />
            <hr />
            <br />

    <div className="mr-20 space-x-5 flex font-semibold justify-around items-center">
        <p>Name</p>
        <p>Time</p>
        <p>Calories</p>
      </div>
            {
                wantToCook.map((cookbtn, index) => <Cookbtn index={index} cookbtn={cookbtn} handlePrepare={handlePrepare}></Cookbtn>)
            }


     {/* currently */}

     <div>
      <h1 className="text-center text-2xl font-semibold mt-12">Currently cooking:{cCook.length} </h1>
      </div>

      <br />
            <hr />
            <br />

    <div className="mr-20 space-x-5 flex font-semibold justify-around items-center">
        <p>Name</p>
        <p>Time</p>
        <p>Calories</p>
      </div>

      {
        cCook.map((cCook, index) => <Ccook key={index} index={index} cCook={cCook}
        handlePrepare={handlePrepare}></Ccook>)
      }
     


            
        </div>
    );
};

export default Cooking;