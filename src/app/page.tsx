// import TmButtons from "./components/core/buttons/TmButtons";
// import { BsArrowUpRight } from "react-icons/bs";
// import TmIconButton from "./components/core/buttons/TmIconButton";
// import TMButtonOutline from "./components/core/buttons/TMButtonOutline";
// import TmButtonOutlineIcon from "./components/core/buttons/TmButtonOutlineIcon";
// import TertiaryButton from "./components/core/buttons/TertiaryButton";
// import ButtonWithNoborder from "./components/core/buttons/ButtonWithNoborder";

// // main
// export default function Home() {
//   return (
//     <main className="p-20 ">
//       <TmButtons />
//       <br /> <br />
//       <TmIconButton />
//       <br /> <br />
//       <TMButtonOutline />
//       <br /> <br />
//       <TmButtonOutlineIcon />
//       <br /> <br />
//       <TertiaryButton  status="disabled"/>
//       <br /> <br />
//       <ButtonWithNoborder  />
//       <br /> <br />
//     </main>
//   );
// }








import TmButtons from "./components/core/buttons/TmButtons";
import { BsArrowUpRight } from "react-icons/bs";
import TmIconButton from "./components/core/buttons/TmIconButton";
import TMButtonOutline from "./components/core/buttons/TMButtonOutline";
import TmButtonOutlineIcon from "./components/core/buttons/TmButtonOutlineIcon";
import TertiaryButton from "./components/core/buttons/TertiaryButton";
import ButtonWithNoborder from "./components/core/buttons/ButtonWithNoborder";
import NormalInputs from "./components/core/Inputss/NormalInputs";
import ErrorInputs from "./components/core/Inputss/ErrorInputs";

// main
export default function Home() {
  return (
    <main className="p-20 ">
      <NormalInputs></NormalInputs>  
<br /> <br /> <br />
      <ErrorInputs></ErrorInputs>
    </main>
  );
}































// import Image from "next/image";
// import TmButtons from "./components/core/buttons/TmButtons";
// import Person from "./components/core/buttons/Person";
// import PersonList from "./components/core/buttons/PersonList";

// //  video 4 basic props sending and reciving with typescript
// export default function Home() {
//   const personName = {
//     firstName : 'Bruce',
//     secondName : 'Wane'
//   }

//   const Namelist =[
//     {
//       first : 'John',
//       screenName : 'John'
//     },
//     {
//       first : 'John222',
//       screenName : 'John'
//     },
//     {
//       first : 'John333',
//       screenName : 'John'
//     },
//   ]

//   return (
//     <main>
//       <TmButtons  name='Primary Button' />
//       <Person name={personName}/>

//       <PersonList names={Namelist}/>
//     </main>

//   );
// }

// // video 5 advance props
// import Image from "next/image";
// import TmButtons from "./components/core/buttons/TmButtons";
// import Person from "./components/core/buttons/Person";
// import PersonList from "./components/core/buttons/PersonList";
// import Status from "./components/video_v/Status";
// import Heading from "./components/video_v/Heading";
// import Oscar from "./components/video_v/Oscar";

// export default function Home() {

//   return (
//     <main>
//       <Status status="error"/>

//       <Oscar>
//       <Heading>placeholder text</Heading>
//       </Oscar>
//     </main>

//   );
// }

// // video 6 event props
// "use client"
// import Image from "next/image";
// import Button from "./components/Vid_6/Button";
// import Inputs from "./components/Vid_6/Inputs";

// export default function Home() {
//   return (
//     <main>

//     <Inputs value="" handleChange={(event)=>{
//       console.log('first')
//     }}></Inputs>
//     </main>
//   );
// }

// // video 7 event props
// "use client"

// import Container from "./components/vid_7/Container";

// export default function Home() {
//   return (
//     <main>
//     <Container style={{border: '1px solid black'}}> NEW BORDER STYLE </Container>
//     </main>
//   );
// }

// // video 8 event props
// "use client"

// import Container from "./components/vid_7/Container";

// export default function Home() {
//   return (
//     <main>

//     </main>
//   );
// }
