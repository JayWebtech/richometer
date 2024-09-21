"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between py-4">
      <Link href="/">
        <div className="flex items-center">
          <img src="/img/logo.png" className="w-[4em]" />
          <span className="font-Millik text-3xl text-primary">richometer</span>
        </div>
      </Link>
      <div className="hidden gap-3 lg:flex">
        <Link href="/generate">
          <Button className="bg-primary border-0 hover:bg-primary rounded-lg py-5 shadow-none">
            Take Test
          </Button>
        </Link>
        {/* <Button className="bg-secondary border-0 hover:bg-secondary rounded-lg py-5 shadow-none">
          Explore Quotes
        </Button> */}
      </div>
    </div>
  );
}

export default Navbar;
