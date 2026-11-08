import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E293B",
        blue: "#2563EB",
        teal: "#0D9488",
        yellow: "#FACC15",
        cloud: "#EFF6FF",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(37, 99, 235, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
