export default function Button({ children }) {
  return (
    <button className="px-6 py-3 bg-green text-white font-semibold rounded-md shadow-sm hover:shadow-md transition-all duration-normal ease-default hover:scale-95">
      {children}
    </button>
  );
}
