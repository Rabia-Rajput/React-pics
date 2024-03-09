import axios from "axios";

const searchImages = async () =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: { 
            Authorization: 'Client-ID v4cx4GOJgCXTLgUUiBDtR4afbbvVhdTeg7fOdbCH8dA'
        },
        params:{
            query: 'cars'
        }
    });
    return response;

};

export default searchImages;