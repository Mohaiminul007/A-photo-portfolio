import Image from "next/image";
import React from "react";
import ics from "@/public/about.jpg";
import ics2 from "@/public/about2.jpg";

const page = () => {
  return (
    <div>
      <div>
        <Image src={ics} alt="cs" />
      </div>
      <div className="lg:grid lg:grid-cols-2 mt-10 lg:mx-36 lg:my-10 ">
        <Image src={ics2} alt="cs2" />
        <div className=" ml-2 px-2 mt-10 lg:mt-0 pb-2">
          <h2 className="text-3xl mb-2  font-semibold">Shafaet Alam Abir</h2>
          <p className="">
            Dedicated architectural designer with a strong aspiration to be a
            landscape architect. Thrive on design that harmonize built
            environments with natural landscapes and habitat. Advanced software
            proficiency and model making skills enable me to translate
            conceptual ideas into detailed and co-habitat spaces. Always eager
            to collaborate and work closely with teams to achieve shared project
            goals. Committed to sustainability and aim to integrate eco-friendly
            space that blend architecture and landscape in a habitat. Being
            close to nature gives me the opportunity to observe habitats and
            document the biodiversity that speaks to the context. Gathering and
            connecting this information has prepared me for handling new design
            challenges. While on each bird-watching expedition, I often wonder,
            as a practitioner and a wildlife enthusiast, “If an entire ecosystem
            can thrive in a forest, why is our development approach more
            humanitarian?” This question has shaped my thought process in
            academic, professional, and personal spheres. Outside my academic
            career, I have spent the past ten years documenting over five
            hundred bird species across Bangladesh and other parts of the world,
            participating in numerous exhibitions, conferences, and seminars. At
            present, I am an architectural designer employed by
            Bangladesh&apos;s recognized landscape consultancy firm “Jol
            Jongol.” I reflect on my dedication to sustainable design and the
            preservation of natural ecosystems as a transition from a wildlife
            enthusiast to a landscape architect in the making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
