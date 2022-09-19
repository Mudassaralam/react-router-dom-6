import React from "react";
import { useSearchParams , useNavigate } from 'react-router-dom'
function Filter(){

    const [searchparams,setSearchparams] = useSearchParams();

    console.warn(searchparams.get('age'));
    console.warn(searchparams.get('city'));

    const navigate = useNavigate();

    const navToPage = (url)=>{
        navigate(url)
    }

    return(
        <>
            <h1>This is filter page</h1>
            {/* <button onClick={()=>navigate('/')}>Go To Homepage</button>
            <button onClick={()=>navigate('/about')}>Go To Aboutpage</button> */}
            <button onClick={()=>navToPage('/')}>Go To Homepage</button>
            <button onClick={()=>navToPage('/')}>Go To Aboutpage</button>
        </>
    )
}
export default Filter;