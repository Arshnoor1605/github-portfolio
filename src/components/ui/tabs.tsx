// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// type Tab = {
//   title: string;
//   value: string;
//   content?: string | React.ReactNode | any;
// };

// export const Tabs = ({
//   tabs: propTabs,
//   containerClassName,
//   activeTabClassName,
//   tabClassName,
//   contentClassName,
// }: {
//   tabs: Tab[];
//   containerClassName?: string;
//   activeTabClassName?: string;
//   tabClassName?: string;
//   contentClassName?: string;
// }) => {
//   const [active, setActive] = useState<Tab>(propTabs[0]);
//   const [tabs, setTabs] = useState<Tab[]>(propTabs);

//   const moveSelectedTabToTop = (idx: number) => {
//     const newTabs = [...propTabs];
//     const selectedTab = newTabs.splice(idx, 1);
//     newTabs.unshift(selectedTab[0]);
//     setTabs(newTabs);
//     setActive(newTabs[0]);
//   };

//   const [hovering, setHovering] = useState(false);

//   return (
//     <>
//       <div
//         className={cn(
//           "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
//           containerClassName
//         )}
//       >
//         {propTabs.map((tab, idx) => (
//           <button
//             key={tab.title}
//             onClick={() => {
//               moveSelectedTabToTop(idx);
//             }}
//             onMouseEnter={() => setHovering(true)}
//             onMouseLeave={() => setHovering(false)}
//             className={cn("relative px-4 py-2 rounded-full", tabClassName)}
//             style={{
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {active.value === tab.value && (
//               <motion.div
//                 layoutId="clickedbutton"
//                 transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
//                 className={cn(
//                   "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
//                   activeTabClassName
//                 )}
//               />
//             )}

//             <span className="relative block text-black dark:text-white">
//               {tab.title}
//             </span>
//           </button>
//         ))}
//       </div>
//       <FadeInDiv
//         tabs={tabs}
//         active={active}
//         key={active.value}
//         hovering={hovering}
//         className={cn("mt-32", contentClassName)}
//       />
//     </>
//   );
// };

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     <div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-full h-full absolute top-0 left-0", className)}
//         >
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const handleTabClick = (tab: Tab) => {
    setActive(tab);
  };

  return (
    <div className="relative">
      {/* Tab Buttons */}
      <div
        className={cn(
          "flex flex-row items-center justify-start overflow-auto sm:overflow-visible",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => handleTabClick(tab)}
            className={cn(
              "relative px-4 py-2 rounded-full transition-transform duration-300",
              tabClassName,
              { "text-blue-500": active.value === tab.value } // Optional styling for active tab
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className={cn("relative w-full h-full mt-4", contentClassName)}>
        {propTabs.map((tab) => (
          <motion.div
            key={tab.value}
            className={cn(
              "absolute top-0 left-0 w-full h-full",
              { hidden: tab.value !== active.value } // Hide inactive tabs
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: tab.value === active.value ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
