import { Button } from "./ui/button";
import Link from "next/link";

// data
import ctaPageData from "@/shared/data/cta.data";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">{ctaPageData.title}</h2>
          <Link href={ctaPageData.contact_path}>
            <Button>{ctaPageData.contact}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
