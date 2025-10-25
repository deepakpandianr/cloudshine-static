import Image from "next/image";
import Header from "@/components/Header/Header";
import Logo from '@/public/images/logo.webp'
import Banner from "@/components/Banner/Banner";
import Modules from "@/components/Modules/Modules";
import Mentor from "@/components/Mentors/Mentors";
import Testimonial from "@/components/Testimonial/Testimonial";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header Logo={Logo} />
    <Banner />
    <Modules />
    <Mentor />
    <Testimonial />
    <Faq />
    <Footer />
    </>
  );
}
