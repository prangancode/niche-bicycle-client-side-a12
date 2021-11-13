import React from 'react';
import { Link } from 'react-router-dom';

const ProductsStyling = (props) => {
    const { name, img, description, _id } = props.product;
    return (
        <div className=" ring-2 ring-gray-900 shadow-xl">

            <img className=" w-full  object-cover " src={img} alt="" ></img>

            <div className="flex flex-col p-7 lg:space-y-5">
                <div className="flex flex-row">
                    <div className="  bg-red-600 font-mono text-white hover:line-clamp-none line-clamp-1 p-1 px-3 sm:text-base lg:text-2xl uppercase">
                        {name}
                    </div>
                </div>
                <div>

                    <p className="font-medium hover:line-clamp-none line-clamp-2 mt-1 sm:text-base lg:text-2xl text-gray-60">
                        {description} </p>

                </div>
                <div>

                    <Link to={`/bookingDetail/${_id}`}>

                        <button className="bg-white border-2 border-red-600 duration-500 ease-in-out font-sans font-semibold hover:-translate-y-1 hover:bg-black hover:scale-110 hover:text-white mt-4 px-4 py-2 rounded shadow sm:text-base lg:text-2xl text-gray-800 transform transition w-2/3 ">
                            Book Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductsStyling;