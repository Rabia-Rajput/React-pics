function SearchBar (){
    const handleForSubmit = () =>{
        console.log ('need to tell parent about some data');
    };
   
    return( <div> 
        <form onSubmit={handleForSubmit}>

        
        <input/>
        </form>
         
    </div>);


    
}
export default  SearchBar;