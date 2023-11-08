type ButtonTupe = {
  status: "active" | "disabled";
};

const TertiaryButton = ({ status }: ButtonTupe) => {
  return (
    <div>
      {status === "active" ? (
           <button  className="w-auto  px-[32px] py-[16px] h-auto whitespace-nowrap flex justify-center  items-center gap-[8px]  border-tm-Primary-8 bg-white border rounded-[10px] text-tm-Primary-8 mediumbuttonText hover:bg-tm-Primary-1">
           Read Details
         </button>
     
      ) : (
        <button disabled className="w-auto  px-[32px] py-[16px] h-auto whitespace-nowrap flex justify-center  items-center gap-[8px]  border-tm-Neutral-4 bg-Grey border rounded-[10px] text-white mediumbuttonText ">
          Read Details
        </button>
      )}
    </div>
  );
};

export default TertiaryButton;
