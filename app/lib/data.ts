export const postData = {
  author: `urn:li:person:${process.env.LINKEDIN_URN}`,
  lifecycleState: "PUBLISHED",
  specificContent: {
    "com.linkedin.ugc.ShareContent": {
      shareCommentary: {
        text: "Hello World! This post is from Nextjs",
      },
      shareMediaCategory: "NONE",
    },
  },
  visibility: {
    "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
  },
};
