const h1tag = document.getElementById("h1tag")

async function countriesList() 
{
    countries = await fetch("https://restcountries.com/v3.1/all").then(resp => resp.json())
    console.log(countries)
    const h1 = document.createElement("h1")
    h1.innerHTML = "COUNTRIES LIST"
    
    const ol = document.createElement("ol") 
    const body = document.getElementById("body")
    body.appendChild(h1)
    document.body.appendChild(ol)
    countries.map(country=>{
         const li = document.createElement("li")
         const article = document.createElement("article")
         const img = document.createElement('img');
         const h3 = document.createElement('h3');
         img.src = country.flags.png;
         img.alt = country.flags.alt;
         h3.textContent = country.name.common;
         article.appendChild(h3)
         article.appendChild(img)
         li.appendChild(article)
         ol.appendChild(li)
    })

   
} 

if(h1tag)
    {
        h1tag.remove()
        countriesList()
        
    }
  

