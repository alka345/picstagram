import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'

function Content() {
 return(

   <div>
   <div className='w-full'><Navbar/></div>
   <div className=' flex w-full '>
      <div className='w-1/4'><Sidebar/></div>
      <div className='w-1/2'><Card/></div>
      <div className='w-1/4'><Search/></div>
   </div>
   </div>
 )
}

export default Content
