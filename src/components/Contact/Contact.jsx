import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <div className="container">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          className="grid gird-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6"
        >
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Let's collaborate on your upcoming car rental adventure
            </h1>
            <p className="text-gray-400">
              All you have to do is just one button away. So why delay. Lets go
              now!!
            </p>
          </div>
          <div className="grid place-items-center">
            <a
              href="#"
              className="inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-green-500 duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
