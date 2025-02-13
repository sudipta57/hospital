import Slider from "react-slick";
import { Quote, Facebook, Linkedin, Instagram, Eye, Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const doctors = [
  {
    id: 1,
    name: "Dr. James Wilson",
    specialty: "NEUROLOGY",
    image: "/about/doctor1.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Michael Carter",
    specialty: "NEUROLOGY",
    image: "/about/doctor2.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "NEUROLOGY",
    image: "/about/doctor3.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

export default function Doctors() {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat. Aliquam erat volutpat. Donec ut velit erat.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Mike Johnson",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    customPaging: () => (
      <div className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300" />
    ),
  };
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
          Mon-Sat 09:00–20:00 <br /> Sunday Emergency only
        </>
      ),
      bgColor: "bg-blue-100",
    },
  ];
  return (
    <div className="pt-[140px] ">
      {/* banner */}
      <div className=" relative">
        {/* Background Image */}
        <img src="/about/bg1.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center left-0 px-6">
        <div className="text-left font-poppins text-[#1F2B6C]">
        <p className="md:text-[20px]">Home / Doctors</p>
            <h2 className="text-[55px] font-[700]">Our Doctors</h2>
          </div>
        </div>
      </div>

      {/* doctor slider */}
      <DoctorsSlider />
      <DoctorsSlider />

      {/* testimonial slider */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 mt-6"
        style={{
          backgroundImage: 'url("/about/bg2.png")',
        }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="focus:outline-none">
                  <div className="text-center px-6 py-12">
                    <Quote className="mx-auto mb-8 w-16 h-16 text-white opacity-20" />
                    <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8">
                      {testimonial.text}
                    </p>
                    <div className="w-16 h-0.5 bg-white/30 mx-auto mb-4" />
                    <h3 className="text-white text-xl font-medium">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* news slider */}
      <NewsSlider />

      {/*contact us  */}
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center mt-4">
        <div className="text-center mb-12">
          <h2 className="text-[#159EEC] text-[18px] font-[700] uppercase mb-2">
            Get in Touch
          </h2>
          <h1 className="text-[#002B9A] font-poppins text-4xl font-[600]">Contact</h1>
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
}
// doctor slider
const DoctorsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  return (
    <div className="py-10 bg-[#F2F2F2] mb-10 md:mb-0 mt-4">
      <div className="relative pb-36">
        <img src="/about/bg3.png" alt="bg3" className="w-full h-auto" />
        {/* Adjust the max-w container */}
        <div className="max-w-6xl mx-auto absolute top-0 left-0 right-0 ">
          <Slider {...settings}>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = ({ links }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <a
        href={links.linkedin}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
      >
        <Linkedin size={16} />
      </a>
      <a
        href={links.facebook}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
      >
        <Facebook size={16} />
      </a>
      <a
        href={links.instagram}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
      >
        <Instagram size={16} />
      </a>
    </div>
  );
};
const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white font-poppins rounded-lg overflow-hidden shadow-lg mx-4 mt-4">
      <div>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-[480px] object-cover"
        />
      </div>
      <div className="p-6  bg-[#BFD2F8]">
        <h3 className="text-[18px] font-[400] text-center text-[#1F2B6C]">
          {doctor.name}
        </h3>
        <p className="text-[#1F2B6C] font-[700] text-center mb-4">
          {doctor.specialty}
        </p>
        <SocialLinks links={doctor.socialLinks} />
        
      </div>
      <button className="w-full bg-[#002B9A] text-white py-3  hover:bg-blue-800 transition-colors">
          View Profile
        </button>
    </div>
  );
};

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
    <div className="md:mt-6 py-16 bg-[#F2F2F2] md:block hidden">
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
