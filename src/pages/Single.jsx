import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/Card";
import SingleCard from "../components/Singlecard";

function SinglePage(){
const {id}=useParams();
console.log(id)

const [blog,setBlog]=useState({})
const fetchBook=async () =>{
  const response=await axios.get(`https://blog-api-backend.onrender.com/blogs/${id}`)
  setBlog(response.data.dataa)

}
console.log(blog)

useEffect(()=>{
  fetchBook()
},[])


return(<>


<Navbar></Navbar>
<br /><br /><br /><br /><br /><br />
<SingleCard item={blog}></SingleCard>


</>);

}
export default SinglePage;