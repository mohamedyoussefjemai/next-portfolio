import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

// components
import Form from "@/components/Form";

// data
import contactPageData from "@/shared/data/contact.data";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              {contactPageData.message}
            </div>
            <h1 className="h1 max-w-md mb-8"> {contactPageData.title} </h1>
            <p className="subtitle max-w-[400px]">
              {contactPageData.description}
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_bg_light dark:bg-contact_bg_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2  mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              {/* mail */}
              <MailIcon size={18} className="text-primary" />
              <div>{contactPageData.email}</div>
            </div>
            <div className="flex items-center gap-x-8">
              {/* address */}
              <HomeIcon size={18} className="text-primary" />
              <div>{contactPageData.address}</div>
            </div>
            <div className="flex items-center gap-x-8">
              {/* phone */}
              <PhoneCall size={18} className="text-primary" />
              <div>{contactPageData.phone}</div>
            </div>
          </div>
          {/*form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
