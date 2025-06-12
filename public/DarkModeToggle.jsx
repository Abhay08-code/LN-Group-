// import { useEffect, useState } from 'react';

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   return (
//     <button
//       className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md"
//       onClick={() => setDarkMode(!darkMode)}
//     >
//       {darkMode ? '🌙' : '☀️'}
//     </button>
//   );
// };

// export default DarkModeToggle;

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-xl bg-gray-200 dark:bg-gray-700 dark:text-white transition-all"
    >
      🌓
    </button>
  );
};

export default DarkModeToggle;

