import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaCalendarAlt, FaUser, FaEye, FaHeart } from "react-icons/fa";
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolor quae impedit accusantium quibusdam doloremque vel laudantium fugit eaque ullam, recusandae velit officiis nam rerum ex asperiores exercitationem et reiciendis. Repellat sint distinctio quos quam nostrum nemo itaque velit eveniet optio rerum, fugiat quia sequi, hic tenetur incidunt eligendi doloribus ullam exercitationem placeat quas cumque adipisci odio sit. Atque qui ipsam dolorem! Odit quo, aperiam iusto consectetur ipsum alias expedita in, ullam fugit itaque recusandae excepturi provident molestiae voluptate incidunt inventore sapiente a maxime illum ab nulla reiciendis. Rerum consequuntur quam laboriosam eveniet! Odio esse repellat quam reiciendis. Atque, necessitatibus et facere nisi maiores nihil est animi! Debitis, exercitationem. Rem praesentium et unde fugit dolores necessitatibus qui, cumque omnis ratione officiis maxime, deserunt expedita aliquid debitis. Illo ex facere molestiae officia fugit repellendus sint autem temporibus rerum corporis maiores at debitis, omnis atque praesentium beatae velit, incidunt eaque cupiditate nisi harum voluptatibus vel. Quaerat cum nihil quasi cupiditate, expedita illo.",
    thumbnail: "/news/recent-post-1.png",
  },
  
];
const posts2 = [
  {
    id: 1,
    image: "/news/blog1.png",
    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolor quae impedit accusantium quibusdam doloremque vel laudantium fugit eaque ullam, recusandae velit officiis nam rerum ex asperiores exercitationem et reiciendis. Repellat sint distinctio quos quam nostrum nemo itaque velit eveniet optio rerum, fugiat quia sequi, hic tenetur incidunt eligendi doloribus ullam exercitationem placeat quas cumque adipisci odio sit. Atque qui ipsam dolorem! Odit quo, aperiam iusto consectetur ipsum alias expedita in, ullam fugit itaque recusandae excepturi provident molestiae voluptate incidunt inventore sapiente a maxime illum ab nulla reiciendis. Rerum consequuntur quam laboriosam eveniet! Odio esse repellat quam reiciendis. Atque, necessitatibus et facere nisi maiores nihil est animi! Debitis, exercitationem. Rem praesentium et unde fugit dolores necessitatibus qui, cumque omnis ratione officiis maxime, deserunt expedita aliquid debitis. Illo ex facere molestiae officia fugit repellendus sint autem temporibus rerum corporis maiores at debitis, omnis atque praesentium beatae velit, incidunt eaque cupiditate nisi harum voluptatibus vel. Quaerat cum nihil quasi cupiditate, expedita illo.",
    thumbnail: "/news/recent-post-1.png",
  },
  {
    id: 2,
    image: "/news/blog1.png",
    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolor quae impedit accusantium quibusdam doloremque vel laudantium fugit eaque ullam, recusandae velit officiis nam rerum ex asperiores exercitationem et reiciendis. Repellat sint distinctio quos quam nostrum nemo itaque velit eveniet optio rerum, fugiat quia sequi, hic tenetur incidunt eligendi doloribus ullam exercitationem placeat quas cumque adipisci odio sit. Atque qui ipsam dolorem! Odit quo, aperiam iusto consectetur ipsum alias expedita in, ullam fugit itaque recusandae excepturi provident molestiae voluptate incidunt inventore sapiente a maxime illum ab nulla reiciendis. Rerum consequuntur quam laboriosam eveniet! Odio esse repellat quam reiciendis. Atque, necessitatibus et facere nisi maiores nihil est animi! Debitis, exercitationem. Rem praesentium et unde fugit dolores necessitatibus qui, cumque omnis ratione officiis maxime, deserunt expedita aliquid debitis. Illo ex facere molestiae officia fugit repellendus sint autem temporibus rerum corporis maiores at debitis, omnis atque praesentium beatae velit, incidunt eaque cupiditate nisi harum voluptatibus vel. Quaerat cum nihil quasi cupiditate, expedita illo.",
    thumbnail: "/news/recent-post-1.png",
  },
  {
    id: 3,
    image: "/news/blog1.png",
    title: "A Passion For Putting Patients First",
    date: "Monday 05, September 2021",
    author: "By Author",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolor quae impedit accusantium quibusdam doloremque vel laudantium fugit eaque ullam, recusandae velit officiis nam rerum ex asperiores exercitationem et reiciendis. Repellat sint distinctio quos quam nostrum nemo itaque velit eveniet optio rerum, fugiat quia sequi, hic tenetur incidunt eligendi doloribus ullam exercitationem placeat quas cumque adipisci odio sit. Atque qui ipsam dolorem! Odit quo, aperiam iusto consectetur ipsum alias expedita in, ullam fugit itaque recusandae excepturi provident molestiae voluptate incidunt inventore sapiente a maxime illum ab nulla reiciendis. Rerum consequuntur quam laboriosam eveniet! Odio esse repellat quam reiciendis. Atque, necessitatibus et facere nisi maiores nihil est animi! Debitis, exercitationem. Rem praesentium et unde fugit dolores necessitatibus qui, cumque omnis ratione officiis maxime, deserunt expedita aliquid debitis. Illo ex facere molestiae officia fugit repellendus sint autem temporibus rerum corporis maiores at debitis, omnis atque praesentium beatae velit, incidunt eaque cupiditate nisi harum voluptatibus vel. Quaerat cum nihil quasi cupiditate, expedita illo.",
    thumbnail: "/news/recent-post-1.png",
  },
  
];
const contactInfo = [
  {
    icon: "/about/contact-icon-1.png",
    title: "EMERGENCY",
    content: (
      <>
        (237) 681-812-XXX <br /> (237) 666-331-XXX
      </>
    ),
  },
  {
    icon: "/about/contact-icon-2.png",
    title: "LOCATION",
    content: <>110025-New Delhi, Noida, India</>,
  },
  {
    icon: "/about/contact-icon-3.png",

    title: "EMAIL",
    content: (
      <>
        medicare@gmail.com <br /> myebstudios@gmail.com
      </>
    ),
  },
  {
    icon: "/about/contact-icon-4.png",

    title: "WORKING HOURS",
    content: (
      <>
        Mon-Sat 09:00-20:00 <br /> Sunday Emergency only
      </>
    ),
  },
];
const SingleNews = () => {
  return (
    <div className="pt-[140px] ">
      {/* banner */}
      <div className=" relative">
        {/* Background Image */}
        <img src="/single-news/bg-1.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute font-poppins inset-0 flex items-center left-0 px-6">
          <div className="text-left text-[#1F2B6C]">
            <p className="md:text-[20px]">Home / News / Health Care</p>
            <h2 className="md:text-[55px] text-[#1F2B6C] font-[700]">
              A passion for putting patients first.
            </h2>
            <div className="flex items-center text-sm mb-2">
              <span className="mr-4 flex items-center">
                <FaCalendarAlt color="#1F2B6C" />
                <p className="ml-2">Monday 05, September 2021</p>
              </span>
              <span className="mr-4 flex items-center">
                <FaUser color="#159EEC" />
                <p className="ml-2">By Author</p>
              </span>
              <span className="mr-4 flex items-center">
                <FaEye color="#526AE9" />
                <p className="ml-2"> 12</p>
              </span>
              <span className="flex items-center">
                <FaHeart color="#E2315C" />
                <p className="ml-2">46</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* blog posts */}

     
      <div className="bg-white min-h-screen py-10">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

              <div className="bg-[#FCFEFE] border p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                  Recent Posts
                </h3>
                <div>
                  {posts2.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded-lg transition"
                    >
                      {/* Thumbnail */}
                      <div className="w-[60px] h-[60px] flex-shrink-0">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      {/* Content */}
                      <div className="font-[400] font-poppins ">
                      <span className="text-xs text-[#159EEC]">
                          {post.date}
                        </span>
                        <h4 className="text-[12px] text-[#212124] font-[400] line-clamp-2">
                          {post.title}
                        </h4>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-[#FCFEFE] font-poppins border p-6">
                <h3 className="text-lg font-[500] text-[#1F2B6C] mb-6 border-b-2 border-gray-200 pb-2">
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
                  className="bg-white  mb-8 overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover"
                  />
                  <div className="mt-4">
                    
                    <p className="text-[#000000] font-poppins font-[400] mb-4">{post.description}</p>

                    <div className="flex justify-between font-poppins">
                      <button className="inline-flex items-center text-[#000000] font-[500] bg-[#BFD2F8] md:p-3 rounded-full p-1">
                      {"\u2190"} Previous Article
                      </button>
                      <button className="inline-flex items-center text-[#000000] font-[500] bg-[#BFD2F8] p-1 md:p-3 rounded-full">
                        Next Artical &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*contact us  */}
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center mb-4">
        <div className="text-center mb-12">
          <h2 className="text-[#159EEC] text-[18px] font-[700] uppercase mb-2">
            Get in Touch
          </h2>
          <h1 className="text-[#002B9A] font-poppins text-4xl font-[600]">
            Contact
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all duration-300 bg-[#BFD2F8] text-[#1F2B6C] hover:bg-[#1F2B6C] hover:text-[#BFD2F8] group"
            >
              <div className="mb-4 flex">
                <img
                  src={info.icon}
                  alt={info.title}
                  className="w-10 h-10 transition-all duration-300 filter brightness-[0] invert-[0] group-hover:brightness-50 group-hover:invert"
                />
              </div>
              <h3 className="font-[600] text-xl mb-2 font-poppins transition-all duration-300 group-hover:text-[#BFD2F8]">
                {info.title}
              </h3>
              <p className="text-lg font-poppins transition-all duration-300 group-hover:text-[#BFD2F8]">
                {info.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleNews;
