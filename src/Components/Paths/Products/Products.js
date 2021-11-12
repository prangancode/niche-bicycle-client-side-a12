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

                <h1 className='font-bold p-10 text-5xl text-center'>FEATURED  <span className='text-indigo-500'>PRODUCTS</span> </h1>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                {
                    products.map(product => <ProductsStyling product={product} key={product._id}></ProductsStyling>)
                }
            </div>
        </div>
    );
};

export default Products;