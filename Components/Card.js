import React from "react";
import { FcLike,FcLikePlaceholder } from 'react-icons/fc'
import { toast } from "react-toast";
function Card (props){
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(course){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>cid !== course.id ));
            console.log(likedCourses);
            toast.error("Like removed");
        }else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("Liked sucessfully");
        }
    }

    return(
        <div className="h-[350px] w-[280px] bg-blue-950 bg-opacity-80 text-white m-[10px] rounded-lg overflow-hidden relative">
            <div className="img ">
                <img src={course.image.url} className='object-cover rounded-lg '></img> 
                <div>
                    <button onClick={()=> clickHandler(course)} className="absolute right-[10px] bottom-[12px] bg-white rounded-full p-[5px] active:">
                        {
                            likedCourses.includes(course.id) ? (<FcLike></FcLike>):(<FcLikePlaceholder></FcLikePlaceholder>)
                        }
                    </button>
                </div>
            </div>
            <div className="title font-bold text-xl text-left pl-[10px] mt-[10px]">
                {course.title}
            </div>
            <div className="text-base text-left p-[10px] mt-[1px] ">
                {
                    course.description.length>100 ? (course.description.substring(0,100)+"...") : (course.description)
                }
                
            </div>
        </div>
    );
}
export default Card;