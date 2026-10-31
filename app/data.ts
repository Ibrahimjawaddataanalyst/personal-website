// ✏️ EDIT THIS FILE: all the text on your website lives here.

export const profile = {
  name: "Ibraahim Jawaad",
  initials: "IJ",
  role: "Data Science Student",
  university: "DHA Suffa University",
  location: "Karachi, Pakistan",
  year: 2026, // footer year, update it when the year changes
  tagline:
    "I turn raw data into insights and models that answer real questions.",
  about: [
    "I'm a Data Science student at DHA Suffa University in Karachi, interested in machine learning, data analysis and building useful things with code.",
    "I enjoy taking a messy dataset, exploring it, and turning it into something people can understand and act on. Right now I'm focused on strengthening my Python, statistics and ML foundations through projects.",
  ],
  email: "your.email@example.com", // TODO: add your email
  github: "https://github.com/Ibrahimjawaddataanalyst", // TODO: add your GitHub
  linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-ahmed-999752293/", // TODO: add your LinkedIn
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript"] },
  {
    group: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "Statistics", "EDA"],
  },
  { group: "Visualization", items: ["Matplotlib", "Seaborn", "Power BI"] },
  { group: "Tools", items: ["Git & GitHub", "Jupyter", "VS Code", "Next.js"] },
];

export const projects: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}[] = [
  {
    title: "Loan Eligibility Checker",
    description:
      "A Next.js + TypeScript app that scores loan applicants out of 100 and explains the decision factor by factor.",
    tags: ["Next.js", "TypeScript", "React"],
    link: "https://github.com/Ibrahimjawaddataanalyst/tracker", // TODO: add GitHub / live link
  },
  {
    title: "A Next.js + TypeScript app that extracts data from csv and shows the data in tabular form with missing values and other information.",
    description:
      "A Next.js ",
    tags: ["Next.js", "TypeScript", "React"],
    link: "https://github.com/Ibrahimjawaddataanalyst/csv-extractor",
  },
  {
  title: "Linear Regression Playground",
  description:
    "Interactive app that fits a best-fit line to scatter data in real time, built from scratch with R² and MSE metrics.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  link: "https://github.com/your-username/linear-regression-playground", // TODO: add your link
},
];

export const education: {
  degree: string;
  school: string;
  note: string;
}[] = [
  {
    degree: "BS in Data Science",
    school: "DHA Suffa University, Karachi",
    note: "Currently enrolled", // TODO: add year / CGPA if you want
  },
];