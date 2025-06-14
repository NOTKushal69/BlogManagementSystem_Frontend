import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FileText, Eye, User, Save } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const Create = () => {

const [blog,setBlog]=useState({
  blogTitle:"",
  blogAuther:"",
  blogExcerpt:"",
  blogDescription:""
})

const navigate= useNavigate()

const handleChange=(event)=>{
  let {name,value}=event.target;
setBlog({
  ...blog,
 [name]:value
})
}

const handleSubmit=async (event)=>{
event.preventDefault()
const response = await axios.post("https://blogmanagementsystem-backend.onrender.com/blogs",blog)
console.log(response)
if(response.status == 200){
  alert("Book add bhayo")
}
else{
  alert("Lyaa add bhayo")
}

navigate("/")

}
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="my-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"></div>

          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
                  <p className="text-gray-600 text-sm">Share your thoughts with the world</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-cyan-600 border border-cyan-200 rounded-lg hover:bg-cyan-50 transition-colors">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            {/* Blog Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
              onChange={handleChange}
                type="text"
                name="blogTitle"
                placeholder="Enter your blog title..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Author *
              </label>
              <input
              onChange={handleChange}
                type="text"
                name="blogAuther"
                placeholder="Your name..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea 
              onChange={handleChange}
                name="blogExcerpt"
                placeholder="Write a brief description of your blog post..."
                rows="3"
                maxLength={200}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">0/200 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
              onChange={handleChange}
                name="blogDescription"
                placeholder="Write your blog content here..."
                rows="12"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">0 characters</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={()=>{navigate("/")}}
                className="px-6 py-3 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                <Save className="w-4 h-4" />
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
