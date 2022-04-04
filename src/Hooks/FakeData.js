import{useEffect, useState } from 'react';


const FakeData = () => {
    const [datas, setDatas] = useState([]);
    // console.log(reviews);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDatas(data));
    },[])
    return ([datas, setDatas]);
};

export default FakeData;