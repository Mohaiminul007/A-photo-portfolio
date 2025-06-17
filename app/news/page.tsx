// components/NewsSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import newsData from "./newsData.json";
import { FaTimes } from "react-icons/fa";

interface NewsItem {
  title: string;
  description: string;
  image: string;
}

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full px-4 md:px-28">
      {newsData.map((news: NewsItem, i: number) => (
        <div
          key={i}
          className="grid my-10 rounded-3xl grid-cols-1 md:grid-cols-2 border border-gray-300 overflow-hidden"
        >
          <Image
            src={news.image}
            alt={news.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h2 className="text-3xl font-semibold">{news.title}</h2>
            <p className="mt-4 text-gray-700 line-clamp-4">{news.description}</p>
            <button
              className="text-blue-600 cursor-pointer duration-200 hover:text-sky-400 mt-4"
              onClick={() => openModal(news)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && selectedNews && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative  w-full mx-4 bg-white rounded-lg overflow-y-auto max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
            >
              <FaTimes size={20} />
            </button>
            <Image
              src={selectedNews.image}
              alt={selectedNews.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedNews.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedNews.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
