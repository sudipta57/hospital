const Footer = () => {
  return (
    <>
      <footer className="bg-[#002B9A] text-white py-8">
        <div className="border-b border-[#BFD2F8] pb-20 container mx-auto px-4 grid grid-cols-1 font-poppins md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-[36px] font-[400] leading-[40px] font-yeseva">MEDDICAL</h2>
            <p className="mt-2">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold">Important Links</h3>
            <ul className="mt-2 space-y-2 text-[#FFFFFF]">
              <li>
                <a href="#" className="hover:underline">
                  Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li>Call: (237) 681-XXX-XXX</li>
              <li>
                Email:
                <a href="" className="hover:underline">
                  medicare@gmail.com
                </a>
              </li>
              <li>Address: 110025-New Delhi, Noida</li>
              <li>Work Hour: 09:00 - 20:00 Everyday</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <form className="mt-2 flex text-[#1F2B6C] ">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-[#BFD2F8] rounded-l-md focus:outline-none placeholder:text-[#1F2B6C]"
              />

              <button
                type="submit"
                className="bg-[#BFD2F8] px-4 py-2 rounded-r-md"
              >
                <img src="/landing/submit.png" alt="SubmitImg" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center container mx-auto px-4 mt-8">
          <p>Copyright @ OMEGA | Developed By SECWEBXPERTS PVT. LTD.</p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="/landing/linkdn.png"
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/landing/facebook.png"
              alt="Facebook"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/landing/insta.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
