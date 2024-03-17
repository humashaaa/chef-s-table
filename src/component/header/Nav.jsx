import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";



const Nav = () => {
    return (
        <div className="flex justify-around mt-10">
            <h1 className="font-bold text-2xl">Recipe Calories</h1>

            {/* middle part */}
            <div className="flex justify-around gap-16">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            {/* search */}
            <div className="flex justify-center items-center">
                <p><CiSearch></CiSearch></p>
                <input className="w-48 p-2 rounded-xl bg-slate-200" type="search"  placeholder= "search..." name="" id="" />
            </div>
            <div className="flex justify-center items-center mr-32 bg-green-500 p-2 rounded-full">
            <p ><CgProfile ></CgProfile></p>
            </div>
        </div>
    );
};

export default Nav;