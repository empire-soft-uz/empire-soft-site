"use client";
import Header from "@/components/header/Header";
import ContactScreen from "@/pages/contact/ContactScreen";
import HomeScreen from "@/pages/home/HomeScreen";
import ProjectScreen from "@/pages/projects/ProjectScreen";
import ReviewsScreen from "@/pages/reviews/ReviewsScreen";
import StepsScreen from "@/pages/steps/StepsScreen";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeScreen />
      <ProjectScreen />
      <StepsScreen />
      <ReviewsScreen />
      <ContactScreen />
    </main>
  );
}
