import axios from 'axios';
import React, { useEffect } from 'react';
import { getToken } from '../config/UseToken';
import moment from 'moment'

const CommentList = () => {
const [comments, setComments] = React.useState([])
const [loading,setLoading]=React.useState(false)
const token=getToken()

console.log("token",token)
    const getcomment=async()=>{
        setLoading(true)
        await axios.get("http://localhost:5000/api/comments",{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response)=>{ 
           setLoading(false)
            setComments(response.data)
            console.log("comments",response.data)

        }).catch((error)=>{
            console.log("or",error)
        })
    }
    useEffect(() => {
        getcomment()
    }, []);
    return (
        <div>
            <div class=" col-12 pb-4">
            <h1>Comments</h1>
                {comments.map((comment,index)=>(
                            
               
                            <div class="darker mt-4 text-justify">
                                <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" width="40" height="40" />
                                <h4>Rob Simpson</h4>
                                <span>{moment(comment.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</span>
                                <br />
                                <p > {comment.content}</p>
                            </div>
                ))}
        
            </div>
        </div>
    );
}

export default CommentList;
