"use client"; // Tambahkan ini di baris pertama

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface Seminar {
  title: string;
  speaker: string;
  location: string;
  time: string;
  image: string;
}

const seminars: Seminar[] = [
  {
    title: "Kehidupan Algoritma",
    speaker: "Jerome Polin",
    location: "Jakarta 123",
    time: "14.00 WIB",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Masa Depan AI",
    speaker: "John Doe",
    location: "Bandung 456",
    time: "16.00 WIB",
    image: "/path/to/image2.jpg",
  },
];

const SeminarCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
      {seminars.map((seminar, index) => (
        <div key={index} className="p-4 bg-white shadow-md">
          <Image
            src={seminar.image}
            alt={seminar.title}
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h3 className="font-bold mt-2">{seminar.title}</h3>
          <p className="text-gray-600">{seminar.speaker}</p>
          <p className="text-sm text-gray-500">
            {seminar.location}, {seminar.time}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default SeminarCarousel;
