import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Layout.css'

const Summary = () => {
    var {id}=useParams();
  const [summarys,setSummarys]=useState()
  
  const fetchSummary=()=>{
  
  axios
  .get (`https://api.tvmaze.com/search/shows?q=all#/?id=${id}`,{responseType: "json",
})
  .then((res)=>{    
    console.log(res.data.length)
  var hy =[];
  var gk=[]
  for (let i=0; i<res.data.length; i++){
    hy.push(res.data[i])
  }
  console.log(hy)
  for (let x=0; x<hy.length; x++){  
    //eslint-disable-next-line
  if (hy[x].show.id==id){
    gk.push(hy[x])     
        
  }else{
    console.log(gk)
    console.log("loading...")
  }
}
setSummarys(gk)
    

  })
  .catch ((error)=>console.log("error", error));

};

useEffect(()=>{

  fetchSummary()
// eslint-disable-next-line  
},[])
  return (
    <>
    <div style={{padding:'50px 0 0 80px'}} className="movie-card"> 
        {summarys && summarys.map((summarys)=>(
            <>
            <div style={{display:'flex'}} id="summary" key={summarys.show.id}>
                <div><img src={summarys.show.image.medium} alt="" /></div>
                <div style={{paddingLeft:'50px',paddingTop:'100px'}}>
                    <h2>{summarys.show.name}</h2>
                    <p>{summarys.show.genres[0]}/{summarys.show.genres[1]}</p>
                    <button style={{color:'white',cursor:'pointer',border:'none',width:'150px',height:'40px',borderRadius:'5px',backgroundColor:'red'}}>Book tickets</button>
                </div>
            </div>
            <div >
                <h1>About the movie</h1>
                <p style={{width:"800px"}}>{summarys.show.summary.replace(/<[^>]+>/gi,"")}</p>
            </div>
            </>
        ))}
    </div>
    </>
  )
}

export default Summary