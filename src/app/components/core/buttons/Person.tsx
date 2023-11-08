type PersonProps ={
    name : {
        firstName : string,
        secondName : string
    }
}


const Person = ( props : PersonProps ) => {
    return (
        <div>
            {props.name.firstName} {props.name.secondName}
        </div>
    );
};

export default Person;