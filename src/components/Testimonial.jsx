import React from "react";
import { assets, dummyTestimonialData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-32 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* HEADING */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider inline-block bg-blue-50 px-5 py-2 rounded-full shadow-sm">
          Testimonials
        </span>
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-6 leading-tight">
          Loved by Creators
        </h2>
        <p className="mt-6 text-gray-600 text-xl leading-relaxed">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {dummyTestimonialData.map((item, index) => (
          <div
            key={index}
            className="group relative max-w-sm"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
            
            {/* Card */}
            <div className="relative p-10 rounded-3xl bg-white shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-white text-2xl font-serif">"</span>
              </div>

              {/* STARS */}
              <div className="flex gap-1.5 mb-6">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < item.rating
                          ? assets.star_icon
                          : assets.star_dull_icon
                      }
                      alt="star"
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
              </div>

              {/* CONTENT */}
              <p className="text-gray-700 text-base mb-8 leading-relaxed font-medium">
                "{item.content}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

              {/* USER INFO */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Avatar glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-white">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats/trust indicators */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-600">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">10,000+</p>
              <p className="text-sm text-gray-500">Happy Users</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">Award</p>
              <p className="text-sm text-gray-500">Winning Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;