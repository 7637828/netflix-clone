import { useEffect, useState } from "react";
// import { fetchData} from "../api/api";
import axios from "axios";
import YouTube from 'react-youtube';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import movieTrailer from 'movie-trailer';
import { Link } from "react-router-dom";
import { useProductContext } from "../Context/netflix_context";
import ReactPlayer from 'react-player/youtube';
const List = (props) => {

  const [trailerUrl, setTrailerUrl] = useState("")
  const [data0, setdata0] = useState("");
  // const [watch, setWatch] = useState([]);
  // const [img,setImg] = useState();
  // const [img,setImg] = useState();
  const { addList, data1, setData1, data2, setData2, data3, setData3, data4, setData4, data5, setData5, data6, setData6 } = useProductContext();


  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "78f55253c26e406f891a00ef0426e731";


  const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  };







  const fetchData1 = () => {
    return axios.get(`${URL}/discover/tv?api_key=${API_KEY}`)
  }
  const fetchData2 = () => {
    return axios.get(`${URL}/trending/all/week?api_key=${API_KEY}`)
  }
  const fetchData3 = () => {
    return axios.get(`${URL}/movie/now_playing?api_key=${API_KEY}`)
  }
  const fetchData4 = () => {
    return axios.get(`${URL}/movie/popular?api_key=${API_KEY}`)
  }
  const fetchData5 = () => {
    return axios.get(`${URL}/movie/top_rated?api_key=${API_KEY}`)
  }
  const fetchData6 = () => {
    return axios.get(`${URL}/movie/upcoming?api_key=${API_KEY}`)
  }



  useEffect(() => {
    fetchData1().then(res => setData1(res.data.results))
    fetchData2().then(res => setData2(res.data.results))
    fetchData3().then(res => setData3(res.data.results))
    fetchData4().then(res => setData4(res.data.results))
    fetchData5().then(res => setData5(res.data.results))
    fetchData6().then(res => setData6(res.data.results))
  }
    , []);

  console.log(data1)
  // useEffect(()=>{
  //   fetchData(param).then( res => setData(res.data.results))
  // },[]);


  // const handleTrailer = (movie) => {

  //   if (trailerUrl) {
  //     setTrailerUrl("")
  //   }
  //   else {
  // movieTrailer(movie?.name || "").then((url)=>{
  //   const urlParams = new URLSearchParams(new URL(url).search)
  //   setTrailerUrl(urlParams.get("v"));
  // }).catch((err)=>{
  //   console.log(err)
  // })

  //     movieTrailer(null, { tmdbId: movie.id })
  //       .then((url) => {
  //         console.log("url is " + url);
  //         setdata0(url)
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         console.log("urlParamsn" + urlParams);
  //         setTrailerUrl(urlParams.get("v"));

  //       })
  //       .catch((error) => console.log(error));
  //   }


  // }

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVar: {
  //     autoplay: 1
  //   }

  // }




  //   const addList = (item) =>{
  //       setWatch((Ele)=>{
  //       return [...Ele,item]

  //     })
  //     console.log(item)
  //      setImg(item)
  //      img2 = item;
  //   }

  //   console.log(img)

  // console.log(watch)
  // const opts = {
  //   height:"390",
  //   width:"100%",
  //   playerVar:{
  //     play:1
  //   }

  // }
  return (
    <>
      <div className="list">
        <div className="row">
          <h2 className="text-white title">{props.title}</h2>
          <div className="col">
            <div className="row__posters">
              {
                data1.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>
      {/* {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts}/>}
    <video controls="true">
    <source src={`${trailerUrl}`} type="video/mp4"/>
    </video> */}
      {/* <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`${trailerUrl}?autoplay=1`}>
</iframe> */}


      <div className="list">
        <div className="row">
          <h2 className="text-white title">Trending</h2>
          <div className="col">
            <div className="row__posters">
              {
                data2.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average.toFixed(1)}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>




      {/* <div className="list">
      <div className="row">
        <h2 className="text-white title">{props.title}</h2>
        <div className="col">
          <div className="row__posters">
            {
              data3.map(item => <Link to={`/overview`} className="row__poster row__posterLarge">
                <img   onClick={()=>addList(item)} 
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />
              </Link>)
            }
          </div>
        </div>
        
      </div>
     
    </div> */}



      <div className="list">
        <div className="row">
          <h2 className="text-white title">Now_Playing</h2>
          <div className="col">
            <div className="row__posters">
              {
                data4.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>


      {/* <ReactPlayer url={`${data0}`} controls="true" width="100%" playing="true" /> */}



      <div className="list">
        <div className="row">
          <h2 className="text-white title">Popular</h2>
          <div className="col">
            <div className="row__posters">
              {
                data5.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>




      <div className="list">
        <div className="row">
          <h2 className="text-white title">Top_Rated</h2>
          <div className="col">
            <div className="row__posters">
              {
                data6.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>




      <div className="list">
        <div className="row">
          <h2 className="text-white title">Up_Coming</h2>
          <div className="col">
            <div className="row__posters">
              {
                data3.map(item =>
                  <>
                    <Link to={`/overview/${item.id}`}>
                      <div className="card">
                        <img key={item.id} className="row__poster row__posterLarge"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={item.title} />
                        <div className="circleRating">
                          <CircularProgressbar
                            value={item.vote_average}
                            maxValue={10}
                            text={item.vote_average}
                            styles={buildStyles({
                              pathColor: item.vote_average < 5 ? "red" : item.vote_average < 7 ? "orange" : "green",
                            })} />
                        </div>
                      </div>
                    </Link>

                  </>
                )}
            </div>
          </div>

        </div>

      </div>


    </>

  )


}


export default List;

