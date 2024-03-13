import { FaPaperPlane } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionTitle>Contact me</SectionTitle>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline font-medium"
          href="mailto:boue.maxime6@gmail.com"
        >
          boue.maxime6@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col" action="">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 group-hover:bg-gray-950 transition-all"
          >
            {" "}
            Submit{" "}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1  text-xs-opacity-70 transition-all" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
