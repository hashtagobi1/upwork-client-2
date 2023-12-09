"use server";

import ThemeToggle from "@/components/Shared/ThemeToggle";

export default async function Home() {
  return (
    <main className="">
      <div>
        <ThemeToggle />
      </div>
    </main>
  );
}
