"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Mood = "anger" | "fear" | "joy" | "love" | "sadness" | "surprise";

const moodColors: Record<Mood, string> = {
  anger: "bg-gradient-to-r from-red-500 to-red-300",
  fear: "bg-gradient-to-r from-purple-600 to-purple-400",
  joy: "bg-gradient-to-r from-yellow-400 to-yellow-200",
  love: "bg-gradient-to-r from-pink-500 to-pink-300",
  sadness: "bg-gradient-to-r from-blue-500 to-blue-300",
  surprise: "bg-gradient-to-r from-orange-500 to-orange-300",
};

const moods: Mood[] = ["anger", "fear", "joy", "love", "sadness", "surprise"];

const MoodRing: React.FC = () => {
  const [mood, setMood] = useState<Mood>("joy");
  const [gifUrl, setGifUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch(`/api/giphy?mood=${mood}`);
        const data = await response.json();

        if (response.ok && data.gifUrl) {
          setGifUrl(data.gifUrl);
        } else {
          setGifUrl(null);
        }
      } catch (error) {
        console.error("Error fetching GIF:", error);
        setGifUrl(null);
      }
    };

    fetchGif();
  }, [mood]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${moodColors[mood]} transition-all duration-300`}
    >
      <div className="w-96 h-96 rounded-full bg-white flex items-center justify-center shadow-lg">
        <div
          className={`w-80 h-80 rounded-full ${moodColors[mood]} transition-all duration-300 pulse-ring`}
        >
          {gifUrl && (
            <Image
              src={gifUrl}
              alt={mood}
              className="absolute inset-0 z-0 w-full h-full object-cover rounded-full"
              width={320}
              height={320}
            />
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-8 text-white capitalize">{mood}</h1>
      <div className="mt-8">
        {moods.map((m) => (
          <button
            key={m}
            className={`mx-2 px-4 py-2 rounded-lg text-white font-semibold ${moodColors[m]} hover:opacity-80 transition-opacity duration-300`}
            onClick={() => setMood(m)}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodRing;
