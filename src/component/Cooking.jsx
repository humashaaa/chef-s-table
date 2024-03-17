import Cookbtn from "../Cookbtn";

const Cooking = ({wantToCook}) => {
    console.log(wantToCook)
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
                wantToCook.map((cookbtn, index) => <Cookbtn cookbtn={cookbtn}></Cookbtn>)
            }


    

            
        </div>
    );
};

export default Cooking;