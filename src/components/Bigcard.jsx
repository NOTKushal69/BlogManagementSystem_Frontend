import React from 'react';
import { User, Eye, Edit, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Bigcard = ({ item, className = '' }) => {
  const navigate = useNavigate();

const  {id}=useParams()

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

  const truncateToWords = (text, wordLimit = 200) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(' ') + '...';
  };

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/edit-page');
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Delete clicked');
  };

  const handleView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('View clicked');
  };

  return (

      <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 max-w-2xl ${className}`}>
        <div className="h-2 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"></div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-cyan-50 text-cyan-700 text-sm rounded-lg font-medium">{tags[0]}</span>
              {tags.length > 1 && (
                <span className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  +{tags.length - 1}
                </span>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer">
            {item.blogTitle}
          </h3>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {truncateToWords(item.blogDescription, 12)}
          </p>

          <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{item.blogAuther}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>1,234</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleView}
                className="p-3 text-gray-400 hover:text-cyan-500 transition-colors rounded-lg hover:bg-cyan-50"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={handleDelete}
                className="p-3 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Bigcard;
