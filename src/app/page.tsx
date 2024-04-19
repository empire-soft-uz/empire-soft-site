"use client";
import HomeScreen from "@/pages/home/HomeScreen";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={scrollRef}>
      <HomeScreen />
    </main>
  );
}
