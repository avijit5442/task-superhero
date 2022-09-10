import { useState} from "react"
import axios from "axios"
export default function LandingPage(props){
    const [superheros,setSuperHeros]=useState([])
    const [powerstats,setPowerstats]=useState({})
    const [appearance,setAppearance]=useState({})
    const [biography,setBiography]=useState({})
    const [connections,setConnections]=useState({})
    const [work,setWork]=useState({})
    const [images,setImages]=useState({})
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then((response)=>{
        setSuperHeros(response.data)
    })
    const handleClick=(e)=>{
        document.getElementById("data").style.display="block"
        let ID=e.target.id
    axios.get(`https://akabab.github.io/superhero-api/api/powerstats/${ID}.json`)
    .then((response)=>{
        setPowerstats(response.data)
    })
    axios.get(`https://akabab.github.io/superhero-api/api/appearance/${ID}.json`)
    .then((response)=>{
        setAppearance(response.data)
})
axios.get(`https://akabab.github.io/superhero-api/api/biography/${ID}.json`)
.then((response)=>{
    setBiography(response.data)
})
axios.get(`https://akabab.github.io/superhero-api/api/connections/${ID}.json`)
.then((response)=>{
    setConnections(response.data)
})
axios.get(`https://akabab.github.io/superhero-api/api/work/${ID}.json`)
.then((response)=>{
    setWork(response.data)
})
axios.get(`https://akabab.github.io/superhero-api/api/images/${ID}.json`)
.then((response)=>{
    setImages(response.data)
})
    }
    function handleSearch(e){
        var input=document.querySelector("#search").value.toLowerCase();
        var demo=document.querySelectorAll('#demo')

        for(let i=0;i<demo.length;i++){
            if(!demo[i].innerHTML.toLowerCase().includes(input)){
             demo[i].style.display="none"
            }
            else{
             demo[i].style.display="block"
            }
        }
        
    }
    return(
        <>
        <div className="d-flex justify-content-center align-items-center">
           <h2 className="text-success">Find Your SuperHeros</h2>
        </div>
        <br/>
        <div className="d-flex justify-content-center">
           <input id="search"  type="text" style={{width:"600px",height:"50px",borderRadius:"20px",boxShadow:"2px 5px 6px green"}}/>
           <button onClick={handleSearch} className="btn btn-success btn-sm mx-4" >Search</button>
        </div>
        <hr/>
        <div className="row container">
        <div className="d-flex flex-wrap col-8 overflow-auto" style={{height:"600px"}}>
        {
            superheros.map((items)=> 
            <div key={items.id} className="card m-4 w-25 "  id="demo">
            <img className="card-img-top" src={items.images.sm} style={{width:"200px",height:"200px"}} alt="image"/>
            <div className="card-header">
             <h4 className="text-center">{items.name}</h4>
            </div>
            <div className="card-body"> 
            <button id={items.id} onClick={handleClick} className="btn btn-info">Know Details</button>  
            </div>
            </div>
            )
        }
        </div>
        <div className="col-4" id="data" style={{display:"none"}}>
        {
            <div className="card">
                <img className="card-img-top" src=""/>
            
            <div className="card-header">
               <h2 className="text-center text-info">{biography.fullName}</h2>
            </div>
            <div className="card-body">
                 <ul> 
                    <li><strong className="text-danger">Apperance</strong>
                        <ul>
                        <li>Gender : {appearance.gender}</li>
                        <br/>
                        <li>Hair Color : {appearance.hairColor}</li>
                        <br/>   
                        <li>Eye Color : {appearance.eyeColor}</li>
                        </ul>
                    </li>
                <li><strong className="text-danger">stamina & Powers : </strong>
                <ul>
                        <li>Intelligence : {powerstats.intelligence}</li>
                        <br/>
                        <li>Speed : {powerstats.speed}</li>
                        <br/>
                        <li>Power : {powerstats.power}</li>
                    </ul>
                </li>
                    <li><strong className="text-danger">Biography :</strong>
                    <ul>
                        <li>AlterEgo : {biography.alterEgos}</li>
                        <br/>
                        <li>Publisher : {biography.publisher}</li>
                        <br/>
                        <li>Alignment : {biography.alignment}</li>
                    </ul>
                    </li>
                    <li><strong className="text-danger">Work : </strong>
                    <ul>
                        <li>work : {work.occupation}</li>
                    </ul>
                    </li>
                    <li><strong className="text-danger">Connection : </strong>
                    <ul>
                        <li>Relatives : {connections.relatives}</li>
                        <br/>
                    </ul>
                    </li>

                 </ul>
            </div>
            </div>
        }
        </div>
        </div>


        </>

    )
}