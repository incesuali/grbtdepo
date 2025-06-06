import { useState } from 'react';
import axios from 'axios';

interface AuthFormProps {
  type: 'login' | 'register';
  onSuccess: (token: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = type === 'login' ? '/auth/login' : '/auth/register';
      const data = type === 'login'
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await axios.post(`${import.meta.env.VITE_API_URL}${endpoint}`, data);
      const { token } = response.data;
      
      localStorage.setItem('token', token);
      onSuccess(token);
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === 'login' ? 'Login' : 'Register'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'register' && (
          <>
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </>
        )}
        
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
        >
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm; 