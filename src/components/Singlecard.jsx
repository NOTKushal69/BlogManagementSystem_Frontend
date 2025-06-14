import React from 'react';
import { User, Eye, Edit, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleCard = ({item}) => {
  const navigate = useNavigate();

  const status = "published";
  const tags = ["React", "JavaScript", "Frontend"];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  // Function to limit text to 30 words
  const truncateToWords = (text, wordLimit = 10) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const hin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/edit-page');
  };

  const handleDelete =async (e) => {

    e.preventDefault();
  navigate("/")
    const response= await axios.delete(`https://blogmanagementsystem-backend.onrender.com/blogs/`+item.id)

    if (response.status === 200){
      alert("la delete bhayo hai")
    }
    else{
      alert("Lyaa kei bigriyo yrr")
    }




    console.log(item.id)
    console.log('Delete clicked');
  };

  const handleView = (e) => {
    
    e.preventDefault();
  };

  return (
    <Link to={`/single-page/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 max-w-sm">
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"></div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <div className="flex gap-1">
              <span className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md font-medium">
                {tags[0]}
              </span>
              {tags.length > 1 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                  +{tags.length - 1}
                </span>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer"> 
            {item.blogTitle} 
          </h3>

          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {truncateToWords(item.blogDescription, 30)}
          </p>

          <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{item.blogAuther}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>1,234</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <button 
              onClick={hin} 
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              <Edit className="w-3 h-3" />
              Edit
            </button>

            <div className="flex gap-1">
              <button 
                onClick={handleView}
                className="p-1 text-gray-400 hover:text-cyan-500 transition-colors rounded hover:bg-cyan-50"
              >
                <Eye className="w-3 h-3" />
              </button>
              <button 
                onClick={handleDelete}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors rounded hover:bg-red-50"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;