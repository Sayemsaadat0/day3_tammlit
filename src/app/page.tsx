import Image from "next/image";
import TmButtons from "./components/core/buttons/TmButtons";
import Person from "./components/core/buttons/Person";
import PersonList from "./components/core/buttons/PersonList";



export default function Home() {
  const personName = {
    firstName : 'Bruce',
    secondName : 'Wane'
  }


  const Namelist =[
    {
      first : 'John',
      screenName : 'John'
    },
    {
      first : 'John222',
      screenName : 'John'
    },
    {
      first : 'John333',
      screenName : 'John'
    },
  ]


  return (
    <main>
      <TmButtons  name='Primary Button' />
      <Person name={personName}/>
      
      <PersonList names={Namelist}/>
    </main>

  );
}
