"use client";
 
import { useState } from "react";
 
export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    console.log("Full name: ", fullname);
    console.log("Cel: ", phonenumber);
    console.log("Email: ", email);
    console.log("Message: ", message);
 
    const res = await fetch("../pages/api/contact/route.js", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phonenumber,
        email,
        message,
      }),
    });
 
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
 
    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Name"
        />
        <input className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            onChange={(e) => setPhone(e.target.value)}
            value={phonenumber}
            type="number"
            id="phone"
            placeholder="614-555-5555"
        />
        <input className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="example@gmail.com"
        />
        <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-gray-200 focus:outline-none pl-4 mb-10"
            id="message"
            placeholder="Type your message here..."
        >
        </textarea>
        <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button>
      </form>

      <div className="bg-slate-100 flex flex-col"> {error && error.map((e) => (
            <div className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>
              {e}
            </div>
          ))}
      </div>
    </>
  );
}