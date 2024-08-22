"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

type Mood =
  | "anger"
  | "fear"
  | "joy"
  | "love"
  | "sadness"
  | "surprise"
  | "default";

const moodColors: Record<Mood, string> = {
  anger: "bg-gradient-to-r from-red-500 to-red-300",
  fear: "bg-gradient-to-r from-purple-600 to-purple-400",
  joy: "bg-gradient-to-r from-yellow-400 to-yellow-200",
  love: "bg-gradient-to-r from-pink-500 to-pink-300",
  sadness: "bg-gradient-to-r from-blue-500 to-blue-300",
  surprise: "bg-gradient-to-r from-orange-500 to-orange-300",
  default: "bg-gradient-to-r from-gray-500 to-gray-300",
};

const moods: Mood[] = ["anger", "fear", "joy", "love", "sadness", "surprise"];

const MoodRing: React.FC = () => {
  const [mood, setMood] = useState<Mood>("default");
  const [gifUrl, setGifUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGif = async () => {
      setIsLoading(true);
      if (mood === "default") {
        setGifUrl(null);
        setIsLoading(false);
        return;
      }
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
      setIsLoading(false);
    };

    fetchGif();
  }, [mood]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${moodColors[mood]} transition-all duration-300`}
    >
      <Fade>
        <h1 className="text-5xl font-bold m-8 text-white capitalize">
          What‘s your current mood?
        </h1>
      </Fade>
      <div className="w-96 h-96 rounded-full bg-white flex items-center justify-center shadow-lg">
        <div
          className={`w-80 h-80 rounded-full ${moodColors[mood]} transition-all duration-300 pulse-ring relative overflow-hidden`}
        >
          <Fade>
            {gifUrl && (
              <Image
                unoptimized
                src={gifUrl}
                alt={mood}
                className={`absolute inset-0 z-0 w-full h-full object-cover rounded-full transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                width={320}
                height={320}
                onLoadingComplete={() => setIsLoading(false)}
              />
            )}
          </Fade>
        </div>
      </div>
      {mood !== "default" && (
        <Fade>
          <p className="text-white text-xl mt-4">
            {mood === "anger"
              ? "You're feeling angry. Take a deep breath and try to relax."
              : mood === "fear"
              ? "You're feeling fearful. Remember, you're not alone."
              : mood === "joy"
              ? "You're feeling joyful! Keep spreading the love."
              : mood === "love"
              ? "You're feeling loving! Spread the love to those around you."
              : mood === "sadness"
              ? "You're feeling sad. Remember, you're not alone."
              : mood === "surprise"
              ? "You're feeling surprised! Take a moment to reflect on the moment."
              : ""}
          </p>
        </Fade>
      )}
      <div className="mt-10 w-full px-4 sm:px-0 sm:w-auto">
        <button
          className={`w-full sm:w-auto mb-2 sm:mb-0 sm:mx-2 px-4 py-2 rounded-lg text-black font-semibold bg-white hover:opacity-80 transition-opacity duration-300`}
          onClick={() =>
            setMood(moods[Math.floor(Math.random() * moods.length)])
          }
        >
          {mood === "default" ? `Guess` : `Guess again`}
        </button>
      </div>
      <Image
        src="/giphy-logo-2.png"
        alt="Giphy Logo"
        width={50}
        height={20}
        className="mt-10"
      />
    </div>
  );
};
export default MoodRing;