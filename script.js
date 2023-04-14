buildmenu();

function buildmenu() {

    document.getElementById("menu").innerHTML = "" //nollställer menyn varje gång så det bara blir en
    let links = [
        ["HEM", "index1.html"],
        ["PRODUKTER", "products.html"],
        ["FILMER", "media1.html"],
        ["OM OSS", "aboutus1.html"],
        ["KONTAKT", "contact1.html"]
    ];

    for(let i = 0; i < links.length; i++)
    {
        //<li><a href="Länk"</a></li>
        let listitem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        link.appendChild(document.createTextNode(links[i][0]))
        listitem.appendChild(link)
        document.getElementById("menu").appendChild(listitem)
    }
}


// 


//lägg url och shop i variabler för att slippa skriva långa koden
const url = "https://randomuser.me/api/?results=15";

const allemployees = document.getElementById("employees");

//gör ett API-anrop med fetch, sen anonyma metoder som gör något med datan som hämtas
fetch(url)
    .then(function(response){return response.json()})
    .then(function(data){

        let employees = data.results //bra att lägga svaret i en egen variabel, man kan behöva använda tex data.result. I detta fall är products och data samma sak

        employees.map(function(employee){ //som en foreach som loopar igenom produkterna. Körs en gång för varje produkt

            console.log(employee) //loggar alla produkter i consolen, så att man kan felsöka lite lättare

            let card = document.createElement("div")  //Skapar elementet card i HTML
            card.setAttribute("class", "card")

            let img = document.createElement("img")
            img.src = employee.picture.large

            let username = document.createElement("h3") //Skapar titeln i kortet
            username.setAttribute("class", "username")
            username.innerHTML = employee.name.first + " " + employee.name.last

            let phone = document.createElement("p")
            phone.setAttribute("class", "phone") //Skapar en klass åt elementet
            phone.innerHTML = employee.cell

            let email = document.createElement("p")
            email.setAttribute("class", "email") //Skapar en klass åt elementet
            email.innerHTML = employee.email

        
            
            card.appendChild(img)
            
            card.appendChild(username)
            
            card.appendChild(phone)

            card.appendChild(email)
            
            allemployees.appendChild(card) //Lägger in allt vi skapat i kortet till diven shop

        }) 

        //Detta är HTML:en som skapas ovan:
    //     
    //     <div class="card">
    //         <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
    //         <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
    //         <p class="price">$109.95</p>
    //         <p class="description">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to
    //             15 inches) in the padded sleeve, your everyday</p>
    //         <input type="button" value="Add to cart" onclick="addtocart(1)">
    //     </div>
    // 
    })

    function addToCart(id){
        alert("Produkt tillagd " + id)
    }