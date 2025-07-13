import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Aniket Ghosh</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Email */}
        <div className="border p-6 rounded-xl shadow text-center hover:-translate-y-3">
          <Mail className="mx-auto text-blue-600" size={32} />
          <h2 className="text-xl font-semibold mt-4">Email</h2>
          <p className="text-gray-600 mt-2">
            Feel free to send me an email anytime. I typically respond within 24 hours.
          </p>
          <p className="mt-2 font-medium text-gray-800">aniketghosh0606@gmail.com</p>
          <a
            href="mailto:aniketghosh0606@gmail.com"
            className="mt-4 inline-block text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-100"
          >
            Send Email
          </a>
        </div>

        {/* Phone */}
        <div className="border p-6 rounded-xl shadow text-center hover:-translate-y-3">
          <Phone className="mx-auto text-blue-600" size={32} />
          <h2 className="text-xl font-semibold mt-4">Phone</h2>
          <p className="text-gray-600 mt-2">
            Available for calls during business hours (9 AM - 6 PM IST, Monday to Friday).
          </p>
          <p className="mt-2 font-medium text-gray-800">+91 7501559792</p>
          <a
            href="tel:+917501559792"
            className="mt-4 inline-block text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-100"
          >
            Call Me
          </a>
        </div>

        {/* LinkedIn */}
        <div className="border p-6 rounded-xl shadow text-center hover:-translate-y-3">
          <Linkedin className="mx-auto text-blue-600" size={32} />
          <h2 className="text-xl font-semibold mt-4">LinkedIn</h2>
          <p className="text-gray-600 mt-2">
            Connect with me professionally or send a message through LinkedIn.
          </p>
          <p className="mt-2 font-medium text-gray-800">
            https://www.linkedin.com/in/aniket-ghosh-5054a2344
            ?utm_source=share&utm_campaign=
            share_via&utm_content= profile&utm_medium=android_app
          </p>
          <a
            href="https://www.linkedin.com/in/aniket-ghosh-5054a2344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-100"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;