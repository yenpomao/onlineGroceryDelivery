/* Navbar Component */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <section className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link href="/">
          <Image
            src="/icons/logo.png"
            width={220}
            height={220}
            alt="Foodie Logo from myfreelogomaker"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <div className="flex space-x-12">
          <Link href="/drinks" className="navbar-categories" style={{ textDecoration: "none" }}>
            <Image src="/icons/drinks.png" width={32} height={32} alt="Drinks" />
            Drinks
          </Link>
          <Link href="/breads" className="navbar-categories" style={{ textDecoration: "none" }}>
            <Image src="/icons/bread.png" width={32} height={32} alt="Bread" />
            Bread
          </Link>
          <Link href="/vegetablesAndFruits" className="navbar-categories" style={{ textDecoration: "none" }}>
            <Image
              src="/icons/vegetables_and_fruits.png"
              width={32}
              height={32}
              alt="Vegetables and Fruits"
            />
            Vegetables & Fruit
          </Link>
          <Link href="/meats" className="navbar-categories" style={{ textDecoration: "none" }}>
            <Image src="/icons/meat.png" width={32} height={32} alt="Meats" />
            Meats
          </Link>
        </div>
      </div>

      {/* Login Button */}
      <div className="flex items-center">
        <Link
          className={`${buttonVariants({ variant: "default" })} px-4  ml-auto `}
          href="/sign-in"
          style={{ textDecoration: "none" }}
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
