import React from "react";

import image1 from '../assets/axs-signature/signature.webp';
import image2 from '../assets/axs-signature/buttons.png';
import image3 from '../assets/axs-signature/completed.png';
import image4 from '../assets/axs-signature/software-architecture.jpg';


import image5 from '../assets/lyre/LYRE.png';
import image6 from '../assets/lyre/playlist.PNG';
import image7 from '../assets/lyre/playerview.PNG';
import image8 from '../assets/lyre/stem-view.PNG';

import image9 from '../assets/learner-portal/home-page.png';
import image10 from '../assets/learner-portal/original.png';
import image11 from '../assets/learner-portal/ilr-entry.png';
import image12 from '../assets/learner-portal/sessions.png';
import image13 from '../assets/learner-portal/sign-prof.png';


const projects = [
{        id: 'axs-signature',
        title: 'AxS - Signature',
        techStack: ["Adobe XD", "HTML", "tailwind", "python", "javascript"],
        images: [image1, image2, image3, image4],
        text: [
            "The purpose of AXS Signature is to provide an electronic signature software that is easy to use and accessible, particularly for individuals with visual impairments. It aims to improve the accessibility of signing documents online and is available as an open-source tool for businesses to utilize.", 
            "Accessibility for visually impaired users: AXS Signature is designed to be accessible to individuals with visual impairments, addressing the challenges faced by such users when signing electronic signatures using a mouse or touch screen.",
            "Screen reader-friendly interface: The software is designed to be compatible with screen readers, allowing visually impaired users to interact with the interface effectively.",
            "Clear and simple structure: AXS Signature prioritizes a clear and straightforward interface design, ensuring that users can easily understand and navigate the software.",
            "Open-source integration: The product is open source, making it easy for businesses to integrate AXS Signature into their websites or applications.",
            "Uniquely identifiable signature: AXS Signature generates a uniquely identifiable signature for each user, providing authenticity and proving that the signature came from the intended user.",
            "Confidence for recipients: Recipients of the signed documents can have complete confidence that the signature they receive originated from the intended user, thus ensuring the authenticity, intent, and consent of the signer.",
            "The software architecture of AXS Signature involves using email verification to verify the signee, providing the recipient with the signature, along with a timestamp and a uniquely identifiable hash code for comparison.",
            "Additionally, AXS Signature emphasizes accessible design, including considerations such as compliant button elements based on WCAG AAA accessibility standards and the use of serif fonts that are generally more suitable for users with visual impairments. The software aims to be inclusive and user-friendly, with future versions potentially offering customization options for styling.",
            "You can try out a demo of AXS Signature on the website mentioned, and it was developed in collaboration with Diversity & Ability, an organization dedicated to improving accessibility."
        ],
        link: { link: 'axs-signature.co', title: 'Demo' },
    },
{        id: 'lyre',
        title: 'Lyre',
        techStack: ["Figma", "audacity", "swift", "avfoundation", "swiftui"],
        images: [image5, image6, image7, image8],
        text: [
            "Lyre provides an interactive and immersive audio experience with the ability to play multiple audio files simultaneously and modify the volume of each individual multitrack, thereby enabling them to customize their audio mix. This application provides an elevated control and flexibility to everyday music listeners to adjust their audio preferences according to their mood and environment in real-time, with ease.", 
            
        ],
        link: { link: '#', title: 'github' },
    },
{        id: 'learner-portal',
        title: 'Learner Portal',
        techStack: ["Adobe XD", "html", "css", "tailwind", "react"],
        images: [image9, image10, image11, image12, image13],
        text: [
            "Diversity and Ability is a UK-based organisation that offers mentoring and technical support to students with disabilities. As part of their services, they provide a Learners Portal, which allows students to sign completed sessions, view appointments, and access reviews from their mentors or trainers.", 
            "My role in this project was to review and improve the current version of the Learners Portal, focusing on design and communication enhancements. The goal was to create a more cohesive design with the main website, improve the navigation structure, and provide clear explanations of terminology, ensuring that users could fully benefit from the available features.",
            "After conducting interviews with members of the support team, several issues were identified. The existing version of the Learners Portal had simplistic styling and lacked a proper structure for navigating between pages. Additionally, students were unaware that session reviews were left by their mentors or trainers for their reference. Addressing these challenges required a thoughtful approach to redesigning the portal.",
            "To address the issues and improve the Learners Portal, I created a screen design prototype using Adobe XD. The prototype was developed for desktop, mobile, and tablet devices, ensuring a seamless user experience across various platforms. The design incorporated a more cohesive visual style with the main website, employing styling elements to enhance the portal's overall aesthetics.",
            "Furthermore, the navigation bar was restructured to provide intuitive and easy access to different sections of the portal. To overcome the confusion regarding terminology, clear explanations were added, helping students understand the purpose and functionality of each feature.",
            "The final implementation was carried out using HTML and CSS, with the Tailwind framework utilized for streamlined development. Custom fonts were integrated to add a unique touch to the design, contributing to a visually appealing and user-friendly interface."
            
        ],
        link: { link: '#', title: 'github' },
    },
];

export default projects;
