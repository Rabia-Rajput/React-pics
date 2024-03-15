import searchImages from "./api";
import ImageList from './components/ImageList';
import SearchBar from "./components/SearchBar";


function App (){
    const handleSubmit =async (term) =>{
      await  searchImages(term);
       
    };
    return <div>
        <SearchBar onSubmit = {handleSubmit} />
        <ImageList  />

    </div>
}
export default App;