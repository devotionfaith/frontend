"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CardCarouselProps = {
  title: string;
  data: { id: number; title: string; speaker: string; location: string; imageUrl: string }[];
};

const CardCarousel: React.FC<CardCarouselProps> = ({ title, data }) => {
  const handleCardClick = (id: number) => {
    window.location.href = `/seminar/form?id=${id}`;
  };

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl text-cont-primary font-semibold mb-4">{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleCardClick(item.id)}
            >
              <Card className="rounded-lg overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent>
                  <h3 className="font-medium text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-800">{item.speaker}</p>
                  <p className="text-sm text-gray-700">{item.location}</p>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardCarousel;
