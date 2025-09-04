import React from "react";

const LocalisationPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="w-[1000px] h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.123987857098!2d10.797153215258758!3d35.76050148020347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020d0041c84657%3A0xe5591d678ce52378!2sLa%20Rive%20D'or!5e0!3m2!1sen!2stn!4v1693733000000!5m2!1sen!2stn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="La Rive D'or Location"
        ></iframe>
      </div>
    </div>
  );
};

export default LocalisationPage;
