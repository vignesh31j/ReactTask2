import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Components/ProfileCard'

function App() {

  const data= [

    { name:"Vignesh",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"Praveen",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"Hari Haran",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
          'Java','JavaScript','Mongodb']},
          
    { name:"Ramesh Babu",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},
      
    { name:"Sudharshan",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},
      
    { name:"Boopalan",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},
      
    { name:"Hari Haran",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"Sarath",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"karthik",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},

    { name:"Yugandran",
      place:"Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']}, 
              
    { name:"Jaya Vignesh",
      place:"Tambaram, Chennai" ,
      role:"Fresher" ,
      img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ,          
      status : true ,
      skills:['UI/UX','HTML','CSS','ReactJS',
              'Java','JavaScript','Mongodb']},
  ]

  return (
    <>
      <h1>Profile Cards</h1>
      <div className="cards">
      {data.map((userdata,index)=>(
        <ProfileCard key={index}
        name={userdata.name}
        place={userdata.place}
        role={userdata.role}
        img={userdata.img}
        status={userdata.status}
        skills={userdata.skills}
        /> ))} 
      </div>   
    </>
  )
}

export default App
