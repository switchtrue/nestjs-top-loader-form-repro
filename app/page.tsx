import Link from "next/link";

export default async function Home() {
  // Deliberately make the page slow so we can see the top loader
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-96">
        <h1 className="text-2xl font-bold">First Page</h1>
        <h2 className="text-xl font-bold">Link Navigation</h2>
        <p>
          Below is a simple link that will trigger the top-loader. The page has
          a 2 second delay to give ensure the top-loader is visible.
        </p>
        <Link href="/second-page" className="underline">
          Go to Second Page
        </Link>
        <h2 className="text-xl font-bold">Form Navigation</h2>
        <p>
          The input and button below are wrapped in a form with{" "}
          <code>action="/second-page" method="get"</code> and the button is{" "}
          <code>type="submit"</code>
        </p>
        <p>On submit of the form the top-loader is not displayed.</p>
        <form action="/second-page" method="get">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search term..."
            className="border border-gray-300 rounded-md p-2 text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md ml-2"
          >
            Search
          </button>
        </form>
      </main>
    </div>
  );
}
