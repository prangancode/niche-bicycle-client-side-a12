import React from 'react';
import { Link } from 'react-router-dom';

const HomeBooking = (props) => {
    const { name, img, description, _id } = props.booking;
    return (
        <div className="ring-2 ring-black shadow-xl">

            <img className=" p-3  w-full  object-cover " src={img} alt="" ></img>

            <div className="flex flex-col p-7 lg:space-y-5">
                <div className="flex flex-row">
                    <div className="  bg-red-600 font-black hover:line-clamp-none line-clamp-1 p-1 px-2
                    sm:text-base lg:text-2xl text-white uppercase">
                        {name}
                    </div>
                </div>
                <div>

                    <p className="font-medium hover:line-clamp-none line-clamp-2 mt-1 text-2xl text-white">
                        {description} </p>

                </div>
                <div>
                    <Link to={`/bookingDetail/${_id}`}>

                        <button className="bg-white border border-gray-400 duration-500 ease-in-out font-sans font-semibold hover:-translate-y-1 hover:bg-red-600 hover:scale-110 hover:text-white mt-4 px-4 py-2 rounded shadow text-2xl text-gray-800 transform transition w-2/3">
                            Book Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeBooking;