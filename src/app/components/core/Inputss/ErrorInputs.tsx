import { MdErrorOutline } from "react-icons/md";

const ErrorInputs = () => {
  return (
    <div className=" relative">
      <input 
        type="text"
        placeholder="error"
        className="input rounded-2xl input-bordered px-10 border-tm-Secondary-4 
            focus:outline-offset-0 
            focus:outline-tm-Secondary-4
            active:outline-0"/>
        <MdErrorOutline   className="absolute text-tm-Secondary-6 w-6 h-6  top-3 left-60"/>
    </div>
  );
};

export default ErrorInputs;
