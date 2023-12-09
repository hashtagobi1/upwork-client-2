"use server";

import Hero from "@/components/Hero/Hero";
import ThemeToggle from "@/components/Shared/ThemeToggle";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <ThemeToggle />
    </main>
  );
}
