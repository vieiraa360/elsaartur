import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import MobileContactButton from "../components/home/MobileContactButton";

import { staticBlogPosts } from "../components/blogPostsData";

export default function Blog() {


  const categoryColors = {
    therapy: "bg-[#1B7A9C] text-white",
    addiction: "bg-[#0D3D4D] text-white",
    mental_health: "bg-[#F4CCC8] text-[#0D3D4D]",
    self_care: "bg-[#C5DDE0] text-[#0D3D4D]",
    trauma: "bg-[#B8C4BC] text-[#0D3D4D]",
  };

  const publishedPosts = staticBlogPosts.filter(post => post.published);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C5DDE0]/20 to-white">
      <Navigation />

      <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 text-[#0D3D4D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Resources & Insights</h1>
            <p className="text-xl font-light text-[#0D3D4D]/90 max-w-2xl mx-auto">
              Thoughts on therapy, healing and personal gowth
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {publishedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-light text-lg">blog.noPosts</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {post.featured_image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.category && (
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-light mb-3 ${
                        categoryColors[post.category] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {post.category.replace("_", " ")}
                    </span>
                  )}
                  <h2 className="text-2xl font-light text-[#0D3D4D] mb-3">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-light mb-4">
                    {post.published_date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min Read
                    </div>
                  </div>
                  <Link
                    to={`/blogpost/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="text-center pb-16">
        <Link
          to={createPageUrl("Home")}
          className="inline-block text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
      <MobileContactButton />
    </div>
  );
}