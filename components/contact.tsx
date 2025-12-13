"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
export const Contact = () => {
  const sendEmailAPI = "/api/email";
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(sendEmailAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        toast("Email sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // re-enable button
    }

    console.log(email, name, message, subject);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 md:mt-28 lg:mt-32 2xl:mt-36 flex flex-col-reverse md:flex-row  gap-16  mb-50">
      <div className="flex-1 space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            id="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="subject">Subject</label>
          <Input
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <Textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here."
            className="pb-20 mt-2"
            required
          />
          <Button type="submit" variant={"secondary"} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
      <div className="flex-1 flex flex-col gap-y-4 md:gap-y-6 text-pretty">
        <h1 className="text-xl md:text-2xl font-semibold ">
          Based in the Philippines | Available Worldwide
        </h1>
        <p className="md:leading-7 ">
          Whether you&apos;re in Philippines, United States, Australia or
          anywhere else, I&apos;m ready to collaborate remotely and turn your
          ideas into reality. Let&apos;s create something amazing together!
        </p>
      </div>
    </div>
  );
};
