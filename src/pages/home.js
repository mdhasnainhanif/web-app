import React from 'react'
import '../index.css'
import Header from '../components/layout/Header'
import { Link } from 'react-router-dom'

const Home = () => {


  const userData = JSON.parse(localStorage.getItem('data')) || [];
  console.log(userData);


  return (
    <>
      <Header />

<div className='container'>

<Link to="/userform">
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-auto me-48 mt-10 block mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Add User</button>
</Link>

      <table className='bg-slate-600 text-lime-50 w-4/5 mt-20 border ms-10'>
        <thead>
          <tr>
            <th className='p-4 border'>s.no</th>
            <th className='p-4 border'>First Name</th>
            <th className='p-4 border'>Last Name</th>
            <th className='p-4 border'>Email</th>
            <th className='p-4 border'>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            userData?.map((item, index)=>(
          <tr key={item?.id}>
            <td className='p-4 border'>{item?.id}</td>
            <td className='p-4 border'>{item?.firstName}</td>
            <td className='p-4 border'>{item?.lastName}</td>
            <td className='p-4 border'>{item?.email}</td>
            <td className='p-4 border'>{item?.message}</td>
          </tr>
            ))
          }
        </tbody>
      </table>
      </div>

    </>
  )
}

export default Home