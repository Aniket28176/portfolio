import React, { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Contact Me</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        <div className="border p-6 rounded-xl shadow text-center">
          <Mail className="mx-auto text-blue-600" size={32} />
          <p className="mt-4 text-white">aniketghosh0606@gmail.com</p>
        </div>

        <div className="border p-6 rounded-xl shadow text-center">
          <Phone className="mx-auto text-blue-600" size={32} />
          <p className="mt-4 text-white">+91 7501559792</p>
           <a
    href="tel:+917501559792"
    className="mt-4 inline-block text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-100"
  >
    Call Me
  </a>
        </div>

        <div className="border p-6 rounded-xl shadow text-center">
          <Linkedin className="mx-auto text-blue-600" size={32} />
          <a
            href="https://www.linkedin.com/in/aniket-ghosh-5054a2344"
            target="_blank"
            rel="noreferrer"
            className="text-white block mt-4"
          >
            Visit Profile
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-blue-50 p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Send Message
        </button>

        <p className="mt-4 text-sm">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
