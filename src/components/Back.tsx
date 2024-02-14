import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }
  return <div>
    <button className="bg-[#141414] shadow-md border border-white  hover:border-rose-500 hover:bg-rose-500 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNavigate} >👈</button>;
  </div>
};

export default Back;
