import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaCalendarAlt, FaUser, FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const posts = [
  {
    id: 1,
    image: "/news/blog1.png",
    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
    thumbnail: "/news/recent-post-1.png",
  },
  {
    id: 2,
    image: "/news/blog2.png",

    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
    thumbnail: "/news/recent-post-2.png",
  },
  {
    id: 3,
    image: "/news/blog3.png",

    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
    thumbnail: "/news/recent-post-3.png",
  },
  {
    id: 4,
    image: "/news/blog4.png",

    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in.",
    thumbnail: "/news/recent-post-4.png",
  },
];
const contactInfo = [
  {
    icon: "/about/contact-icon-1.png", // Replace with actual icon component if needed
    title: "EMERGENCY",
    content: (
      <>
        (237) 681-812-255 <br /> (237) 666-331-894
      </>
    ),
    bgColor: "bg-blue-100",
  },
  {
    icon: "/about/contact-icon-2.png", // Replace with actual icon component if needed

    title: "LOCATION",
    content: "110025-New Delhi, Noida, India",
    bgColor: "bg-blue-900 text-white",
    active: true,
  },
  {
    icon: "/about/contact-icon-3.png", // Replace with actual icon component if needed

    title: "EMAIL",
    content: (
      <>
        medicare@gmail.com <br /> myebstudios@gmail.com
      </>
    ),
    bgColor: "bg-blue-100",
  },
  {
    icon: "/about/contact-icon-4.png", // Replace with actual icon component if needed

    title: "WORKING HOURS",
    content: (
      <>
        Mon-Sat 09:00–20:00 <br /> Sunday Emergency only
      </>
    ),
    bgColor: "bg-blue-100",
  },
];
const OurNews = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* banner */}
      <div className=" relative">
        {/* Background Image */}
        <img src="/news/bg-1.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center left-0 px-6">
          <div className="text-left text-[#1F2B6C]">
            <p className="md:text-[20px]">Home / News</p>
            <h2 className="text-3xl md:text-[55px] font-[700]">Blog Posts</h2>
          </div>
        </div>
      </div>

      {/* blog posts */}

      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              {/* Recent Posts */}
              <div className="6 mb-8 ">
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#1F2B6C] text-white"
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-500"
                  >
                    <BiSearch />
                  </button>
                </form>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center gap-4 hover:bg-gray-100 p-3 rounded-lg transition"
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      {/* Content */}
                      <div>
                        <h4 className="text-sm text-gray-800 font-semibold line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                  Categories
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-gray-600 text-sm hover:text-blue-600 transition">
                    <span>Surgery</span>
                    <span className=" font-medium bg-[#159EEC] text-white rounded-full px-2 py-1">
                      3
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-gray-600 text-sm hover:text-blue-600 transition">
                    <span>Health Care</span>
                    <span className=" font-medium bg-[#159EEC] text-white rounded-full px-2 py-1">
                      8
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-gray-600 text-sm hover:text-blue-600 transition">
                    <span>Medical</span>
                    <span className=" font-medium bg-[#159EEC] text-white rounded-full px-2 py-1">
                      5
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-gray-600 text-sm hover:text-blue-600 transition">
                    <span>Professional</span>
                    <span className=" font-medium bg-[#159EEC] text-white rounded-full px-2 py-1">
                      10
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="col-span-1 lg:col-span-3 order-2 lg:order-1">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg mb-8 overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm mb-2">
                      <span className="mr-4 flex items-center">
                        <FaCalendarAlt color="#1F2B6C" />
                        <p className="ml-2">{post.date}</p>
                      </span>
                      <span className="mr-4 flex items-center">
                        <FaUser color="#159EEC" />
                        <p className="ml-2">{post.author}</p>
                      </span>
                      <span className="mr-4 flex items-center">
                        <FaEye color="#526AE9" />
                        <p className="ml-2"> {post.views}</p>
                      </span>
                      <span className="flex items-center">
                        <FaHeart color="#E2315C" />
                        <p className="ml-2">{post.likes}</p>
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>

                    <button
                      className="inline-flex items-center text-blue-600 font-medium bg-[#BFD2F8] p-3 rounded-full"
                      onClick={() => {
                        navigate("/single-news");
                      }}
                    >
                      Read More &gt;
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center text-gray-600 mt-8">
                <button className="text-blue-600 font-medium">
                  Previous Page
                </button>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
                    1
                  </button>
                  <button className="px-3 py-1 text-blue-600">2</button>
                  <button className="px-3 py-1 text-blue-600">3</button>
                  <button className="px-3 py-1 text-blue-600">4</button>
                  <button className="px-3 py-1 text-blue-600">5</button>
                </div>
                <button className="text-blue-600 font-medium">Next Page</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*contact us  */}
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center md:mt-5 ">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-[18px] font-bold uppercase mb-2">
            Get in Touch
          </h2>
          <h1 className="text-blue-900 text-4xl font-bold">Contact</h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${info.bgColor}`}
            >
              <div className="mb-4">
                <img src={info.icon} />
              </div>
              <h3
                className={`text-blue-900 font-semibold text-xl mb-2 ${
                  info.active ? " text-white" : ""
                }`}
              >
                {info.title}
              </h3>
              <p
                className={` text-blue-700 text-lg ${
                  info.active ? " text-white" : ""
                }`}
              >
                {info.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurNews;
