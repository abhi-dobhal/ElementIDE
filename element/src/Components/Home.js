import DataProvider, { DataContext } from "../Context/DataProvider";
import Codex from "./Codex";
import Header from "./Header";
import Result from "./Result";

const Home =()=>{
    return (
        <>
         <Header/>
        <Codex/>
        <Result/>
       </>
       
    )
}

export default Home;