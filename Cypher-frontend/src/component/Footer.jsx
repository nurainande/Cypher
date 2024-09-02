
// const Footer = () => {
//   return (
//     <footer>
//       <section className="top-section">
//         <summary>
//           <h2 className="text-2xl text-gray-900">Cypher</h2>
//           <p className="text-sm text-gray-600">
//             Cypher is a leading technology company specializing in advanced
//             gaming technology.
//           </p>
//         </summary>
//         <summary>
//           <h2 className="text-2xl text-gray-900">Services</h2>
//           <ul>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Game Development
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Game Design
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Game Marketing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Game Testing
//               </a>
//             </li>
//           </ul>
//         </summary>
//         <summary>
//           <h2 className="text-2xl text-gray-900">Company</h2>
//           <ul>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Careers
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Press
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-600 hover:text-gray-900">
//                 Terms & Conditions
//               </a>
//             </li>
//           </ul>
//         </summary>
//       </section>
//       <div className="container mx-auto px-6 md:px-24 py-12 flex flex-col items-center justify-between">
//         <p className="text-sm text-gray-600">
//           &copy; 2023 cypher. All rights reserved.
//         </p>
//         <div className="social-icons flex items-center gap-4">
//           <a href="#" className="text-gray-600">
//             <SiFacebook size="24" />
//           </a>
//           <a href="#" className="text-gray-600">
//             <SiTwitter size="24" />
//           </a>
//           <a href="#" className="text-gray-600">
//             <SiInstagram size="24" />
//           </a>
//           <a href="#" className="text-gray-600">
//             <SiLinkedin size="24" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer


import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <footer style={{background:'black'}} className=" text-white py-12">
      <section className="top-section container mx-auto px-6 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Cypher</h2>
          <p className="text-sm text-gray-400">
            Cypher is a leading technology company specializing in advanced
            gaming technology.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Game Development
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Game Design
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Game Marketing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Game Testing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Press
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="container mx-auto px-6 md:px-24 py-6 flex flex-col lg:flex-row items-center justify-between border-t border-gray-700 mt-8">
        <p className="text-sm text-gray-400">
          &copy; 2023 Cypher. All rights reserved.
        </p>
        <div className="social-icons flex items-center gap-4 mt-4 lg:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <SiFacebook size="24" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <SlSocialTwitter size="24" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <SiInstagram size="24" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <SiLinkedin size="24" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
