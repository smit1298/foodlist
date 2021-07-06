import React from "react";

onst FoodItem = () => {
  return (
    <div>
      <h1>food is ready</h1>
    </div>
  );
};

export default FoodItem;


const UserItem = ({ user: { login, avatar_url, html_url } }) => {


    return (
        <div className="card text-center">
            <img
                src={avatar_url} alt=""
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                    More
                      </Link>
            </div>
        </div>
    )

}