import React, { useEffect, useState } from 'react';
import { Heart, Eye, Share2, Download, Sparkles, TrendingUp, Clock, Users } from 'lucide-react';
import { dummyPublishedCreationData } from '../assets/assets';

const Community = () => {
  const [creations, setCreations] = useState([]);
  const [user, setUser] = useState({ id: 'user_2yMX02PRbyMtQK6PebpjnxvRNIA' }); // This will come from auth
  const [filter, setFilter] = useState('trending'); // trending, recent, top

  // Fetch creations from backend
  const fetchCreations = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/creations?publish=true&type=image');
    // const data = await response.json();
    // setCreations(data);
    
    // Using dummy data for now
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  // Handle like/unlike
  const handleLike = async (creationId) => {
    // TODO: API call to like/unlike
    // await fetch(`/api/creations/${creationId}/like`, { 
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ userId: user.id })
    // });
    
    setCreations(prevCreations =>
      prevCreations.map(creation => {
        if (creation.id === creationId) {
          const hasLiked = creation.likes.includes(user.id);
          return {
            ...creation,
            likes: hasLiked
              ? creation.likes.filter(id => id !== user.id)
              : [...creation.likes, user.id]
          };
        }
        return creation;
      })
    );
  };

  // Handle download
  const handleDownload = async (creation) => {
    // TODO: Implement download with backend
    // const response = await fetch(`/api/creations/${creation.id}/download`);
    // const blob = await response.blob();
    // const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = creation.content;
    link.download = `creation-${creation.id}.png`;
    link.click();
  };

  // Handle share
  const handleShare = async (creation) => {
    // TODO: Implement share functionality
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this creation!',
          text: creation.prompt,
          url: `${window.location.origin}/creation/${creation.id}`
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback - copy link to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/creation/${creation.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Format time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days ago`;
    if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} months ago`;
    return `${Math.floor(seconds / 31536000)} years ago`;
  };

  // Get user name from user_id (mock function)
  const getUserName = (userId) => {
    // TODO: Fetch from backend or auth context
    const userNames = {
      'user_2yMX02PRbyMtQK6PebpjnxvRNIA': 'John Smith',
      'user_2yaW5EHzeDfQbXdAJWYFnZo2bje': 'Sarah Johnson'
    };
    return userNames[userId] || 'Anonymous User';
  };

  // Sort creations based on filter
  const getSortedCreations = () => {
    let sorted = [...creations];
    
    switch (filter) {
      case 'trending':
        // Sort by combination of likes and recency
        sorted.sort((a, b) => {
          const aScore = a.likes.length * 2 + (new Date() - new Date(a.created_at)) / 86400000;
          const bScore = b.likes.length * 2 + (new Date() - new Date(b.created_at)) / 86400000;
          return bScore - aScore;
        });
        break;
      case 'recent':
        sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case 'top':
        sorted.sort((a, b) => b.likes.length - a.likes.length);
        break;
      default:
        break;
    }
    
    return sorted;
  };

  const sortedCreations = getSortedCreations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Community Creations
                </h1>
                <p className="text-gray-600 text-base">Explore amazing AI-generated content from our community</p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 bg-white rounded-xl p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setFilter('trending')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === 'trending'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="w-4 h-4 inline mr-2" />
                Trending
              </button>
              <button
                onClick={() => setFilter('recent')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === 'recent'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Clock className="w-4 h-4 inline mr-2" />
                Recent
              </button>
              <button
                onClick={() => setFilter('top')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === 'top'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Top
              </button>
            </div>
          </div>
        </div>

        {/* CREATIONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCreations.map((creation) => {
            const isLiked = creation.likes.includes(user.id);
            const authorName = getUserName(creation.user_id);
            
            return (
              <div
                key={creation.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={creation.content}
                    alt={creation.prompt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback for missing images
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect fill="%23f3f4f6" width="500" height="500"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EImage%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-3 mb-2">
                      <button
                        onClick={() => handleDownload(creation)}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all"
                        title="Download"
                      >
                        <Download className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => handleShare(creation)}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all"
                        title="Share"
                      >
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-md rounded-lg">
                      <span className="text-xs font-bold text-white uppercase">{creation.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                      {authorName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {authorName}
                      </p>
                      <p className="text-xs text-gray-500">{getTimeAgo(creation.created_at)}</p>
                    </div>
                  </div>

                  {/* Prompt */}
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2 leading-relaxed">
                    {creation.prompt}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleLike(creation.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        isLiked
                          ? 'bg-red-50 text-red-600'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 transition-all ${isLiked ? 'fill-red-600' : ''}`}
                      />
                      <span className="text-sm font-semibold">{creation.likes.length}</span>
                    </button>

                    <button 
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      onClick={() => {
                        // TODO: Navigate to detail page
                        console.log('View details:', creation.id);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {sortedCreations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No creations yet</h3>
            <p className="text-gray-600">Be the first to share your amazing creations!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;