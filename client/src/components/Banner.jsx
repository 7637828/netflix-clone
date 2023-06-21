
import { useEffect, useState } from "react";
import axios from "axios";


const URL = "https://api.themoviedb.org/3/movie/now_playing";
const API_KEY = "78f55253c26e406f891a00ef0426e731";

const Banner = () => {
    


    const [list, setList] = useState([]);
    let movie;

    
    useEffect(()=>{

      const fetchData = async() => {
        try{
          const response = await axios.get(`${URL}?api_key=${API_KEY}`)
          setList(response.data.results)
           
          return response;
          
        }

        catch (err) {
          console.log(err)

        }
        
       
    }
       fetchData();
       
      
       
       
      
       
    },[]);
    
    movie = list[Math.floor(Math.random()*19)]
      

    
    // const ran = setInterval(()=>{
   
    // },2000)
    // console.log(ran)
    // console.log(movie)

    
     
      
     

    

   

    

    

    


   
    console.log(list);


    // let im = list.map((Ele)=>{
    //   return Ele.backdrop_path
    // })


    // const im = () =>{
    //    return list.map((Ele)=>{
    //     return Ele.backdrop_path
    //   })
    // }
     
    // console.log(im)
    // let ran;
    // ran = setInterval(()=>{

    //   return im[Math.floor(Math.random()*19)]
  
      
    // },1000)

    // console.log(ran)

    return(
      <div className="banner" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       backgroundPosition:"center center",
  backgroundSize: "cover",
  color:"white",
  height: "500",
  objectFit: "contain",
  position: "relative",
  backgroundRepeat: "no-repeat"}
     
      }>
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {movie?.overview.slice(0,200)}...
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    )
  }
  
  export default Banner;