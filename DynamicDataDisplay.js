async function getMovies()
{
    let search=document.querySelector(".search")
    console.log(search.value);
    let omdbmovies= await fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=6d708f36`);
    console.log("connected to API..");
    let {Search:movies}= await omdbmovies.json();
    console.log(movies);
    let section=document.getElementById("movie");

    // Displaying the msg "Sorry, No Data Found..!!!!!!"
    if(movies==undefined && search.value=="")
    {
        console.log("Sorry, No Data Found..!!!!!!");
        let div1= document.createElement("div");
        div1.className="nodata"
        let h2=document.createElement("h2");
        h2.innerText="Sorry, Data Not Found..!!!!!!";
        div1.append(h2);
        section.append(div1);
    }
    else{
    for(let {Poster,Title,Year} of movies)
    {
        let div=document.createElement("div");
        div.className="card";
        let h2=document.createElement("h2");
        h2.innerText=Title;
        let img=document.createElement("img")
        img.src=Poster;
        img.alt="OOPSssss...!!!!!!!!!  No Image"
        let h3= document.createElement("h3")
        h3.innerText=Year;
        div.append(h2);
        div.append(img);
        div.append(h3);
        section.append(div);
    }
}
}



//--------- Load the new data without page reloading---------------------

function removeMovie()
{
    let search= document.querySelector(".search")
    let section=document.getElementById("movie");
    if(search.value=="")
    {
        section.remove();
        let mysections=document.createElement("section")
        mysections.id="movie";
        let body=document.body;
        body.append(mysections);
    }

   
}
