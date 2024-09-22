"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomImputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}
const LocalSearchBar = ({
  //   route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomImputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses} ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      <Image
        src={imgSrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchBar;
