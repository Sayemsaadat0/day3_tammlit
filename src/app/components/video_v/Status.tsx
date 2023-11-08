type statusProps = {
    status : 'loading' | 'success' | 'error'
}

const Status = (props : statusProps) => {
 
    let message 
    if(props.status === 'loading'){
        message = 'loading .....' 
    } else if(props.status === 'success'){
        message = 'data fetched successfully'
    }else if(props.status === 'error'){
        message = 'error fetching data'
    }


    return (
        <div>
            <h2>status {message}</h2>
        </div>
    );
};

export default Status;