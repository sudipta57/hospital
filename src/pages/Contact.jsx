import Slider from "react-slick";
import { Quote, Facebook, Linkedin, Instagram, Eye, Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Contact() {
  return (
    <div>
      {/* banner */}
      <div className=" relative">
        {/* Background Image */}
        <img src="/about/bg1.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center left-0 px-6">
          <div className="text-left text-[#1F2B6C]">
            <p className="md:text-[20px]">Home / Contact</p>
            <h2 className="text-3xl md:text-[55px] font-[700]">Our Contact</h2>
          </div>
        </div>
      </div>
      {/* mapp section */}
      <div className="w-full max-w-full mt-4">
        <div className=" rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8124722679967!2d-74.00976438459662!3d40.73225357932843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c40685%3A0xf0c7e85b527d2d8c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1687891234567!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div
        className=" bg-cover bg-center p-4 bg-no-repeat mt-4 flex justify-center items-center"
        style={{
          backgroundImage: "url('/about/bg5.png')", // Replace with your image URL
        }}
      >
        <div className=" rounded-lg  p-2 w-full max-w-5xl">
          <h1 className="text-2xl font-bold text-left text-[#159EEC] mb-6">
            Get in Touch
          </h1>
          <h1 className="text-left text-2xl font-bold mb-4">Contact Us</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="bg-[#1F2B6C] text-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <form className="space-y-4">
                {/* Name and Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] border border-white  rounded focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] border border-white  rounded focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full mt-1 p-2 bg-[#1F2B6C] border border-white rounded focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full mt-1 p-2 bg-[#1F2B6C]  rounded focus:outline-none focus:ring focus:ring-blue-400"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#BFD2F8] text-white py-2 rounded hover:bg-blue-500 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#BFD2F8] p-4 rounded shadow-md">
                <img src="/about/contact-icon-1.png" alt="contactIcon" />
                <h3 className="text-[#1F2B6C] font-bold text-lg">Emergency</h3>
                <p className="text-[#1F2B6C]">(237) 681-812-255</p>
                <p className="text-[#1F2B6C]">(237) 666-331-894</p>
              </div>
              <div className="bg-blue-900 text-white p-4 rounded shadow-md">
                <img src="/about/contact-icon-2.png" alt="contactIcon" />
                <h3 className="font-bold text-lg">Location</h3>
                <p>110025-New Delhi, Noida, India</p>
              </div>
              <div className="bg-[#BFD2F8] p-4 rounded shadow-md">
                <img src="/about/contact-icon-3.png" alt="contactIcon" />
                <h3 className="text-[#1F2B6C] font-bold text-lg">Email</h3>
                <p className="text-[#1F2B6C]">medicare@gmail.com</p>
                <p className="text-[#1F2B6C]">myebstudios@gmail.com</p>
              </div>
              <div className="bg-[#BFD2F8] text-white p-4 rounded shadow-md">
                <img src="/about/contact-icon-4.png" alt="contactIcon" />
                <h3 className="text-[#1F2B6C] font-bold text-lg">
                  Working Hours
                </h3>
                <p className="text-[#1F2B6C]">Mon-Sat 09:00-20:00</p>
                <p className="text-[#1F2B6C]">Sunday Emergency only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* news slider */}
      <NewsSlider />
    </div>
  );
}

// news slider
const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: () => (
      <div className="mt-3 w-3 h-3 mx-1 rounded-full bg-blue-200 hover:bg-blue-400 transition-colors" />
    ),
  };
  const newsArticles = [
    {
      id: 1,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "Author",
      image: "/about/news1.png",
      views: 68,
      likes: 86,
    },
    {
      id: 2,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "Author",
      image: "/about/news1.png",

      views: 68,
      likes: 86,
    },
    {
      id: 3,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "Author",
      image: "/about/news1.png",

      views: 68,
      likes: 86,
    },
    {
      id: 4,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "Author",
      image: "/about/news1.png",

      views: 68,
      likes: 86,
    },
  ];
  return (
    <div className="mt-64 md:mt-6 py-16 bg-[#F2F2F2] md:block hidden">
      <div className="text-center mb-12">
        <h2 className="text-[#159EEC] text-[18px] font-[700] mb-2 uppercase">
          Better information, Better health
        </h2>
        <h1 className="text-4xl font-bold text-blue-900">News </h1>
      </div>
      <div className="relative pb-36">
        <img src="/about/bg4.png" alt="bg3" className="w-full h-auto" />
        <div className="max-w-7xl mx-auto absolute top-0  left-0 right-0 md:top-[100px]">
          {/* <Slider {...settings}> */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          {/* <div className="grid grid-cols-2">
                {newsArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div> */}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};
const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-2 mb-8 flex">
      <img src={article.image} alt={article.title} />
      <div className="p-6">
        <div className="text-blue-600 text-sm mb-2">
          {article.date} | By {article.author}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {article.title}
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">{article.views}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">{article.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
