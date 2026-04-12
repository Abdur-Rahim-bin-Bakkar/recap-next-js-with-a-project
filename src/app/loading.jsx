// import React from 'react';
import { HashLoader } from 'react-spinners';

const loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <HashLoader color='#FF8811'/>
           
        </div>
    );
};

export default loader;