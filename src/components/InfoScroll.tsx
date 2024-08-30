import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function InfoScroll() {
  const data = [
    {
      title: "Real-Time Chat",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
             Engage in dynamic conversations with our real-time anonymous chat feature. No registration or login is required, making it easy to connect instantly. Whether you're seeking advice or simply want to share your thoughts, enjoy seamless and spontaneous interactions.
           </p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Anonymous Messaging",
      content: (
        <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
             Navigate effortlessly through our platform with a clean and modern user interface. Designed with user experience in mind, every feature is easy to access and intuitive to use, ensuring that you can focus on the content that matters most.
           </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
          Whether you're a first-time visitor or a returning user, our interface adapts seamlessly to your needs, providing a smooth and enjoyable experience every time.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Secure Conversations",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
  With TextIt, your privacy and security are top priorities. Our secure connections feature ensures that all communication between users is encrypted and protected from unauthorized access.
</p>
<div className="mb-8">
<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
  ✅ End-to-End Encryption: Messages are encrypted from sender to receiver, ensuring only intended recipients can read them.
</div>
<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
  ✅ Secure Data Transmission: Advanced protocols protect data during transmission, preventing interception or tampering.
</div>
<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
  ✅ Privacy by Design: Our platform minimizes data exposure, ensuring your information remains confidential.
</div>
<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
  ✅ Regular Security Audits: We conduct assessments to identify and address vulnerabilities, maintaining robust protection.
</div>
<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
  ✅ User Control: Manage your data and privacy settings according to your preferences.
</div>

</div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}


// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/components/ui/timeline";

// export function InfoScroll() {
//   const data = [
//     {
//       title: "Real-Time Chat",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Engage in dynamic conversations with our real-time anonymous chat feature. No registration or login is required, making it easy to connect instantly. Whether you're seeking advice or simply want to share your thoughts, enjoy seamless and spontaneous interactions.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/templates/startup-1.webp"
//               alt="real-time chat"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/templates/startup-2.webp"
//               alt="real-time chat"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Anonymous Messaging",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Maintain your privacy while staying connected. Our anonymous messaging feature ensures that you can communicate freely without revealing your identity. Perfect for sensitive discussions or when you just want to stay incognito while sharing valuable insights.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/pro/hero-sections.png"
//               alt="anonymous messaging"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/features-section.png"
//               alt="anonymous messaging"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "User-Friendly Interface",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Navigate effortlessly through our platform with a clean and modern user interface. Designed with user experience in mind, every feature is easy to access and intuitive to use, ensuring that you can focus on the content that matters most.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/pro/bento-grids.png"
//               alt="user-friendly interface"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/cards.png"
//               alt="user-friendly interface"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Secure Conversations",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Your security is our priority. Our platform ensures that your conversations remain private and encrypted, protecting your personal information and keeping your data safe. Communicate with peace of mind, knowing your privacy is safeguarded.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/pro/security-shield.png"
//               alt="secure conversations"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/pro/encryption.png"
//               alt="secure conversations"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Timeline data={data} />
//     </div>
//   );
// }

