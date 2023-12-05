import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Input from "../Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Mail } from "lucide-react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pipn973",
        "template_bw1ottb",
        form.current,
        "v3KrR0okDiJBE9mfU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="md:px-28 bg-white px-10 sm:py-16">
      <h1 className="uppercase text-blue-500 font-bold text-lg">Contact</h1>
      <h2 className="uppercase text-[#2D2E32] font-bold text-xl mt-4">
        Feel free to reach out! Don't hesitate to get in touch! 👇
      </h2>
      <div className="mt-4">
        <div className="flex items-center gap-5">
          <div className="p-4 shadow-md w-fit rounded-full bg-white">
            <Mail className="text-blue-500 h-8 w-8" />
          </div>
          <div>
            <h2 className="text-lg text-[#2d2e32] font-bold">Mail</h2>
            <h3 className="text-md text-[#767676]">mohamedtaahar@gmail.com</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
