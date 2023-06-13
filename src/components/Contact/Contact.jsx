import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Input from "../Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";

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
    <div id="contact" className="md:px-28 px-10 sm:py-16">
      <div className="sm:p-20 p-8 bg-[#070606] drop-shadow-xl rounded-3xl">
        <h1 className="text-3xl font-normal text-[#f7f7f7] mb-6">
          Get In Touch
        </h1>
        <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-12">
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-6 items-center">
            <div className="sm:w-1/2 w-full">
              <Input name="first_name" type="text" label={"First Name"} />
            </div>
            <div className="sm:w-1/2 w-full">
              <Input name="last_name" type="text" label={"Last Name"} />
            </div>
          </div>
          <div>
            <Input name="from_email" type={"email"} label={"Email"} />
          </div>
          <div>
            <textarea
              required
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message Here"
              className="w-full rounded-md placeholder-neutral-200 text-[#f7f7f7] bg-neutral-600 p-6 text-2xl"
            ></textarea>
          </div>
          <div className=" text-center">
            <button
              onClick={(e) => {
                sendEmail();
                e.target.reset();
              }}
              className="px-10 py-3 text-xl rounded-full bg-neutral-700 transition hover:bg-neutral-900 text-[#f7f7f7]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
