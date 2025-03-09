import React from "react";
import "./ClaireTemplateUi.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ClaireTemplateUi = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-start justify-start bg-[#f9f2ec]  bg-[url('https://www.transparenttextures.com/patterns/flowers.png')]
        bg-repeat"
    >
      {/* Wrapper with max-width to resemble a mobile-friendly layout */}
      <div className="relative w-full ">
        {/* TOP SECTION with background */}
        <div className="h-44 w-full bg-[#7b765d] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white sacramento">
            Welcome To My Site
          </h1>
          <p className="mt-1 text-sm text-white tracking-wider">
            Wisdom & Happinesss
          </p>
        </div>

        {/* PROFILE IMAGE overlapping top and bottom */}
        <div className="absolute top-32 left-1/2 flex -translate-x-1/2">
          <div className="h-28 w-28 overflow-hidden rounded-full border-8 border-[#f9f2ec]">
            {/* Replace this placeholder with your actual image */}
            <img
              src="https://images.unsplash.com/photo-1536814294574-df49a3cc97bd?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Claire Silva"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM SECTION (White area) */}
        <div className="mt-20 flex flex-col items-center  px-6 pb-8">
          {/* Name and Role */}
          <h2 className="text-3xl font-bold text-[#313028]">Claire Silva</h2>
          <p className="mt-1 text-sm uppercase tracking-wider text-[#827e61]">
            Content Creator
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col space-y-4">
            <a
              href="#"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              About Me
            </a>
            <a
              href="#"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              My Website
            </a>
            <a
              href="#"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Happy Yogi Testimonials
            </a>
            <a
              href="#"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Read My Blog
            </a>
            <a
              href="#"
              className="
      block w-full
      bg-[#7b765d]
      py-3
      text-center
      font-normal
      text-white
      transition-colors
      hover:bg-[#726e59]
      rounded-tr-2xl
      rounded-bl-2xl
    "
            >
              Book a Schedule
            </a>
          </div>

          {/* Horizontal line */}
          <hr className="mb-4 mt-7 w-full border-t border-[#7b765d]/40" />

          {/* Social Media Icons */}
          <div className="mt-2 flex space-x-5 text-[#7b765d]">
            <a href="#" className="hover:text-[#726e59]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#726e59]">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#726e59]">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#726e59]">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaireTemplateUi;
