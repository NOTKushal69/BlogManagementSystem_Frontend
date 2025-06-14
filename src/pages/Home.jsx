
import { useEffect, useState } from "react";
import BlogCard from "../components/Card";
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import axios from "axios";
import Bigcard from "../components/Bigcard";
const Home=()=>{

const [blog,setBlog]=useState([])

const fetchBlog=async ()=>{
const response=await axios.get("http://localhost:3500/blogs")
setBlog(response.data.datas)
}

useEffect(()=>{
fetchBlog()
},[])

  return(
 <>
    <Navbar></Navbar>
    <Welcome></Welcome>
<div className="flex flex-wrap gap-4">
{
    blog.map((item)=>{
     return(
         <>
         <BlogCard item ={item}></BlogCard>
         

         </>
     )   
    })
}
    
</div>
 </>
)
}
export default Home;