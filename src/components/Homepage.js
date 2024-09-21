"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <div className="homescreen h-screen">
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
        <Navbar />
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center mt-10 px-5 lg:mt-20">
            <h1 className="font-Millik text-4xl lg:text-6xl text-primary text-center">
            Discover your Future{" "}
            </h1>
            <h1 className="font-Millik text-4xl lg:text-6xl text-secondary text-center">
            Wealth Potential
            </h1>
            <p className="my-3 text-center">
            Find out if you're on the path to riches with just a few simple questions. <br></br>Take the quiz now and see where your financial future is headed!
            </p>
            <div className="flex mt-4 gap-3">
              <Link href="/generate">
                <Button className="bg-primary border-0 hover:bg-primary rounded-full py-7 px-10 shadow-none">
                Take the Richometer Quiz
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Homepage;
