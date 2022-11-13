import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import movieApi from "../../common/apis/MovieApi"
import {API_KEY} from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(data)=>{
    
    
   
        const res= await movieApi.get(`?apiKey=${API_KEY}&s=${data}&type=movie`);
       
        return res.data;
      
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async(data)=>{
    
    
   
        const res= await movieApi.get(`?apiKey=${API_KEY}&s=${data}&type=series`);
       
        return res.data;
      
})
export const fetchAsyncDataDetails = createAsyncThunk("movies/fetchAsyncDataDetails", async(id)=>{
    
    
   
        const res= await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
       
        return res.data;
      
})

const initialState={
    movies:{},
    shows:{},
    selectedDataDetail:{},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    // i faced error here write reducers
    reducers:{
        
        removeSelectedData:(state)=>{
            state.selectedDataDetail={};

        }

    },
    extraReducers:{
        //async actions creator

        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Filled successfully")
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected")
        },  
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Filled successfully")
            return {...state,shows:payload}
        },
        [fetchAsyncDataDetails.fulfilled]:(state,{payload})=>{
            console.log("Filled successfully")
            return {...state,selectedDataDetail:payload}
        },

    }
})



export const { removeSelectedData } = movieSlice.actions;

export default movieSlice.reducer
export const getAllMovies =(state)=> state.movies.movies; //state.reducers.propertyname
export const getAllShows =(state)=> state.movies.shows
export const getSelectedData =(state)=>state.movies.selectedDataDetail;
