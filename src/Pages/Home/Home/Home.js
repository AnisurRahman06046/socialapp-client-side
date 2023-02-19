import axios from 'axios';
import React, { useState } from 'react';

const Home = () => {
    const [imageFile,setImageFile]=useState(null)
    const [imgUrl,setImgUrl]=useState('')
    const handleForm=(e)=>{
        e.preventDefault();
        const form = e.target;
        const postText = form.posttext.value;
        console.log(postText,imgUrl)
        const postData ={
            postedText: postText,
            img:imgUrl
        }
        console.log(postData)
        fetch('http://localhost:5000/users-post',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('posted successfully')
                form.reset()
            }
        })
        .catch(err=>console.log(err))
       
       
    }
    const handleImage=(e)=>{
        setImageFile(e.target.files[0])

    }
    const handleUpload=()=>{
        const formData = new FormData()
        formData.append('image', imageFile);
        formData.append('key', '27e287ef97af44f26cd6f7400dbba89f');

axios.post('https://api.imgbb.com/1/upload',formData)
.then(res=>{
    console.log(res.data.data.url)
    setImgUrl(res.data.data.url)
})
.catch(err=>console.log(err))
    }
    return (
        <div>
            <section className='text-center mt-10 my-10 mx-auto'>
           <form onSubmit={handleForm}>
           <input type="text" placeholder="What's on your mind?" className="input input-bordered input-lg w-full max-w-xs" name='posttext' /> <br />
           <input onChange={handleImage} type="file" className="file-input w-full max-w-xs" name='image' /> <br />
           <button onClick={handleUpload} className='btn btn-primary btn-md' type="submit">Submit</button>
           </form>
            </section>
            <section>
                <h1>write section</h1>
            </section>
        </div>
    );
};

export default Home;