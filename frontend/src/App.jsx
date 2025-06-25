import React, { useEffect, useState } from 'react'
import Form from './Form'
import axios from 'axios';

function App() {

  let [formdata, setformdata] = useState(null)
  let [form_render, setformrender] = useState(null)


  useEffect(() => {
    if (formdata) {
      axios.post("http://localhost:4000/data", formdata)
        .then((res) => {
          setformrender(res.data);
          console.log("Server Response: ", res.data);
        })
        .catch((err) => {
          console.error("Error posting form:", err);
        });
    }
  }, [formdata]); 



  return (
    <div className='w-full h-screen flex justify-center items-center gap-3'>
      <Form setformdata={setformdata} />

      <div className='w-[300px] h-max  '>
        <p>name : {form_render?.firstname} {form_render?.lastname} </p>
        <p>email : {form_render?.email} </p>
      </div>
    </div>
  )
}

export default App