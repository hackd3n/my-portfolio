import React from "react";

import image1 from '../assets/axs-signature/signature.webp';
import image2 from '../assets/axs-signature/buttons.png';
import image3 from '../assets/axs-signature/completed.png';
import image4 from '../assets/axs-signature/software-architecture.jpg';
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
        link: { link: 'axs-signature.co', title: 'Demo' },},
{        id: 'lyre',
        title: 'Lyre',
        techStack: ["Figma", "audacity", "swift", "avfoundation", "swiftui"],
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
        link: { link: '#', title: 'github' },},
];

export default projects;
