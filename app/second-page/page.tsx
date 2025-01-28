import Link from "next/link";

export default async function Home() {
  // Deliberately make the page slow so we can see the top loader
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-96">
        <h1 className="text-2xl font-bold">Second Page</h1>
        <h2 className="text-xl font-bold">Link Navigation</h2>
        <p>
          Below is a simple link that will trigger the top-loader. The page has
          a 2 second delay to give ensure the top-loader is visible.
        </p>
        <Link href="/" className="underline">
          Go back to First Page
        </Link>
      </main>
    </div>
  );
}
