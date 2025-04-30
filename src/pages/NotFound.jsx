import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Page Not Found <br /> <b />Please go Back to Home for Buying products</p>
      <button
        onClick={() => navigate('/')}
        className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
