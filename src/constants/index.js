export const projects = [
  {
    id: "0",
    title: "Warasin - Mental Health App",
    image: "${import.meta.env.BASE_URL}assets/project-1.png",
    description:
      "Warasin is a web and mobile based mental health application that makes it easy for users to consult with psychologists, access mental health education, and utilize technology for emotional well-being. The app features KONSULIN for direct consultations, TANYAIN as an AI chatbot, AJARIN for educational content, DOPAMIN for daily motivation, TERAPIIN with therapeutic music, and EMOSIN for emotion detection based on user data. With Warasin, accessing mental health services becomes more convenient, helping to reduce depression and self-diagnosis among teenagers and young adults.",
    totalMember: "2",
    as: "Backend Developer",
    year: "2025",
    stack: "Flutter and Golang",
    urlCode: "https://github.com/Amierza/warasin-mobile",
    urlAPIProd: "https://warasin-mobile-production.up.railway.app/api/v1/",
  },
  {
    id: "1",
    title: "Hadirin - E-Presence App",
    image: "${import.meta.env.BASE_URL}assets/project-2.png",
    description:
      "Hadirin is an E-Presence application built with Flutter and Golang, designed to streamline employee attendance tracking using location based tracking. The app ensures that employees can only clock in if they are within the designated office area, based on latitude and longitude coordinates. Hadirin supports two types of attendance: check-in and check-out, while also keeping a record of employees' attendance history. Additionally, there are specific time rules in place. If an employee clocks in or out beyond the designated hours, certain risks or consequences may apply. With these features, Hadirin enhances transparency and discipline in employee attendance management.",
    totalMember: "4",
    as: "Backend Developer",
    year: "2025",
    stack: "Flutter and Golang",
    urlCode: "https://github.com/Amierza/hadirin",
    urlAPIProd: "https://hadirin-production.up.railway.app/api/v1/",
  },
  {
    id: "2",
    title: "Faculty of Economics, Darul Ulum University Lamongan",
    image: "${import.meta.env.BASE_URL}assets/project-3.png",
    description:
      "The Landing Page for the Faculty of Economics - Darul Ulum University Lamongan is a website development project that includes both a landing page and an admin dashboard for efficient content management. Built using React for the frontend and Laravel for the backend, this project also leverages Laravel Filament to streamline admin dashboard management. The landing page serves as the main information portal, providing news and important announcements for students and academic staff. To support content management, an admin dashboard is available, allowing administrators to perform CRUD (Create, Read, Update, Delete) operations on news articles, as well as upload and manage essential documents such as SOPs and other necessary files. With this system, content management becomes more structured and efficient.",
    totalMember: "1",
    as: "Full-Stack Developer",
    year: "2024",
    stack: "Laravel and React",
    urlProd: "http://fe.unisda.ac.id/",
  },
  {
    id: "3",
    title: "E-wallet API",
    image: "${import.meta.env.BASE_URL}assets/project-4.png",
    description:
      "The E-Wallet API is a backend system built with Golang and the Gin framework, designed to handle digital transactions securely and efficiently. This API supports user management features, including registration (/api/user/register) and login with JWT authentication (/api/user/login). For financial transactions, it provides balance top-ups (/api/user/topup), payments (/api/user/pay), and peer-to-peer transfers (/api/user/transfer), all requiring JWT authentication. Additionally, the API allows administrators or authorized users to access the user list (/api/user/get-all-user) and transaction history (/api/user/transactions). Users can also update their profiles (/api/user/update-profile). With these features, the E-Wallet API ensures that transactions are fast, secure, and transparent, providing a seamless experience for managing digital finances.",
    totalMember: "1",
    as: "Backend Developer",
    year: "2024",
    stack: "Golang",
    urlCode: "https://github.com/Amierza/ewallet---go-clean-architecture",
    urlAPIProd:
      "https://ewallet-go-clean-architecture-production.up.railway.app/api/user",
  },
  {
    id: "4",
    title: "Shamo - Shoe Shop Mobile App",
    image: "${import.meta.env.BASE_URL}assets/project-5.png",
    description:
      "Shamo is a shoe shop mobile application developed using Flutter and Laravel. Offers easy access to various products and services offered through the app. Provides an easily accessible communication platform between users, allowing them to interact and share information. And equipped with a display with data on the user who made the payment.",
    totalMember: "1",
    as: "Full-Stack Developer",
    year: "2023",
    stack: "Flutter and Laravel",
    urlCode: "https://github.com/AhmadMirza2023/Shamo-App",
  },
  {
    id: "5",
    title: "Kosan - Search Boarding House Mobile App",
    image: "${import.meta.env.BASE_URL}assets/project-6.png",
    description:
      "Kosan is an application to provide recommendations for boarding houses or places to stay with an elegant appearance in representing the facilities of each boarding house, pictures of the boarding house, and other descriptions. There is a maps feature to track location and there is a special page for users to contact the boarding house owner.",
    totalMember: "1",
    as: "Front-End Developer",
    year: "2023",
    stack: "Flutter",
    urlCode: "https://github.com/AhmadMirza2023/kosAppWithFlutter",
  },
];
