import { Typography } from "@mui/material";

//* import components
import Ball from './ball'

export default function title() {
  return (
    <>
      <div className='mb-5'>
        <h2 className="text-center text-gray-500 font-medium italic">version 1.1 [demo]</h2>
        <h1 className="text-4xl text-center font-bold text-gray-900">Cal for Snooker!?</h1>
      </div>
      <Ball />
    </>

  )
}
