import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
  const blogs = useLoaderData();
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center  ">Blog FAQs</h1>
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="mb-4 rounded-xl shadow-md bg-white-50 dark:bg-gray-800 p-4 transition-all hover:bg-gray-200"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left text-xl font-semibold cursor-pointer  "
              >
                {blog.question}
              </button>
              {openIndexes.includes(index) && (
                <div className="mt-3 border-t border-dashed pt-3">
                  <p
                    className="text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: blog.answer }}
                  />
                <hr className='pt-2 border-dashed opacity-30 mt-4' />

                  <p className="text-sm text-gray-500 italic mt-2">{blog.added_at}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
