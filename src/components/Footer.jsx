import React from "react";

const Footer = () => {
  return (
    <div className="lg:py-10 lg:px-[160px] bg-base-200 sticky top-[100vh]">
      <div className="w-[40%] mx-auto text-center">
        <h1 className="text-3xl font-bold pb-3">Gadget Heaven</h1>
        <p className="font-medium text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="my-8" />
      <footer className="footer  lg:ml-28 text-base-content p-10">
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title opacity-100 text-black">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title opacity-100 text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col justify-center items-center">
          <h6 className="footer-title opacity-100 text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
