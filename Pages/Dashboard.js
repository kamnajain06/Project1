import React from 'react'
import Filter from '../Components/Filter'
import Navbar1 from '../Components/Navbar1'
import { filterData, apiUrl } from '../data';
import { useEffect,useState } from 'react';
import { toast } from 'react-toast';
import Spinner from '../Components/Spinner';
import Cards from '../Components/Cards';

const Dashboard = () => {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchData = async() =>{
    setLoading(true);
    try{
      let res=await fetch(apiUrl);
      let output=await res.json();
      //save data in a variable
      setCourses(output.data);
      // console.log(output.data)
    }catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='flex flex-col min-h-screen text-3xl'>
      <div >
        <Navbar1></Navbar1>
      </div>
      <div className='mx-auto'>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div >
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
      </div>
    </div>
  )
}

export default Dashboard