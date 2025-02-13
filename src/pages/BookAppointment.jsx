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
          Mon-Sat 09:00-20:00 <br /> Sunday Emergency only
        </>
      ),
      bgColor: "bg-blue-100",
    },
  ];
  return (
    <div className="pt-[140px]">
      {/* banner */}
      <div className=" relative">
        {/* Background Image */}
        <img src="/appointment.png" alt="bg1" className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center left-0 px-6">
        <div className="text-left font-poppins text-[#1F2B6C]">
        <p className="md:text-[20px] mb-4">Home / Contact</p>
            <h2 className="text-3xl md:text-[55px]  font-[700]">Our Contact</h2>
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
          <div className="lg:p-4 font-poppins">
            {/* Heading */}
            <h1 className="text-[32px]  font-[600] text-[#002B9A] mb-4">
              Book an Appointment
            </h1>
            <p className="text-[#000000] font-[400] text-sm lg:text-base mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor.
            </p>

            {/* Form */}
            <div className="bg-[#1F2B6C] text-[#FCFEFE] rounded-2xl shadow-lg w-full max-w-lg">
              <form className="space-y-0">
                {/* Name & Gender */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-3">
                    <input
                      type="text"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-white"
                      placeholder="Name"
                    />
                  </div>
                  <div className="p-3  border-white">
                    <select className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white">
                      <option>Gender</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-3">
                    <input
                      type="email"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-white"
                      placeholder="Email"
                    />
                  </div>
                  <div className="p-3  border-white">
                    <input
                      type="text"
                      className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-white"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-3">
                    <select className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white">
                      <option>Date</option>
                      <option>12/02/2025</option>
                    </select>
                  </div>
                  <div className="p-3  border-white">
                    <select className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white">
                      <option>Time</option>
                      <option>12:34 PM</option>
                    </select>
                  </div>
                </div>

                {/* Doctor & Department */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-3">
                    <select className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white">
                      <option>Doctor</option>
                      <option>Dr. Smith</option>
                      <option>Dr. Jane</option>
                    </select>
                  </div>
                  <div className="p-3  border-white">
                    <select className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white">
                      <option>Cardiology</option>
                      <option>Dermatology</option>
                      <option>Neurology</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="p-3">
                  <textarea
                    rows="4"
                    className="w-full mt-1 p-2 bg-[#1F2B6C] outline-none text-white placeholder-white"
                    placeholder="Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#BFD2F8] h-[50px] text-[#1F2B6C] font-bold p-2 rounded-b-md uppercase tracking-wide hover:bg-[#A5C4F0] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#1F2B6C] font-poppins text-white p-8 lg:p-12 flex flex-col justify-between">
            <div className="bg-[#1F2B6C] text-white p-6 rounded-lg">
              <h2 className="text-[#BFD2F8] font-[500] mb-6 text-[48px] text-center">
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
                  <li
                    key={idx}
                    className="flex justify-between text-[#FCFEFE] items-center"
                  >
                    <span className="flex-1">{day}</span>
                    <span className="w-10 h-px bg-white mx-4"></span>
                    <span className="flex-1 text-right">{time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 font-poppins border-t border-[#BFD2F8] pt-4 flex justify-center">
                <div className="flex items-center space-x-4">
                  {/* Left Side: Emergency Icon */}
                  <img
                    src="/about/emer-app.png"
                    alt="Emergency Icon"
                    className="h-12 w-12"
                  />

                  {/* Right Side: Texts in a Column */}
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[#FCFEFE] font-[500] text-[24px]">
                      Emergency
                    </p>
                    <p className="text-[#BFD2F8]"> (237) 681-812-XXX </p>
                  </div>
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
      <section className="py-16 bg-[url('/about/bg5.png')] bg-no-repeat bg-cover bg-center mt-4">
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
}
