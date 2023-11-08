type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const Inputs = ({value, handleChange} : inputProps) => { 

const handleInputChange = (event :React.ChangeEvent<HTMLInputElement> )=>{
    console.log('sjdsd')
}

  return <input type="text" value={value} onChange={handleInputChange}/>;
};

export default Inputs;
