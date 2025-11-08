import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Ssamaya Spa Bali",
      src: "/images/ssamayaspa.png",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760005388/elementor_zrv1ad.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760005242/wordpress_qod9zg.png",
      ],
      description:
        "Ssamaya Day Spa is a health and beauty spa, located in Berawa Canggu, Bali. Ssamaya is a premium offering from Marissa Spa which has been active in the world of spas in Bali for 7 years. ssamayaspabali.com is a company profile website designed to showcase the spa's services and help more customers discover relaxation, beauty, and wellness.",
    },
    {
      title: "Kicks",
      src: "/images/kicks.png",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png",
      ],
      description:
        "Kicks is a website that is developed as a part of my laravel learning journey, this project demonstrate my ability to build a professional e-commerce website using modern frameworks.",
    },
    {
      title: "Tour",
      src: "/images/tour.png",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png",
      ],
      description:
        "Tour is a website that is developed as a part of my laravel learning journey, this project demonstrate my ability to build a professional tour and travel website using modern frameworks.",
    },
    {
      title: "D ' Store",
      src: "/images/dstore.png",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png",
      ],
      description:
        "D'Store is a website that is developed as a part of my React learning journey, this project demonstrate my ability to build a professional e-commerce website using modern frameworks.",
    },
    {
      title: "D ' Images",
      src: "/images/dimages.png",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png",
      ],
      description:
        "D'Store is a website that is developed as a part of my React learning journey, this project demonstrate my ability to fetch public api. On this website, user can search and download images from the official pixabay website.",
    },
    {
      title: "We-gram",
      src: "/images/wegram.png",
      description:
        "we-gram is a website that is developed as a part of my mern stack learning journey, this project demonstrate my ability to build front-end and back-end using the mern stack. On this website, user can search and download images from the official pixabay website.",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760708798/MongoDB_Logo___01_-_PNG_Logo_Vector_Brand_Downloads__SVG__EPS_-removebg-preview_ljjovo.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709051/Express_JS_Icon_Gallery_for_Developers_and_Designers-removebg-preview_ghhbps.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760709108/Node_Js_Developer_In_Official_Color_Sticker-removebg-preview_vih5ne.png",
      ],
    },
    {
      title: "Together",
      src: "/images/together.png",
      description:
        "Together is a website that is developed in order to provide a attendence system for my campuss program event. This website allows user to book a ticket and send the payment reciept after that booking. User also can download their photos that is uploaded by the admin through the dashboard page, Register, and Login. I also implement an email verification function after user register an account. Not only users page, i also created an admin dashboard page which allows the admin to see how much user have registered, booked a ticket, and paid. Admin also can edit users ticket data in case that the user change their decision before the event and admin can also upload event photos where user can download it on the user s page.",
      stacks: [
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/tailwind_ikgyu6.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011729/laravel_rquhm7.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760012748/react_mh0evw.png",
        "https://res.cloudinary.com/dpghhbxwz/image/upload/v1760011730/mysql_axa9ze.png",
      ],
    },
  ];

  return <FocusCards cards={cards} />;
}
