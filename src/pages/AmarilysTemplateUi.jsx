import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import amarilys from "../assets/amarilys.jpg";

const AmarilysTemplateUi = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${amarilys})` }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1536814294574-df49a3cc97bd?q=80&w=3465&auto=format&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white shadow-md"
          />
          <h1 className="mt-4 text-center text-3xl font-semibold text-white">
            Amarilys <br />
            Aishleem
          </h1>
          <p className="mt-1 text-base italic text-gray-200">
            "Elegance never fades"
          </p>
        </div>

        {/* Link Buttons */}
        <div className="w-full max-w-md space-y-4">
          <a
            href="#"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            My Boutique
          </a>
          <a
            href="#"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            Latest Collection
          </a>
          <a
            href="#"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            Exclusive Discounts
          </a>
          <a
            href="#"
            className="block py-3 px-6 rounded-full bg-white text-gray-800 text-center font-medium hover:bg-gray-200 transition"
          >
            VIP Access
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-8">
          <a href="#" className="text-white hover:text-gray-300 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            <FaYoutube size={24} />
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-300">
          © 2025 Amarilys. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AmarilysTemplateUi;
