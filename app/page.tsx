"use client";
import { postLinkedin } from "./lib/linkedinEndpoint";
import { useState } from "react";
import searchAI from "./lib/searchAI";

export default function Home() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    const text = await searchAI(input);
    setSuggestion([...suggestion, text || ""]);

    setLoading(false);
    setInput("");
  };

  // postLinkedin(suggestion[0]]);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-b  old text-center pb-2">
          Linkedin Post Generator
        </h2>
        {/* Input field for marketing copy */}
        <div className="flex flex-col gap-4 justify-center w-1/3 mx-auto">
          <div className="relative w-full">
            <textarea
              rows={3}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border-2 border-gray-300 bg-white p-4 rounded-lg text-sm focus:outline-none resize-none"
              placeholder="Enter your topic here"
            />
            {/* Character limit in bottom right of textarea */}
            <div
              className={`absolute ${
                input.length > 30 ? "text-red-500" : "text-gray-400"
              } bottom-2 right-2 text-xs`}
            >
              <span>{input.length}</span>/30
            </div>
          </div>
          <button
            type="button"
            onClick={submit}
            className="bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-4">
                <p>Loading...</p>
              </div>
            ) : (
              "Generate"
            )}
          </button>

          {/* Output field for marketing copy */}
          {suggestion.length > 0 && (
            <div>
              {suggestion.map((post, index) => (
                // Each suggestion is mapped to a card
                <div
                  className="relative w-full rounded-md bg-gray-100 p-4 mb-4"
                  key={index}
                >
                  <p className="text-sm text-gray-700">{post}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
