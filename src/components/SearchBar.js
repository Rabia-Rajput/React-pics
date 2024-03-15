import { useState } from "react";

function SearchBar ({onSubmit}){
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // onSubmit(
        //     //  never ever ever do this
        //     // document.querySelector('input').value
        // );

        onSubmit('');
    };
    const handleChange = (event) =>{
        console.log(event.target.value);

    };
   
    return( <div> 
        <form onSubmit={handleFormSubmit}>

        
        <input onChange={handleChange}/>
        </form>
         
    </div>);


    
}
export default  SearchBar;