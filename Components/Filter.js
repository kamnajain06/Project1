import React from "react";
import { filterData } from '../data';
function Filter (props){
    let filterData=props.filterData;
    const setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div >
            {
                filterData.map((data)=>{
                    return(
                    <button className='mx-[7px] mt-[15px] bg-blue-600 text-white p-[8px] rounded text-sm h-[30px] flex-col justify-center focus:bg-blue-950 focus:outline-none hover:bg-blue-800'  key={data.id}
                    onClick={()=> filterHandler(data.title)}>
                    {data.title} 
                    </button>
                    );
                })
            }
        </div>
    );
}
export default Filter;