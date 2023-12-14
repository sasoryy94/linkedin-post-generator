import axios from "axios";
import { postData } from "./data";

export const postLinkedin = async (generatedText: string) => {
  // Dynamically change the text property
  postData.specificContent[
    "com.linkedin.ugc.ShareContent"
  ].shareCommentary.text = generatedText;

  try {
    await axios.post(`${process.env.LINKEDIN_BASE_URL}/ugcPosts`, postData, {
      headers: {
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
        Authorization: `Bearer ${process.env.LINKEDIN_TOKEN}`,
      },
    });
  } catch (error) {
    console.error(
      "Error posting:",
      error.response ? error.response.data : error.message
    );
  }
};
