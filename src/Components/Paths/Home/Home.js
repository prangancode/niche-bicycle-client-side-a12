import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBooking from './HomeBooking';
import HomeReviews from './HomeReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faLifeRing, faUser, faBullseye } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ravine-90140.herokuapp.com/allCycles')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    useEffect(() => {
        fetch('https://pacific-ravine-90140.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const bicycle = <FontAwesomeIcon icon={faBicycle} />
    const LifeRing = <FontAwesomeIcon icon={faLifeRing} />
    const User = <FontAwesomeIcon icon={faUser} />
    const Bullseye = <FontAwesomeIcon icon={faBullseye} />
    return (
        <div>
            {/* Banner */}
            <div className="" style={{
                backgroundImage: `url("https://www.cervelo.com/media/gene-cms/a/s/asepero-5_home-update.jpg")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                width: 'full',
                height: '800px'

            }}>
                <div className='lg:flex lg:flex-row text-white p-10 rounded-3xl sm:flex-col-reverse sm:flex '>

                    <div className='flex-col self-center align-center sm:pt-1.5 sm:w-11/12 lg:w-2/6'>

                        <h1 className='font-bold text-5xl mt-8'>WHAT GOES UP MUST COME DOWN </h1>



                        <p className='mt-10 text-2xl font-serif'>Phasellus eget condimentum nibh. Nunc id enim id velit commodo efficitur. Duis auctor, mauris in maximus cursus, purus neque ultricies velitVivamus a turpis nisi. Fusce feugiat feugiat congue in mauris id sollicitudin.</p>

                        <Link to='/products'> <button className="bg-black text-white transition delay-150 duration-300 ease-in-out  border border-gray-400 font-semibold hover:bg-white hover:text-black mt-12  px-4 py-2 rounded shadow w-2/3 text-2xl ">
                            Explore
                        </button>
                        </Link>
                    </div>




                </div>
            </div>




            <div class="w-full bg-gray-800">
                <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div class="text-center pb-12">
                        <h2 class="text-5xl font-bold text-indigo-600 mb-5">
                            Welcome To Our HeroBike
                        </h2>
                        <h1 class="font-base text-xl md:text-xl lg:text-xl font-heading text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas tenetur eum laudantium reprehenderit blanditiis. Sunt reiciendis iusto iure fugiat molestiae sint numquam enim quos? Assumenda alias placeat harum cumque?
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
                                {bicycle}
                            </div>
                            <div class="text-center">
                                <p class="text-xl text-white font-bold mb-2">ALL BRANDS</p>
                                <p class="text-base text-gray-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum?</p>
                                <button className='p-2 w-full bg-red-600 text-2xl text-white font-semibold mt-4'>Read More</button>
                            </div>
                        </div>
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-spin-slow'>
                                {LifeRing}
                            </div>
                            <div class="text-center">
                                <p class="text-xl text-white font-bold mb-2">FREE SUPPORT</p>
                                <p class="text-base text-gray-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum?</p>
                                <button className='p-2 w-full bg-red-600 text-2xl text-white font-semibold mt-4'>Read More</button>
                            </div>
                        </div>
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
                                {User}
                            </div>
                            <div class="text-center">
                                <p class="text-xl text-white font-bold mb-2">DEALERSHIP</p>
                                <p class="text-base text-gray-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum?</p>
                                <button className='p-2 w-full bg-red-600 text-2xl text-white font-semibold mt-4'>Read More</button>
                            </div>
                        </div>
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-spin-slow'>
                                {Bullseye}
                            </div>
                            <div class="text-center">
                                <p class="text-xl text-white font-bold mb-2">AFFORDABLE</p>
                                <p class="text-base text-gray-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum?</p>
                                <button className='p-2 w-full bg-red-600 text-2xl text-white font-semibold mt-4'>Read More</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* Cycles */}

            <div>

                <h1 className='font-bold p-10 text-5xl text-center'>FEATURED  <span className='text-indigo-500'>PRODUCTS</span> </h1>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div>
                {
                    bookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                            {
                                bookings.slice(0, 6).map(booking => <HomeBooking booking={booking} key={booking._id}></HomeBooking>)
                            }
                        </div>
                }
            </div>

            {/* Reviews */}
            <div>

                <h1 className='font-bold p-10 text-5xl text-center'>BEST <span className='text-indigo-500'>REVIEWS</span> </h1>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-4 lg:p-36  sm:p-10">
                {
                    reviews.map(review => <HomeReviews review={review}
                        key={review._id}></HomeReviews>)
                }
            </div>
        </div>
    );
};

export default Home;