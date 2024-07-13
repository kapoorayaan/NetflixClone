export const background_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg ";
export const userAvatar =
  "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";
export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMBD_KEY,
  },
};
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SupportedLangs = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OpenAiKey = process.env.REACT_APP_OpenAiKey;
