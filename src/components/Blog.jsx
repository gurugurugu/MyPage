import React from "react";
import { blogs } from "../Data";
const Blog = () => {
  return (
    <div className="section" id="blog">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Award</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
        {blogs.map((blog) => {
          return (
            <div className="shadow-md hover:shadow-none p-2" key={blog.id}>
              <img src={blog.image} alt="" />
              <div className="mt-4">
                <div className="text-center text-xl font-bold">{blog.title}</div>
                <p className="text-[0.9rem] mt-12 opacity-80">
                  {blog.content}
                </p>
                {/* <button className="text-[0.9rem] mt-2 text-blue">
                  Read More
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
