import React from "react";

export default function BookAppointment() {
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
      {/* end banner */}
      <div
        className="min-h-screen mt-4 bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 "
        style={{ backgroundImage: "url('/about/bg5.png')" }}
      >
        <div className=" rounded-lg max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Left Section */}
          <div className="lg:p-4">
            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Book an Appointment
            </h1>
            <p className="text-gray-600 text-sm lg:text-base mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor.
            </p>

            {/* Form */}
            <form className="space-y-4 bg-[#1F2B6C] p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 bg-[#1F2B6C] rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Gender
                  </label>
                  <select className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-white ">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-white "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-white "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full border bg-[#1F2B6C] border-white rounded px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Doctor
                  </label>
                  <select className="w-full bg-[#1F2B6C] border border-gray-300 rounded px-3 py-2 text-white">
                    <option>Dr. John</option>
                    <option>Dr. Smith</option>
                    <option>Dr. Jane</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Department
                  </label>
                  <select className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-white ">
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border bg-[#1F2B6C] border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#BFD2F8] -mt-4 text-[#1F2B6C] font-bold py-3 px-6 rounded "
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-blue-900 text-white p-8 lg:p-12 flex flex-col justify-between">
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Schedule Hours
              </h2>
              <ul className="space-y-4">
                {[
                  ["Monday", "09:00 AM - 07:00 PM"],
                  ["Tuesday", "09:00 AM - 07:00 PM"],
                  ["Wednesday", "09:00 AM - 07:00 PM"],
                  ["Thursday", "09:00 AM - 07:00 PM"],
                  ["Friday", "09:00 AM - 07:00 PM"],
                  ["Saturday", "09:00 AM - 07:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time], idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="flex-1">{day}</span>
                    <span className="w-10 h-px bg-white mx-4"></span>
                    <span className="flex-1 text-right">{time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white pt-4 text-center">
                <p className="text-lg font-medium">Emergency</p>
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src="/about/emer-app.png"
                    alt="Emergency Icon"
                    className="h-10 w-10"
                  />
                  <a href="tel:+237681812255" className=" text-white">
                    (237) 681-812-255
                  </a>
                </div>
              </div>
            </div>
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

      {/*contact us  */}
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center md:mt-5 mt-4 mb-4">
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
}
