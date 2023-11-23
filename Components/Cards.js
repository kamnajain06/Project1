import Card from "./Card";
import { useState } from 'react';
function Cards (props){
    
    console.log(props.courses)
    let category=props.category;
    let courses=props.courses;
    const [likedCourses,setLikedCourses]= useState([]);

    function getCourses(){
        if(category==='All'){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            console.log(allCourses)
            return allCourses;
        }else{
            return props.courses[category];
        }
    }
    
    const myGetCourses= getCourses();

    

    return(
        <div className="w-11/12 max-w-[1000px] my-[50px] mx-auto flex flex-wrap justify-center items-center">
            {

                myGetCourses.map((course)=> (
                <Card course={course} key={course.id} 
                likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses}></Card>))
            }
        </div>
    );
}
export default Cards;