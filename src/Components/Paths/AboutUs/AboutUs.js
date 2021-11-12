import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faLifeRing, faUser, faBullseye } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {

    const bicycle = <FontAwesomeIcon icon={faBicycle} />
    const LifeRing = <FontAwesomeIcon icon={faLifeRing} />
    const User = <FontAwesomeIcon icon={faUser} />
    const Bullseye = <FontAwesomeIcon icon={faBullseye} />

    return (

        <div class="w-full bg-gray-800">
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    <h2 class="text-base font-bold text-indigo-600">
                        We have the best equipment in the market
                    </h2>
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                        Check our awesome team memwhite
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
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
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
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
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
    );
};

export default AboutUs;