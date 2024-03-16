

const Nav = () => {
    return (
        <div className="flex justify-around mt-10">
            <h1>Recipe Calories</h1>

            {/* middle part */}
            <div className="flex justify-around gap-16">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            {/* search */}
            <div>
                <input className="w-48 p-2 rounded-xl bg-slate-200" type="search" placeholder="search..." name="" id="" />
                {/* <img src={img1} alt="" /> */}
            </div>
        </div>
    );
};

export default Nav;