import React from 'react'
import {Input,FilledInput,TextField,FormControl,} from '@mui/material';


export default function form({ children }) {
  return (
    <form className='bg-white shadow-md p-3 rounded-lg mb-5 '>
        {children}
    </form>
  )
}
