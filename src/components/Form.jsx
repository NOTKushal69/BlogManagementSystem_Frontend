import React, { useState } from 'react';
import { Save, Eye, User, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlogForm = ({title}) => {

const navigate =useNavigate()

const fetchBook = async ()=>{
  const response = await axios.get("")
}

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      {/* Header with gradient background */}
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"></div>
      
      {/* Form Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title === "edit"?"Edit":"Create New Blog"} Blog Post</h2>
              <p className="text-gray-600 text-sm">Share your thoughts with the world</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePreview}
              className="flex items-center gap-2 px-4 py-2 text-cyan-600 border border-cyan-200 rounded-lg hover:bg-cyan-50 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
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
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
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
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Write a brief description of your blog post..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.excerpt.length}/200 characters</p>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your blog content here..."
            rows="12"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.content.length} characters</p>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <button onClick={()=>{navigate("/")}}
            type="button"
            className="px-6 py-3 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            <Save className="w-4 h-4" />
            {title==="edit"?"Edit":"Publish"} Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;