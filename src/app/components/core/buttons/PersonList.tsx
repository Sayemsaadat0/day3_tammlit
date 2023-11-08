type PersonListProps = {
  names: {
    first: string;
    screenName: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return <h2 key={name.first}>{name.first}{name.screenName}</h2>;
      })}
    </div>
  );
};

export default PersonList;
