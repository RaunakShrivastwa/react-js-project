import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../StaticReactComponent/CSS/Course.css'
import { useNavigate } from 'react-router-dom';



function ViewCourse() {
    const [user, setUser] = useState({
        title: "",
        deadline: "",
        score: "",
        name: ""
    });
        let navigate=useNavigate();
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9096/course`)
        setUser(result.data)
    }

    const deleteData=async (e)=>{  
            let id=e.target.id;
            await axios.delete(`http://localhost:9096/deleteCourse/${id}`);
            window.location.href='/viewCourse'
    }

    const UpdateData=(id)=>{
      navigate(`/editPage/${id}`)
    }
    console.log(user)
    return (
        <div>
            <div className='container-fluied' style={{ height: '100vh' }}>
            <div> <i title='Go back' onClick={()=>navigate(-1)} class="fa-solid fa-arrow-left p-3"></i></div>
                <div className='d-flex justify-content-center'>
                    <strong className='p-3'>All Course</strong>
                </div>

                <table className="table p-3 container">
                    <thead>
                        <tr>
                            <th className='bg-success shadow' scope="col">S.no</th>
                            <th className='bg-success shadow' scope="col">Title</th>
                            <th className='bg-success shadow' scope="col">DeadLine</th>
                            <th className='bg-success shadow' scope="col">Score</th>
                            <th className='bg-success shadow' scope="col">name</th>
                            <th className='bg-success shadow' scope="col">Operation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user && user.length > 0 ? (
                            user.map((data) => (
                                <tr key={data.id} style={{ border: 'green' }}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.title}</td>
                                    <td>{data.deadline}</td>
                                    <td>{data.score}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                            <i title='Click to Delete Course' id={data.id} class="Delete fa-solid fa-trash delete" onClick={(e)=>deleteData(e)}></i>
                                            <i title='Click to edit Course text-primary' class=" edit fa-regular fa-pen-to-square" onClick={()=>UpdateData(data.id)}></i>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewCourse