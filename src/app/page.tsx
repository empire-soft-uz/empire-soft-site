"use client";
import Header from "@/components/header/Header";
import ContactScreen from "@/pages/contact/ContactScreen";
import HomeScreen from "@/pages/home/HomeScreen";
import ProjectScreen from "@/pages/projects/ProjectScreen";
import ReviewsScreen from "@/pages/reviews/ReviewsScreen";
import ServicesScreen from "@/pages/services/ServicesScreen";
import StepsScreen from "@/pages/steps/StepsScreen";
import "aos/dist/aos.css";
// @ts-ignore
// import { FullPage, Slide } from "react-full-page";
// @ts-ignore
import AOS from "aos";
import React, { useEffect, useState } from "react";

export default function Home() {
  // const [state, setState] = useState({ currentPage: 0 });

  // const handlePageChange = (number: number) => {
  //   setState({ currentPage: number });
  // };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  // return (
  //   <React.Fragment>
  //     <ReactPageScroller
  //       pageOnChange={handlePageChange}
  //       // onBeforePageScroll={this.handleBeforePageChange}
  //       customPageNumber={state.currentPage}
  //     >
  //       {/* <Header /> */}
  //       <HomeScreen />
  //       <ProjectScreen />
  //       <StepsScreen />
  //       <ServicesScreen />
  //       <ReviewsScreen />
  //       <SectionContainer height={100}>
  //         <ContactScreen />
  //       </SectionContainer>
  //     </ReactPageScroller>
  //     {/* <Pager className="pagination-additional-class" bsSize="large">
  //       {pagesNumbers}
  //     </Pager> */}
  //   </React.Fragment>
  // );

  // return (
  //   <FullPage>
  //     <Slide>
  //       <HomeScreen />
  //     </Slide>
  //     <Slide>
  //       <ProjectScreen />
  //     </Slide>
  //     <Slide>
  //       <StepsScreen />
  //     </Slide>
  //     <Slide>
  //       <ServicesScreen />
  //     </Slide>
  //     <Slide>
  //       <ReviewsScreen />
  //     </Slide>
  //     <Slide>
  //       <ContactScreen />
  //     </Slide>
  //   </FullPage>
  // );

  return (
    <main style={{ overflow: "hidden" }}>
      <Header />
      <HomeScreen />
      <ProjectScreen />
      <StepsScreen />
      <ServicesScreen />
      <ReviewsScreen />
      <ContactScreen />
    </main>
  );
}
