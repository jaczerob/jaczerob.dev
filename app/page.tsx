export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <h1 className="relative text-6xl font-semibold mb-3">
                Jacob Gravely
            </h1>

            <p className={`m-0 max-w-[100ch] text-xl`}>
                Welcome to my main page. Please feel free to explore my portfolio and other projects below.
            </p>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://portfolio.jaczerob.dev"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Portfolio{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        My portfolio including projects, work history, and education.
                    </p>
                </a>

                <a
                    href="https://eras.jaczerob.dev"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Eras{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
                        A web application that shows current information and statistics about Toontown Rewritten.
                    </p>
                </a>
            </div>
        </main>
    );
}
