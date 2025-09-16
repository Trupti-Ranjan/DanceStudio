import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    // basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return;
    }

    // check for common Gmail typos
    const domain = formData.email.split("@")[1].toLowerCase();
    const commonTypos = ["gmil.com", "gmal.com", "gnail.com", "gmaill.com"];

    if (commonTypos.includes(domain)) {
      setStatus("⚠️ Did you mean gmail.com?");
      return;
    }

    // simulate form submission
    setStatus("✅ Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contactus"
      className="flex min-h-screen items-center justify-center bg-[#f2f2fe] px-4"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#1E2939]">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#1E2939]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              autoComplete="off"
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-[#FCB670] focus:ring-1 focus:ring-[#FCB670] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#1E2939]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-[#FCB670] focus:ring-1 focus:ring-[#FCB670] focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#1E2939]">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-[#FCB670] focus:ring-1 focus:ring-[#FCB670] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#FCB670] py-3 font-semibold text-white transition hover:cursor-pointer hover:bg-[#FFA500]"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
