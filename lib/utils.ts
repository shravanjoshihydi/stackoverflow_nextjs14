import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} sec${seconds > 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (days < 7) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (weeks < 4) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (months < 12) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B"; // Billion
  } else if (num >= 1e7) {
    return (num / 1e7).toFixed(2) + "Cr"; // Crore
  } else if (num >= 1e5) {
    return (num / 1e5).toFixed(2) + "L"; // Lakh
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K"; // Thousand
  } else {
    return num.toString(); // Less than 1000, return as is
  }
};
