import { Link } from "react-router-dom";

const Default = () => {
  return <div className="flex items-center  justify-center h-screen ">
    <div className="flex gap-4 ">
      <Link className="bg-[#141414]  shadow-md border border-white  hover:border-rose-500 hover:bg-rose-500 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="dynamic">Dynamic Fields</Link>
      <Link className="bg-[#141414]  shadow-md border border-white  hover:border-rose-500 hover:bg-rose-500 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="static">Static Fields</Link>
    </div>
  </div>
};

export default Default;
