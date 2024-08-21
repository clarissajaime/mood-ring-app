"use client";
import React, { useState } from "react";

type Mood = "relaxed" | "anxious" | "happy" | "excited";

const moodColors: Record<Mood, string> = {
  relaxed: "bg-blue-400",
  anxious: "bg-green-400",
  happy: "bg-yellow-300",
  excited: "bg-red-500",
};

const moods: Mood[] = ["relaxed", "anxious", "happy", "excited"];

const MoodRing: React.FC = () => {
  const [mood, setMood] = useState<Mood>("relaxed");

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${moodColors[mood]} transition-all duration-300`}
    >
      <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
        <div
          className={`w-40 h-40 rounded-full ${moodColors[mood]} transition-all duration-300`}
        ></div>
      </div>
      <h1 className="text-3xl font-bold mt-8 text-white capitalize">{mood}</h1>
      <div className="mt-8">
        {moods.map((m) => (
          <button
            key={m}
            className={`mx-2 px-4 py-2 rounded-lg text-white font-semibold ${moodColors[m]}`}
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
