import {BsArrowRight} from 'react-icons/bs';

const ButtonWithNoborder = () => {
    return (
        <button className='flex gap-2  justify-center items-center hover:text-tm-Primary-7'>
            Read More  <BsArrowRight />
        </button>
    );
};

export default ButtonWithNoborder;