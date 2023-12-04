import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const data = useRouteError();
    console.log(data);
    return(
        <>
        <h1>{data.data}</h1>
        <h2>{data.status}</h2>
        </>

    )
}

export default Error;