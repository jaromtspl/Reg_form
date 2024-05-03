import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [current, setCurrent] = useState("");
  const [expected, setExpected] = useState("");
  const [work, setWork] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonText, setButtonText] = useState('Submit');

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Submitting....");

    fetch('http://localhost:7000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        domain,
        current,
        expected,
        work,
        email,
        phone
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setButtonText("Submitted");
        setName("");
        setDomain("");
        setCurrent("");
        setExpected("");
        setWork("");
        setEmail("");
        setPhone("");
        setTimeout(() => {
          setButtonText("Submit");
        }, 1000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setButtonText("Submit");
      });
  }

  return (
    <div>
      <div className='w-[35%] mt-20 mx-auto '>
        <form action="" onSubmit={handleSubmit}>
          <div className='space-y-8 border-2 p-5'>
            <div>
              <h1 className='text-center font-bold text-2xl underline'>Registration Forms</h1>
            </div>
            <div className=' flex justify-between items-center' >
              <label className='text-xl font-semibold'> Name:</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className=' w-[50%] text-xl outline-none border-b-2 border-black ' />
            </div>
            <div className=' flex justify-between items-center'>
              <label className='text-xl font-semibold ' > Domain:</label>
              <input type="text" required value={domain} onChange={(e) => setDomain(e.target.value)} className=' w-[50%] text-xl outline-none  border-b-2 border-black ' />
            </div>
            <div className=' flex justify-between items-center'>
              <label className='text-xl font-semibold ' > Current Salary:</label>
              <input type="number" required value={current} onChange={(e) => setCurrent(e.target.value)} className=' w-[50%] text-xl outline-none  border-b-2 border-black' />
            </div>
            <div className=' flex justify-between items-center'>
              <label className='text-xl font-semibold ' > Expected Salary:</label>
              <input type="number" required value={expected} onChange={(e) => setExpected(e.target.value)} className=' w-[50%] text-xl outline-none  border-b-2 border-black' />
            </div>
            <div className='flex justify-between items-center'>
              <label className='text-xl font-semibold ' >Work Experience:</label>
              <input type="number" required value={work} onChange={(e) => setWork(e.target.value)} className=' w-[50%] text-xl outline-none  border-b-2 border-black ' />
            </div>
            <div className=' flex justify-between items-center'>
              <label className='text-xl font-semibold ' > Email:</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className=' w-[50%] text-xl outline-none border-b-2 border-black ' />
            </div>
            <div className=' flex justify-between items-center'>
              <label className='text-xl font-semibold ' > PhoneNumber:</label>
              <input type="number" required value={phone} onChange={(e) => setPhone(e.target.value)} className=' w-[50%] text-xl outline-none  border-b-2 border-black ' />
            </div>
            <div className='flex justify-center items-center'>
              <button type='submit' className="bg-green-500  text-white font-bold py-2 px-6 rounded">
                {buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
