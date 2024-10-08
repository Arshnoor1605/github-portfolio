import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 border-cyan-500 rounded-xl group/bento hover:shadow-xl transition-transform transform hover:scale-105 duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-cyan-200 bg-opacity-45 border justify-between flex flex-col space-y-4 ",
        className
      )}
    >
      <div className="font-sans antialiased text-semibold text-2xl items-center justify-center font-bold text-white dark:text-neutral-200 mb-1 mt-2">
        {title}
      </div>
      <div className="font-sans antialiased font-normal text-white text-xs dark:text-neutral-300">
        {description}
      </div>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
      </div>
    </div>
  );
};
