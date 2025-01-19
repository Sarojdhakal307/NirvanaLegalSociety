"use client"
import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4  h-full"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          Nepal struggles with various illegal and harmful activities that
          damage its society. Problems like corruption, human trafficking, drug
          smuggling, and violence against women are common. One heartbreaking
          example is the case of Nirmala Panta, a 13-year-old girl from
          Kanchanpur who was raped and murdered in 2018. Despite public outrage
          and protests, the authorities failed to find and punish those
          responsible, showing weaknesses in Nepal&apos;s legal and investigative
          systems. Such incidents lower people&apos;s trust in the government and
          create fear in society. To solve these problems, Nepal needs stronger
          laws, better accountability, and joint efforts to ensure justice and
          safety
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
