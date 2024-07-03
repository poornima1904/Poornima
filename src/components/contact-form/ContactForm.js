"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  CircleNotch,
  Warning,
  PaperPlaneTilt,
  XCircle,
} from "@phosphor-icons/react";
import toast, { Toaster } from "react-hot-toast";
import ButtonCTA from "../button-cta/ButtonCTA";
import FadeInSection from "../fade-in-section/FadeInSection";

const validateName = (name) => {
  if (name.trim().length === 0) {
    return "Name is required";
  }
  return null;
};

const validateEmail = (email) => {
  if (email.trim().length === 0) {
    return "Email is required";
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "Email is invalid";
  }
  return null;
};

const validateMessage = (message) => {
  if (message.trim().length === 0) {
    return "Message is required";
  }
  return null;
};

const emptyField = { value: "", error: null };

const errorField = (error) => ({ value: "", error });

const ContactForm = () => {
  const [name, setName] = useState(emptyField);
  const [email, setEmail] = useState(emptyField);
  const [message, setMessage] = useState(emptyField);

  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.error || email.error || message.error) {
      alert("Please fix the errors shown in the form and retry.");
      return;
    }

    setFormErrors({});
    setSubmitting(true);

    try {
      await axios.post("/api/contact", {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      setName(emptyField);
      setEmail(emptyField);
      setMessage(emptyField);
      console.log("Message sent successfully");
      toast.success(
        "I have received your message, I will get back to you soon."
      );
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          const fieldErrors = error.response.data.fieldErrors;
          setName((prev) => ({
            ...prev,
            error: fieldErrors.name ? fieldErrors.name.join(", ") : null,
          }));
          setEmail((prev) => ({
            ...prev,
            error: fieldErrors.email ? fieldErrors.email.join(", ") : null,
          }));
          setMessage((prev) => ({
            ...prev,
            error: fieldErrors.message ? fieldErrors.message.join(", ") : null,
          }));
          setFormErrors(error.response.data);
          toast.error("Please fix the errors shown in the form and retry.");
        } else if (status === 404) {
          toast.error("We are not accepting responses right now.");
        } else {
          toast.error(
            "Something went wrong, please contact us via email or twitter."
          );
        }
      } else {
        toast.error("An unexpected error occurred, please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FadeInSection className="flex flex-col" delay={0.3}>
        <label htmlFor="name" className="text-md sm:text-lg font-serif">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 rounded-xl focus:outline-cyan-500"
          value={name.value}
          onChange={(e) =>
            setName({
              value: e.target.value,
              error: validateName(e.target.value),
            })
          }
          disabled={submitting}
          required
        />
        {name.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {name.error}
          </p>
        )}
      </FadeInSection>

      <FadeInSection className="flex flex-col" delay={0.4}>
        <label htmlFor="email" className="text-md sm:text-lg font-serif">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 rounded-xl focus:outline-cyan-500"
          value={email.value}
          onChange={(e) =>
            setEmail({
              value: e.target.value,
              error: validateEmail(e.target.value),
            })
          }
          disabled={submitting}
          required
        />
        {email.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {email.error}
          </p>
        )}
      </FadeInSection>

      <FadeInSection className="flex flex-col" delay={0.5}>
        <label htmlFor="message" className="text-md sm:text-lg font-serif">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="px-3 py-2 bg-white border border-gray-300 text-md sm:text-lg mt-2 text-gray-800 placeholder:text-gray-500/75 min-h-[2.7rem] h-48 rounded-xl focus:outline-cyan-500"
          value={message.value}
          onChange={(e) =>
            setMessage({
              value: e.target.value,
              error: validateMessage(e.target.value),
            })
          }
          disabled={submitting}
          required
        />
        {message.error && (
          <p className="text-yellow-500 mt-2 flex items-center">
            <Warning className="inline mr-2" size="20" />
            {message.error}
          </p>
        )}
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <ButtonCTA type="submit" disabled={submitting} className="mt-6">
          <span>Send Message</span>
          {submitting ? (
            <CircleNotch weight="bold" className="ml-4 animate-spin" />
          ) : (
            <PaperPlaneTilt weight="bold" className="ml-4" />
          )}
        </ButtonCTA>
      </FadeInSection>
      <Toaster />
    </form>
  );
};

export default ContactForm;
