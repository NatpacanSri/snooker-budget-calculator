import { useState } from 'react';
import Button from '@mui/material/Button';

//* import components
import Title from './components/title';
import Form from './components/form'
import Input from './components/input'
import NumOfPeople from './components/numPeople';
import TimePrice from './components/timePrice';


export default function Home() {

  const [numPeople,setNumPeople] = useState(2)

  const handleNumbPeopleChange = (e) =>{
    setNumPeople(parseInt(e.target.value,10))
  }



  return (
    <main className='bg-green-50 min-h-screen px-10 py-6'>
      <Title/>
      {/* <Ball/> */}
      <Form>
        <h3 className='mb-2 text-md font-bold text-gray-900'>People</h3>
        <NumOfPeople onChange={handleNumbPeopleChange}/>
        {[...Array(numPeople)].map((_,index)=>(
          <Input index={index+1}/>
        ))}
      </Form>
      <Form>
        <TimePrice/>
      </Form>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Calculate</button>
    </main> 
  )
}
