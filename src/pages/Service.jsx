import React from "react";

const doctors = [
  {
    id: 1,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
  {
    id: 2,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
  {
    id: 3,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
  {
    id: 4,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
  {
    id: 5,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
  {
    id: 6,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "/service/doctor1.png",
  },
];
const contactInfo = [
  {
    icon: "/about/contact-icon-1.png", // Replace with actual icon component if needed
    title: "EMERGENCY",
    content: (
      <>
        (237) 681-XXX-XXX <br /> (237) 666-XXX-XXX
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
const Doctors = () => {
  return (
    <div className="bg-white pt-[110px] ">
      {/* banner */}
      <div className="relative mt-8">
        {/* Background Image */}
        <img src="/service/bg1.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute font-poppins inset-0 flex items-center left-0 px-6">
          <div className="text-left text-[#1F2B6C]">
            <p className="md:text-[20px] mb-4">Home / Service</p>
            <h2 className="text-3xl md:text-[55px] font-[700]">Our Service</h2>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#F2F2F2] my-8 mt-4">
        <h6 className="text-[#159EEC] text-[18px] py-4 font-[700] mb-0 uppercase">
          Trusted Care
        </h6>
        <h6 className="text-[55px] font-poppins font-[600] text-[#002B9A]">Our Doctors</h6>
        <div className="relative bg-[#F8F9FA] py-16">
          {/* Blue Gradient Background */}
          <div className="absolute inset-0">
            <div
              className="w-full h-[40%] top-0 left-0 absolute"
              style={{
                background:
                  "linear-gradient(90.05deg, rgba(75, 192, 242, 0.65) 20.1%, rgba(52, 134, 243, 0.640137) 30.48%, rgba(35, 89, 244, 0.632535) 74.72%, rgba(6, 16, 245, 0.62) 99.95%)",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="relative max-w-7xl mx-auto px-6">
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*contact us  */}
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center mb-4">
        <div className="text-center mb-10">
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
};

const DoctorCard = ({ doctor }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="relative">
        {/* Main Image */}
        <img
          src={doctor.image}
          alt={doctor.title}
          className="w-full object-cover"
        />

        {/* Hover Image */}
        <img
          src="/service/hoverimg.png" // Use the uploaded hover image path
          alt="hover"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
        <div className="absolute bottom-[-36px] right-4 text-white">
          <img src="/service/card-icon.png" alt="doctor1" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 text-left">
        <h3 className="text-[26px] font-[500] text-[#002B9A] mb-2">
          {doctor.title}
        </h3>
        <p className="text-[#000000] text-[14px] font-[400] mb-4 font-poppins">
          {doctor.description}
        </p>
        <a
          href="#"
          className="text-[#159EEC] flex items-center gap-2 hover:underline"
        >
          Learn More &rarr;

        </a>
      </div>
    </div>
  );
};

export default Doctors;
