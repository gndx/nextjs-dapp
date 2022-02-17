import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GNFT V3</title>
      </Head>
      <div className="bg-gray-100 mt-64">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r to-red-600 from-blue-500">Ready to dive in?</span>
            <span className="block text-gray-500 text-lg">Start minting your nft</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Conectar Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
