import React from "react";
import clsx from "clsx";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg overflow-hidden shadow-md border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
}) => {
  return <div className={clsx("p-4", className)}>{children}</div>;
};
