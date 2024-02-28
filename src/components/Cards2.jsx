import React from 'react'

const Cards2 = () => {
  return (
    <div className=' h-[350px] w-72  rounded-md m-7 shadow-md bg-white '>
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_270,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png" alt=""  className='  object-fill rounded-t-md '/>

        <div className=' flex justify-start my-5 gap-3 px-3 '>
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt=""  className=' rounded-full' />
            <div className=' flex flex-col'>
                <h2 className=' font-bold'>Logo Design</h2>
                <p className=' text-gray-600'>by bruno_malagrino</p>
            </div>
        </div>
    </div>
  )
}

export default Cards2