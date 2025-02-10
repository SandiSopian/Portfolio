import ProjectImg1 from "../assets/images/project1.jpg";
import ProjectImg2 from "../assets/images/project2.jpg";
import ProjectImg3 from "../assets/images/project3.jpg";
import ProjectImg4 from "../assets/images/project4.jpg";
import ProjectImg5 from "../assets/images/project5.png";
import ProfileImg from "../assets/images/profile-picture.jpg";
import ContactImg from "../assets/images/contact-vector.png";

// Social Media data
export const socialMedia = [
  {
    socialMediaName: "Email",
    socialMediaLink: "mailto:sandis17@outlook.com",
  },
  {
    socialMediaName: "linkedin",
    socialMediaLink: "https://www.linkedin.com/in/sandi-sopian-007623227/",
  },
  {
    socialMediaName: "Instagram",
    socialMediaLink: "https://www.instagram.com/sarendia__/",
  },
];

// About data
export const about = {
  profileImg: ProfileImg,

  profileDescription:
    "I graduated with a Bachelor of Computer Science from Bale Bandung University, my first work experience was as a sales clerk and double as a cashier at a mini market. I was also a printing laboratory operator working in the textile sector. Now I am a self-employer freelancer in the field of web development and content creator.",

  // profileDescription: "I'm a creative developer based in Indonesia. I have a passion for web development and love to create new things. I'm currently working as a freelance developer and looking for new opportunities.",
};

// Projects data
export const project = [
  {
    projectImage: ProjectImg1,
    projectTitle: "Jongko Daging Mang Umis",
    projectDescription: "I'm build simple Landing Pages for selling meats of cow and chickens",
    projectLink: "https://jongko-daging-mang-umis.vercel.app/",
  },
  {
    projectImage: ProjectImg2,
    projectTitle: "Venendria plants shop",
    projectDescription: "I'm slicing my own figma design for e-commerce plants shop",
    projectLink: "https://figma-to-next-js-tailwind-slicing-ver-1.vercel.app/",
  },
  {
    projectImage: ProjectImg3,
    projectTitle: "Sarang Coffee cafe",
    projectDescription: "I'm slicing my own figma design for bussiness landing page coffee shop",
    projectLink: "https://figma-to-next-js-tailwind-slicing-sarang-coffee-cafe.vercel.app/",
  },
  {
    projectImage: ProjectImg4,
    projectTitle: "Tara Trip Gallery",
    projectDescription: "I'm slicing my own figma design for light gallery traveling website",
    projectLink: "https://figma-to-next-js-tailwind-slicing-tara-trip-gallery.vercel.app/",
  },
  {
    projectImage: ProjectImg5,
    projectTitle: "Clean and Simple Portfolio",
    projectDescription: "I'm create clean and simple portfolio with static page",
    projectLink: "https://simple-portfolio-uiux.vercel.app/",
  },
];

// Contact data
export const contact = {
  email: "sandis17@outlook.com",
  phone: "+6281288825373",
  contactVector: ContactImg,
};
