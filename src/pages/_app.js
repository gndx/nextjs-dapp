import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
