import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#71C9FF",   // Corrected: Added comma here
        foreground: "var(--foreground)", // Now this is properly separated
      },
      backgroundImage: {
        pattern: "url('../../public/assets/gradient.svg')",
        patternd : "url('../../public/assets/background.png')",
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'button': '-5px -8px 4px 0px rgba(0,0,0,0.10) inset, 5px 8px 4px 0px rgba(255,255,255,0.10) inset', // Black and white shadow combined
    },
  },

  plugins: [],
}};

export default config;
