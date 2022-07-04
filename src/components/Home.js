import styled from 'styled-components'
import React from 'react'
import ImgSlider from './ImgSlider'
import Viewer from './Viewer'
import Recommended from './Recommended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import { collection, getDocs, where, query} from "firebase/firestore";

const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    
    const getData = async()=>{
      
      const q = query(collection(db,'movies'));
      
      const querySnapshot = await getDocs(q);
      
      const data = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id,
      }))

      for(let i = 0 ; i < data.length ; i++){

        let movie = data[i];

        if(movie.type === "recommend"){
          recommends = [...recommends, movie];
        }else if(movie.type === "new"){
          newDisney = [...newDisney, movie];
        }else if(movie.type === "original"){
          originals = [...originals, movie];
        }else{
          trending = [...trending, movie];
        }

      }

      dispatch(setMovies({
        recommend:recommends,
        newDisney:newDisney,
        original:originals,
        trending:trending,
      }));

    }

    getData();  

  },[userName])
  

  return (
    <Container>
      <ImgSlider/>
      <Viewer/>
      <Recommended/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url('https://raw.githubusercontent.com/MayurMadhwani/demo-repo/main/home-background.png') center center / cover no-repeat fixed;
    content : '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

  
`

export default Home