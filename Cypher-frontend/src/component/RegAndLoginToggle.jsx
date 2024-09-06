// const SigninAndupToggle = () => {
//   return (
//     <div className="w-md h-auto p-8 fixed right-96 z-50 shadow-md">
//       <Link to="/login">
//         <button className="bg-black text-white">Sign In</button>
//       </Link>
//       <br />
//       <Link to="/register">
//         <button className="bg-black text-white">Sign Up</button>
//       </Link>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

const SigninAndupToggle = () => {
  return (
    <div className="fixed top-20 right-4 md:right-12 z-50 p-4 md:p-8 shadow-lg bg-white rounded-lg">
      <div className="flex flex-col space-y-4">
        {/* Sign In Button */}
        <Link to="/login">
          <button className="w-full px-4 py-2 text-lg font-semibold bg-black text-white rounded hover:bg-gray-800 transition duration-200">
            Sign In
          </button>
        </Link>

        {/* Sign Up Button */}
        <Link to="/register">
          <button className="w-full px-4 py-2 text-lg font-semibold bg-black text-white rounded hover:bg-gray-800 transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SigninAndupToggle;
