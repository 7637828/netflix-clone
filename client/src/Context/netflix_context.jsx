import { createContext,useContext,useEffect,useState } from "react";
// import axios from "axios";


const AppContext = createContext();
// const URL = "https://api.themoviedb.org/3/movie/top_rated";
// const API_KEY = "78f55253c26e406f891a00ef0426e731";


// const endpoints = {
//     originals: "/discover/tv",
//     trending: "/trending/all/week",
//     now_playing: "/movie/now_playing",
//     popular: "/movie/popular",
//     top_rated: "/movie/top_rated",
//     upcoming: "/movie/upcoming",
// };


const AppProvider = ({children}) =>{
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
  const [watch, setWatch] = useState([]);
  const [img,setImg] = useState();

    // const fetchData = () => {
    //     return axios.get(`${URL}?api_key=${API_KEY}`)
    // }

    // useEffect(()=>{
    //     fetchData(param).then( res => setData(res.data.results))
    //   },[]);

  //   useEffect(()=>{
  //   fetchData(param).then( res => setData(res.data.results))
  // },[]);



      console.log(data1)


      const addList = (item) =>{
        setWatch((Ele)=>{
        return [...Ele,item]
        
      })
      console.log(item)
      setImg(item)
    }
  
  console.log(watch)

  return (
    <AppContext.Provider value={{addList,data1,watch,img,setData1,setData1,img,data2,setData2,data3,setData3,data4,setData4,data5,setData5,data6,setData6}}>
        {children}
    </AppContext.Provider>

  )

}

const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext};