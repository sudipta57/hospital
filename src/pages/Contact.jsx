import Slider from "react-slick";
import { Quote, Facebook, Linkedin, Instagram, Eye, Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Contact() {
  const contactInfo = [
    {
      icon: "/about/contact-icon-1.png", // Replace with actual icon component if needed
      title: "EMERGENCY",
      content: (
        <>
          (237) 681-812-XXX <br /> (237) 666-331-XXX
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
          Mon-Sat 09:00-20:00 <br /> Sunday Emergency only
        </>
      ),
      bgColor: "bg-blue-100",
    },
  ];
  return (
    <div>
      {/* banner */}
      <div className="pt-[140px] relative h-auto">
        {/* Background Image */}
        <img src="/contact.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center left-6 px-6">
          <div className="text-left font-poppins text-[#1F2B6C]">
            <p className="md:text-[20px] mb-4">Home / Contact</p>
            <h2 className="text-3xl md:text-[55px]  font-[700]">Our Contact</h2>
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
        <div className=" rounded-lg font-poppins p-2 w-full max-w-5xl">
          <h1 className="text-[18px] font-[700] text-left text-[#159EEC] mb-2">
            Get in Touch
          </h1>
          <h1 className="text-left text-[#002B9A] font-[600] mb-4 text-[32px]">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* left side */}
            <div className="bg-[#1F2B6C] text-white rounded-2xl shadow-lg w-full max-w-lg">
              <form className="space-y-0 text-[#FCFEFE] font-poppins">
                {/* Name & Email Section */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-1">
                    <input
                      type="text"
                      id="name"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-[#FCFEFE]"
                      placeholder="Name"
                    />
                  </div>
                  <div className="p-1 border-l border-white">
                    
                    <input
                      type="email"
                      id="email"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-[#FCFEFE]"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Subject Section */}
                <div className="border-b border-white p-3">
                 
                  <input
                    type="text"
                    id="subject"
                    className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-[#FCFEFE]"
                    placeholder="Subject"
                  />
                </div>

                {/* Message Section */}
                <div className="p-3">
                  
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-[#FCFEFE]"
                    placeholder="Message"
                  ></textarea>
                </div>

                {/* Submit Button with Light Blue Background */}
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#BFD2F8] text-[#1F2B6C] p-2 rounded-b-md pb-0 font-[500] uppercase tracking-wide hover:bg-[#A5C4F0] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* righ section */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-4 rounded text-[16px] shadow-md font-[400] bg-[#BFD2F8] text-[#1F2B6C] font-poppins group transition-all duration-200 hover:bg-[#1F2B6C] hover:text-[#BFD2F8]"
                >
                  <img
                    src={info.icon}
                    alt="contactIcon"
                    className="w-10 h-10 transition-all duration-300 filter brightness-[0] invert-[0] group-hover:brightness-50 group-hover:invert"
                  />

                  <h3 className="font-[600] text-[22px] transition-all duration-100 mt-2">
                    {info.title}
                  </h3>
                  {info.content}
                </div>
              ))}
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
    <div className="mt-4  f py-12 bg-[#F2F2F2] md:block hidden">
      <div className="text-center font-poppins mb-10">
        <h2 className="text-[#159EEC] text-[18px] font-[700] mb-2 uppercase">
          Better information, Better health
        </h2>
        <h1 className="text-4xl font-bold text-blue-900">News </h1>
      </div>
      <div className="relative pb-40 font-poppins">
        <img src="/about/bg4.png" alt="bg3" className="w-full h-auto" />
        <div className="max-w-6xl mx-auto absolute top-0 mb-6 left-0 right-0 md:top-[100px]">
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
