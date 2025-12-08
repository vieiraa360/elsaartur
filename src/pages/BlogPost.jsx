import React from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { createPageUrl } from "../utils";
import ReactMarkdown from "react-markdown";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import MobileContactButton from "../components/home/MobileContactButton";
import { staticBlogPosts } from "../components/blogPostsData";

export default function BlogPost() {
  const { id } = useParams();              // comes from /blog/:id

  const post = staticBlogPosts.find(
    (p) => p.id === id || p.slug === id    // support either id or slug
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="h-32 md:h-40 w-full"></div>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-[#0D3D4D] mb-4">
              Post Not Found - Looking for: {id}
            </h1>
            <a
              href={createPageUrl("Blog")}
              className="text-[#1B7A9C] hover:text-[#0D3D4D] font-light"
            >
              Back to Resources
            </a>
          </div>
        </div>
        <Footer />
        <MobileContactButton />
      </div>
    );
  }

  const MarkdownComponents = {
    p: ({ children }) => {
      if (
        children &&
        children.length === 1 &&
        typeof children[0] === "object" &&
        children[0] !== null
      ) {
        const childType = children[0].type;
        if (
          childType === "h2" ||
          childType === "h3" ||
          childType === "ul" ||
          childType === "ol" ||
          childType === "pre"
        ) {
          return children[0];
        }
      }
      return <p>{children}</p>;
    },
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />

      {post.featured_image && (
        <div className="h-96 overflow-hidden relative">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x400/C5DDE0/0D3D4D?text=Image+Load+Error";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3D4D]/60 to-transparent"></div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <a
          href="/blog" // Mock link back to blog index
          className="inline-flex items-center gap-2 text-[#1B7A9C] hover:text-[#0D3D4D] font-light mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </a>

        <article>
          <h1 className="text-5xl font-light text-[#0D3D4D] mb-6">{post.title}</h1>

          {post.published_date && (
            <div className="flex items-center gap-2 text-gray-600 font-light mb-8">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              // Removed remarkPlugins={[]} as remarkGfm import was causing the error.
              // We rely on the basic ReactMarkdown parser and the custom P component.
              components={MarkdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <a
            href="/blog" // Mock link back to blog index
            className="inline-flex items-center gap-2 text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Resources
          </a>
        </div>
      </div>
      <Footer />
      <MobileContactButton />
    </div>
  );
}