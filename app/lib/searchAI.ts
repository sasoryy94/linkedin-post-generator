"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function searchAI(input: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: input || "give me an error msg saying there is no input",
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const suggestion = completion.choices[0].message.content;
  if (suggestion === undefined) throw new Error("No suggestion found");
  return suggestion;
}
