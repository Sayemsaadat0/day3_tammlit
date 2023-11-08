type buttonProps = {
   name : string,
 }
 

const TmButtons = (props : buttonProps) => {
    return (
        <button>
            {props.name}
        </button>
    );
};

export default TmButtons;





