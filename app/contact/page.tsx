// import Image from "next/image";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import ics from "@/public/about.jpg";

// const ContactSection = () => {
//   return (
//     <div>
//       <Image src={ics} alt="cs" />
//       <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
//         {/* Address */}
//         <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//           <div className="flex justify-center mb-4">
//             <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
//               <FaMapMarkerAlt className="text-blue-500 text-2xl" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold">Address</h3>
//           <p className="text-gray-600 mt-2">
//             745327878, Shantinagar, Dhaka
//           </p>
//         </div>

//         {/* Email & Call */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//             <div className="flex justify-center mb-4">
//               <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
//                 <FaEnvelope className="text-blue-500 text-2xl" />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold">Email</h3>
//             <a
//               href="mailto:alamshafaet@gmail.com"
//               className="text-blue-600 hover:underline mt-2 block"
//             >
//               example@gmail.com
//             </a>
//           </div>

//           {/* Call */}
//           <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//             <div className="flex justify-center mb-4">
//               <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
//                 <FaPhoneAlt className="text-blue-500 text-2xl" />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold">Call</h3>
//             <a
//               href="tel:+880xxxxxxxxxx"
//               className="text-blue-600 hover:underline mt-2 block"
//             >
//               +880xxxxxxxxx
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;



import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ics from "@/public/about.jpg";

const ContactSection = () => {
  return (
    <div>
      {/* Top Image */}
      <Image src={ics} alt="cs" className="w-full h-auto object-cover" />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        {/* Address */}
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-600 mt-2">745327878, Dhaka</p>
        </div>

        {/* Email & Call */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
                <FaEnvelope className="text-blue-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a
              href="mailto:alamshafaet@gmail.com"
              className="text-blue-600 hover:underline mt-2 block"
            >
              example@gmail.com
            </a>
          </div>

          {/* Call */}
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full border-2 border-dotted border-blue-300">
                <FaPhoneAlt className="text-blue-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Call</h3>
            <a
              href="tel:+8801864288914"
              className="text-blue-600 hover:underline mt-2 block"
            >
              +880xxxxxxxxx
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.927030951753!2d90.41738797599861!3d23.78770848721408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79d5ad06015%3A0xa35b3201d4ce47e4!2sShantinagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1718638500000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
