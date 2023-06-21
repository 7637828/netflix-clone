import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/netflix_context";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import { FiX} from "react-icons/fi";
import datetime from "datetime";



const URL = "https://api.themoviedb.org/3";
const API_KEY = "78f55253c26e406f891a00ef0426e731";


// const endpoints = {
//     originals: "/discover/tv",
//     trending: "/trending/all/week",
//     now_playing: "/movie/now_playing",
//     popular: "/movie/popular",
//     top_rated: "/movie/top_rated",
//     upcoming: "/movie/upcoming",
// };





const Overview = () => {
    const { img } = useProductContext();
    console.log(img)
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState(null)
    const [recommendationmovie, setRecommendationmovie] = useState(null)
    const [credits, setCredits] = useState(null)
    const [trailerUrl, setTrailerUrl] = useState("")
    const [data0, setdata0] = useState("");
    const [toggle,setToggle] = useState(false);
    const[genres,setGenres] = useState(null);
    const[date,setDate] = useState(null);



    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
            setData(response.data);
            setGenres(response.data.genres)
            setDate(response.data.release_date)

        } catch (error) {
            console.error('Error Fetching', error)
        }
    }
    // const api_date_object = datetime.strptime(date,"%Y-%m-%d");
    // const formatted_date = api_date_object.strftime("%d %b, %Y");
    
    const fetchData1 = async () => {
        try {
            const response1 = await axios.get(`${URL}/movie/${id}/recommendations?api_key=${API_KEY}`);
            setRecommendationmovie(response1.data.results);

        } catch (error) {
            console.error('Error Fetching', error)
        }
    }

    const fetchData2 = async () => {
        try {
            const response1 = await axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
            setCredits(response1.data.cast);

        } catch (error) {
            console.error('Error Fetching', error)
        }


    }

    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        fetchData1()
    }, []);
    useEffect(() => {
        fetchData2()
    }, []);

    console.log(data)
    console.log(recommendationmovie)
    console.log(credits)
    console.log(genres)

    const filterRecommendation = recommendationmovie?.filter((item) => {
        return item.poster_path !== null;
    })

    const filterCredits = credits?.filter((item) => {
        return item.profile_path !== null;
    })

    console.log(filterCredits)

    const handleClick = (movie) => {
        setToggle(true)
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch((error) => {
                    console.log(error)
                })
            movieTrailer(null, { tmdbId: movie.id })
                .then((url) => {
                    console.log("url is " + url);
                    setdata0(url)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("urlParamsn" + urlParams);
                    setTrailerUrl(urlParams.get("v"));

                })
                .catch((error) => console.log(error));
        }
    }

    const closeYtb = () =>{
        setToggle(false)
    }


    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     playerVars: {
    //         autoPlay: 1,
    //     }
    // }



    return (<>
        <div className="overview-container"
            style={{
                width: "99vw",
                minHeight: "99vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid black",
                margin: "auto",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://image.tmdb.org/t/p/original${data?.backdrop_path}")`,
                backgroundPosition: "top right",
                backgroundSize: "cover",
                objectFit: "contain",
            }}>
            <div className="card">

                <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="ghfghfgh" />

            </div>

            <div className="card-description">


                <h1>{data?.title}</h1>

                {/* <p>{data?.release_date} (IN)Action, Adventure, Science Fiction 2h 5m</p> */}


                <p>{data?.release_date} {genres?.map((item)=>{return <><span className="genres">{item.name}</span></>})}</p>

                <p>{data?.tagline}</p>
                <div className="playandrating">
                    <div className="circleRating">
                        <CircularProgressbar
                            value={data?.vote_average.toFixed(1)}
                            maxValue={10}
                            text={data?.vote_average.toFixed(1)}
                            styles={buildStyles({
                                pathColor: data?.vote_average?.toFixed(1) < 5 ? "red" : data?.vote_average.toFixed(1) < 7 ? "orange" : "green",
                            })} />
                    </div>
                    <BsFillPlayCircleFill className="play" onClick={() => { handleClick(data) }}></BsFillPlayCircleFill>
                </div>



                <h2>Overview</h2>
                <p>{data?.overview.substring(0,400)}</p>
                <Link to={data?.homepage} >
                    <button className="read-more">Explore More</button>
                </Link>

                {/* <div className="All-characters">
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                    <div className="character">
                        <p>Jack Kirbey</p>
                        <p>Characters</p>
                    </div>
                </div>  */}
            </div>


        </div>

        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}

        {toggle?<>
           
                <div className={toggle?"close1":"close"}>
                    <FiX className="fix" title="close"  onClick={closeYtb}></FiX>
                </div>
                <ReactPlayer url={`${data0}`} className="youtube" controls="true"  width="100%"   playing="true" />
           
        </>:""}

        {filterRecommendation?.length === 0 ? " " :
            <div className="list">
                <div className="row">
                    <h2 className="text-white title">Recommendation</h2>
                    <div className="col">
                        <div className="row__posters">
                            {
                                filterRecommendation?.map((item) => (
                                    <>
                                        <Link to={`/recommendation/${item?.id}`}>
                                            <div className="card">
                                                <img key={item?.id} className="row__poster row__posterLarge"
                                                    src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                                                    alt={item?.title} />
                                                <div className="circleRating">
                                                    <CircularProgressbar
                                                        value={item?.vote_average.toFixed(1)}
                                                        maxValue={10}
                                                        text={item?.vote_average.toFixed(1)}
                                                        styles=
                                                        {buildStyles({
                                                            pathColor: item?.vote_average.toFixed(1) < 5 ? "red" : item?.vote_average.toFixed(1) < 7 ? "orange" : "green",
                                                        })} />
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                )
                                )}
                        </div>
                    </div>
                </div>
            </div>
        }


        <div className="cast-container">
            <div className="heading">
                <h2>Cast</h2>
            </div>
            <div className="cast-info-container">
                {
                    filterCredits?.map((item) => {
                        return (
                            <>
                                <div className="cast-info">
                                    <div className="cast">
                                        <img src={`https://image.tmdb.org/t/p/original${item?.profile_path
                                            }`} alt="ghfg"></img>
                                    </div>
                                    <div className="cast-name">
                                        <h3>{item?.character}</h3>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </div>
    </>

    )
}













/* <h2 style={{color:"white",margin:"30px"}}>{id}</h2> */










export default Overview;