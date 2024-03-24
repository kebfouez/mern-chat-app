import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-green-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <spna text-base label-text>
                Full Name
              </spna>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <spna text-base label-text>
                Username
              </spna>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <spna text-base label-text>
                Password
              </spna>
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <spna text-base label-text>
                Confirm Password
              </spna>
            </label>
            <input
              type="password"
              placeholder="Confirm Password "
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            {" "}
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-green-300">
//           SignUp
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <spna text-base label-text>
//                 Full Name
//               </spna>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <spna text-base label-text>
//                 Username
//               </spna>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <spna text-base label-text>
//                 Password
//               </spna>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password "
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <spna text-base label-text>
//                 Confirm Password
//               </spna>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password "
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheckBox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             {" "}
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
