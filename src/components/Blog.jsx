import React from "react";
import { blogs } from "../Data";
const Blog = () => {
  return (
    <div className="section" id="blog">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Latest Articles</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <div className="shadow-md hover:shadow-none p-2" key={blog.id}>
              <img src={blog.image} alt="" />
              <div className="mt-3">
                <div className="text-xl font-bold">{blog.title}</div>
                <p className="text-[0.9rem] mt-2 opacity-80">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  cupiditate vero ipsum dolore nemo veritatis voluptatem quidem,
                  excepturi, ipsam impedit harum eligendi modi corporis. Ducimus
                  quidem fuga placeat esse sunt.
                </p>
                <button className="text-[0.9rem] mt-2 text-blue">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
