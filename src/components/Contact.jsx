import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from "../utils/helpers";
import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import MyImage from "../assets/whatsupdoc.jpg";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("meqwygda");
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function resetForm() {
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(true);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await handleSubmit(event);
    resetForm();
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleFormSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Please enter your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Please enter your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
      >
        <img src={MyImage} alt="My Image" className="w-full h-3/4 rounded-lg"/>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
