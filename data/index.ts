export const currentUser = {
    name: 'Zahid Khan',
    resume: '/zahidcv.pdf',
    email: 'zahidkhan007860@gmail.com',
    gitLink: 'https://github.com/zahidkhan262',
    xLink: 'https://twitter.com/zahidkhan262',
    instaLink: 'https://instagram.in/zahidkhan262',
    about: "I am a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!"

}

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Skill", link: "#skills" },
    { name: "Project", link: "#project" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: currentUser?.gitLink
    },
    {
        id: 2,
        img: "/twit.svg",
        link: currentUser?.xLink
    },
    {
        id: 3,
        img: "/insta.svg",
        link: currentUser?.instaLink
    },
];

export const skillData = [
    'React JS',
    'Next JS',
    'Node JS',
    'Express JS',
    'MUI',
    'Bootsrtap',
    'Formik',
    'YUP',
    'JOI',
    'GIT',
]

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/ui.earth.com",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
        link: "/ui.yoom.com",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
];


export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];