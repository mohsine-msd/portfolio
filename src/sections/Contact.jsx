import { React, useState, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  // this function for handling change on each input
  const Handlechange = (event) => {
    let { tagName, name, value } = event.target;
    console.log(event.target);
    // handle the input type
    if (tagName === "INPUT") {
      let { type } = event.target;
      if (type !== "file") {
        setFormData({ ...FormData, [name]: value });
      } else {
        let { files } = event.target;
        setFormData({ ...FormData, [name]: files[0] });
      }
    } else {
      setFormData({ ...FormData, [name]: value });
    }
  };
  // this function for confirming the form
  const Formconfirmation = (e) => {
    e.preventDefault();
    let check = 0;
    Object.keys(FormData).map((input) => {
      let current = FormData[input];
      if (current === "") {
        toast.error(`the ${input} field is required`);
      } else {
        check++;
      }
    });
    if (check === 3) {
      emailjs
        .sendForm("service_82y8akd", "template_g20adkp", form.current, {
          publicKey: "o8Jbgd_oAefaSWv1g",
        })
        .then(
          () => {
            toast.success("your message is send succesfully");
            setFormData((prev) => {
              return {
                ...prev,
                name: "",
                email: "",
                message: "",
              };
            });
          },
          (error) => {
            toast.error("error,try again");
          }
        );
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around border-t-2 border-neutral-200 mt-8  w-[75%] mx-auto">
        <div className=" mt-10 md:mt-36 flex flex-col gap-5  "> 
          <h1 className="text-center font-bold text-4xl text-zinc-50">
            Get in touch
          </h1>
          <div className="text-center tracking-tighter flex flex-col gap-5">
            <p className="text-zinc-400 text-2xl">CasaBlanca, Oulfa, Zoubir</p>
            <p className="text-zinc-400 text-2xl">+212 612820865</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={Formconfirmation}
          className="w-full md:w-[25%] flex flex-col gap-4 mt-8 mb-3 "
        >
          <div>
            <label
              htmlFor="name"
              className="block text-zinc-50 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={Handlechange}
              value={FormData.name}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-zinc-50 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={Handlechange}
              value={FormData.email}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-zinc-50 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={Handlechange}
              value={FormData.message}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
