import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("GitData")));


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      <div className='my-3'>  Github followers: {data.followers}
      </div>
      <div className='flex justify-center'><img src={data.avatar_url} alt="Git picture" width={300} /></div>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Karan-weybee')
  const data = await response.json()
  localStorage.setItem("GitData", JSON.stringify(data))

}