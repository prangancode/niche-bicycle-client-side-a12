import React, { useEffect, useState } from 'react';
import ProductsStyling from './ProductsStyling';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ravine-90140.herokuapp.com/allCycles')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div>

                <h1 className='font-mono font-semibold p-10 text-5xl text-center'>FEATURED  <span className='text-red-500 italic'>Cycles</span> </h1>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">Whatever type of rider you think you are, our bikes know you even better. They are designed for road riding heroics, pushing the pace on cobbles and tucking for speed in triathlons. If dancing up a climb is your thing then the lightweight Altitude series is for you. Classics specialists and those who love versatility and long-distance riding, will find their way with an Endurance bike.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-3 lg:px-36 lg:py-20  sm:p-10">
                {
                    products.map(product => <ProductsStyling product={product} key={product._id}></ProductsStyling>)
                }
            </div>
        </div>
    );
};

export default Products;