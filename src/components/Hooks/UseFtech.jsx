'use client'
import React, { useEffect, useState } from 'react';

const useFetch = () => {
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/data.json')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])

    return [data, setData]
};

export default useFetch;