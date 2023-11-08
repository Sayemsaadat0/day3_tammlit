import {BsArrowUpRight} from 'react-icons/bs'
const TmIconButton = () => {
    return (
        <button className="w-auto  px-[32px] py-[16px] h-auto whitespace-nowrap flex justify-center  items-center gap-[8px]  border-tm-Primary-8 border rounded-[10px] bg-tm-Primary-8 text-white mediumbuttonText">
            Contact <BsArrowUpRight />
        </button>
    );
};

export default TmIconButton;