import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSuccess = (token: string) => {
    // Token is already saved in localStorage by AuthForm
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 mr-2 rounded ${
              isLogin
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 rounded ${
              !isLogin
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <AuthForm
          type={isLogin ? 'login' : 'register'}
          onSuccess={handleAuthSuccess}
        />
      </div>
    </div>
  );
};

export default Auth; 