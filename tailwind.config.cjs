/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {},

      fontFamily: {
        sansRegular: "gilroy-regular",
        sansMedium: "gilroy-medium",
        sansBold: "gilroy-bold",
        sansThin: "gilroy-light",
      },
      textColor: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        tableHead: "rgba(var(--table-head), <alpha-value>)",
        tableBody: "rgba(var(--table-body), <alpha-value>)",
        header: "rgba(var(--header), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
      },
      backgroundColor: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        tableHead: "rgba(var(--table-head), <alpha-value>)",
        tableBody: "rgba(var(--table-body), <alpha-value>)",
        tableHover: "rgba(var(--table-hover), <alpha-value>)",
        header: "rgba(var(--header), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
      },
      borderColor: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        tableHead: "rgba(var(--table-head), <alpha-value>)",
        tableBody: "rgba(var(--table-body), <alpha-value>)",
        header: "rgba(var(--header), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
      },
      stroke: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        tableHead: "rgba(var(--table-head), <alpha-value>)",
        tableBody: "rgba(var(--table-body), <alpha-value>)",
        header: "rgba(var(--header), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
      },

      ring: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        line: "rgba(var(--line), <alpha-value>)",
        tableHead: "rgba(var(--table-head), <alpha-value>)",
        tableBody: "rgba(var(--table-body), <alpha-value>)",
        header: "rgba(var(--header), <alpha-value>)",
        body: "rgba(var(--body), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
