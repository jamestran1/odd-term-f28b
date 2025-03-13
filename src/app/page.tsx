import Image from "next/image";

export default async function Home() {
  const cacheConfig: any = {
    cf: {
      // Always cache this fetch regardless of content type
      // for a max of 5 seconds before revalidating the resource
      cacheTtl: 5,
      cacheEverything: true,
      //Enterprise only feature, see Cache API for other plans
      cacheKey: "my-cache-key",
    },
  }
  const response = await fetch("data:image/jpeg;base64,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", 
    cacheConfig)
  console.log("response headers", response.headers)
  if (response.headers.get("cf-cache-status") === "HIT") {
    console.log("Response was cached by Cloudflare")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        Quang
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
