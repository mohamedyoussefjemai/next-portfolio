"use client";

// components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// icons
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

// data
import contactPageData from "@/shared/data/contact.data";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea type="message" id="message" placeholder="Type your message" />
        <MessageSquare className="absolute top-4 right-4" size={20} />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-1">
        {contactPageData.button1}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
