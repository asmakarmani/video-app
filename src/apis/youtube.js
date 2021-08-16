import axios from 'axios';

const KEY ='AIzaSyBCJ6ewhTeP71SaWy9ZuafljYdB8obkA2Y';  // public available let users browser use it 

export default axios.create(

    {
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    type:'video',
    key:KEY
    
      }
  }
);