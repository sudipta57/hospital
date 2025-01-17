import { FaCalendarAlt, FaClock } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      {/* banner section */}
      <div className="flex  md:pt-0 md:items-center bg-[url('/landing/bg_banner.png')] h-[150vh] bg-cover bg-center">
        <div className="max-w-3xl px-6 md:px-10 text-center md:text-left w-full">
          <h1 className="text-[#002B9A] font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl">
            Your Partner in Health and Wellness
          </h1>
          <p className="text-[#002B9A] text-base sm:text-lg md:text-xl font-poppins font-normal mt-4">
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier
          </p>
          <button className="bg-[#3A40DFEE] font-poppins text-white px-8 py-3 rounded-2xl mt-10 text-lg sm:text-xl">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-[1400px] bg-[#F2F2F2] mx-auto p-6 text-center relative mt-4 mb-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold font-poppins text-blue-800 mb-8">
          Our Values
        </h2>

        {/* Centered Background Shield */}
        <div
          className="absolute inset-0 flex justify-center items-center z-0"
          style={{
            backgroundImage: "url('')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Grid container */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {/* Top-left Card - Respect */}
          <div className="w-full max-w-xs bg-white font-poppins rounded-lg shadow-md text-left transform sm:mt-20 sm:mr-[-100px] md:mt-20 md:mr-[-100px]">
            <div className="p-2 bg-[#59A0F46B] text-[#081D54] flex items-center justify-center text-center rounded-t-lg mt-7">
              <img
                src="/valueSection/respect.png"
                alt="Respect Icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="font-semibold">Respect</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                We treat all individuals with respect and dignity. We believe
                every person deserves to be treated with compassion and
                kindness.
              </p>
            </div>
          </div>

          {/* Top-middle Card - Excellence */}
          <div className="w-full max-w-xs bg-white font-poppins rounded-lg shadow-md text-left transform sm:mt-7 sm:mb-10 sm:mt-12 md:mt-7 md:mb-10 md:mt-12">
            <div className="p-2 bg-[#59A0F46B] font-poppins text-[#081D54] flex items-center justify-center text-center rounded-t-lg mt-7">
              <img
                src="/valueSection/respect.png"
                alt="Excellence Icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="font-semibold">Excellence</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                We are committed to providing excellent care and services to our
                patients.
              </p>
            </div>
          </div>

          {/* Top-right Card - Teamwork */}
          <div className="w-full max-w-xs bg-white font-poppins rounded-lg shadow-md text-left transform sm:mt-20 sm:ml-[-100px] md:mt-20 md:ml-[-100px]">
            <div className="p-2 bg-[#59A0F46B] font-poppins text-[#081D54] flex items-center justify-center text-center rounded-t-lg mt-7">
              <img
                src="/valueSection/teamwork.png"
                alt="Teamwork Icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="font-semibold">Teamwork</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                We believe in working collaboratively with our team members and
                other healthcare providers to provide effective care to our
                patients.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          {/* Bottom-left Card - Compassion */}
          <div className="w-full max-w-xs bg-white font-poppins rounded-lg shadow-md text-left transform sm:translate-y-8 sm:mr-[-200px] md:translate-y-8 md:mr-[-200px]">
            <div className="p-2 bg-[#59A0F46B] font-poppins text-[#081D54] flex items-center justify-center text-center rounded-t-lg mt-7">
              <img
                src="/valueSection/compassion.png"
                alt="Compassion Icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="font-semibold">Compassion</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                We strive to create a welcoming and supportive environment that
                puts our patients at ease.
              </p>
            </div>
          </div>

          {/* Center Shield */}
          <div
            className="relative flex justify-center items-center mt-[-4px] sm:mt-[-2px] md:mt-[-4px]"
            style={{ width: "120px", height: "120px" }}
          >
            <div
              style={{
                backgroundImage: "url('/valueSection/health.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex justify-center items-center w-full h-full"
            ></div>
          </div>

          {/* Bottom-right Card - Integrity */}
          <div className="w-full max-w-xs bg-white font-poppins rounded-lg shadow-md text-left transform sm:translate-y-8 sm:ml-[-200px] md:translate-y-8 md:ml-[-200px]">
            <div className="p-2 bg-[#59A0F46B] font-poppins text-[#081D54] flex items-center justify-center text-center rounded-t-lg mt-7">
              <img
                src="/valueSection/integrity.png"
                alt="Integrity Icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="font-semibold">Integrity</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                We believe in practicing medicine with integrity and honesty. We
                always put our patients' interests first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End Our Values Section */}

      {/* departments */}

      <div className="relative text-center py-10">
        {/* Background Image Section */}
        <div className="mx-3 rounded-lg absolute inset-0 h-[280px] bg-[url('/landing/bg-2.png')] bg-cover bg-center" />

        {/* Title */}
        <h2 className="relative text-[#F2F2F2] text-[42px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-poppins font-semibold mb-16 z-10">
          Departments
        </h2>

        {/* Responsive Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8 sm:px-10 md:px-16 lg:px-20 xl:px-32 mt-24">
          {/* Card Items */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform transform hover:scale-105 h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px]"
            >
              <img
                src={`/landing/department-${index + 1}.png`} // Update the path if each department has unique images
                alt="Department Icon"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4"
              />
              <p className="text-[#002B9AE8] text-lg sm:text-xl md:text-2xl font-medium text-center">
                {
                  [
                    "Emergency Department",
                    "Pediatric Department",
                    "Obstetrics and Gynecology",
                    "Cardiology Department",
                    "Neurology Department",
                    "Psychiatry Department",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor team */}
      <div className="relative text-center py-10 mt-6">
        {/* Background Image Section */}
        <div className="mx-3 rounded-lg absolute inset-0 h-[280px] bg-[url('/landing/bg-3.png')] bg-cover bg-center" />

        {/* Title */}
        <h2 className="relative text-[#F2F2F2] font-poppins text-[40px] font-semibold mb-16 z-10 h-auto">
          Our Dedicated Doctors Team
        </h2>

        {/* Responsive Grid layout */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 lg:px-20 xl:px-32 mt-24">
          {/* Card items */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
            >
              <img
                src={`/landing/doctor-${index + 1}.png`} // Update the path if each department has unique images
                alt="Department Icon"
                className="mb-4"
              />
              <div className="flex justify-between">
                <div className="mr-4">
                  <p className="text-[#002B9AE8] text-lg font-medium text-[18px]">
                    {["Dr. Maran", "Dr. Suganthi", "Dr. JohnDurai"][index]}
                  </p>
                  <p className="text-[#002B9AE8] font-[400] text-[15px]">
                    {["Cardiologist", "Psychiatrist", "Pediatrician"][index]}
                  </p>
                </div>
                <button className="bg-[#6173ED] px-4 font-poppins text-white rounded-xl">
                  {" "}
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 bg-[url('/landing/bg-4.png')] bg-cover bg-center min-h-[560px] flex items-center">
        <div className="max-w-3xl px-10 md:pt-28 pt-20">
          <h1 className="text-[#F2F2F2] font-poppins font-[600] text-[30px] md:text-[60px]">
            Don’t Let Your Health Take a Backseat!
          </h1>
          <p className="text-[#0D2D81E8] font-poppins font-[500] text-[18px] md:text-[24px]">
            Schedule an appointment with one of our experienced medical
            professional today!
          </p>
          <button className="bg-[#6173ED] px-6 font-poppins text-white rounded-lg py-2 mt-10">
            Book Now{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 rounded-lg mx-auto mt-10 max-w-full md:max-w-6xl">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="font-poppins text-[#002B9A]">
            <span className="font-[500] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
              BOOK AN
            </span>
            <br />
            <span className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-[600]">
              Appointment
            </span>
          </h1>

          {/* Name and Phone Number */}
          <div className="flex flex-col md:flex-row gap-4 font-poppins">
            <div className="flex flex-col flex-1">
              <label className="text-[#002B9A] font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-full border border-[#002B9A] bg-[#F3F4F6] text-[#002B9A] focus:outline-none"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[#002B9A] font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="px-4 py-3 rounded-full border border-[#002B9A] bg-[#F3F4F6] text-[#002B9A] focus:outline-none"
              />
            </div>
          </div>

          {/* Preferred Date and Time */}
          <div className="flex flex-col md:flex-row gap-4 font-poppins">
            <div className="flex flex-col w-full">
              <label className="text-[#002B9A] font-semibold mb-1">
                Preferred Date
              </label>
              <div className="flex items-center px-4 py-3 rounded-full border border-[#002B9A] bg-[#F3F4F6]">
                <FaCalendarAlt className="text-[#002B9A] mr-2" />
                <input
                  type="text"
                  placeholder="Select a date"
                  className="flex-1 bg-transparent text-[#002B9A] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#002B9A] font-semibold mb-1">
                Preferred Time
              </label>
              <div className="flex items-center px-4 py-3 rounded-full border border-[#002B9A] bg-[#F3F4F6]">
                <FaClock className="text-[#002B9A] mr-2" />
                <input
                  type="text"
                  placeholder="Select a time"
                  className="flex-1 bg-transparent text-[#002B9A] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <p className="text-[#002B9A] font-semibold">Reason for Visit</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="visitReason"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Routine Checkup</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="visitReason"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">New Patient Visit</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="visitReason"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Specific Concern</span>
              </label>
            </div>
          </div>

          {/* Department */}
          <div>
            <p className="text-[#002B9A] font-poppins font-semibold">
              Department
            </p>
            <div className="flex flex-wrap gap-4 mt-2 font-poppins">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Pediatric</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">
                  Obstetrics and Gynecology
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Cardiology</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Neurology</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  className="text-[#002B9A]"
                />
                <span className="text-[#002B9A]">Psychiatry</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="bg-[#6173ED] text-white px-6 py-3 rounded-full font-poppins font-bold text-lg mt-4 flex items-center justify-center gap-2 hover:bg-[#4a5bc2] transition-colors">
            Submit
            <span className="material-icons">&gt;</span>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className=" md:flex md:w-1/2 justify-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-blue-200 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-blue-200 rounded-full"></div>
            <img
              src="/landing/appointment-doctor.png" // Replace with actual image path
              alt="Doctor"
              className="relative z-10 max-w-[80%] md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
