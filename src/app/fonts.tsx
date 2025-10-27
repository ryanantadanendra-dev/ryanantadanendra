import localFont from "next/font/local";

export const raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway//static/Raleway-Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Raleway//static/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
});
