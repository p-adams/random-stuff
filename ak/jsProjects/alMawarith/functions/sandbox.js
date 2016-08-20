var authors = new Array();
var titles = new Array();
var copies = new Array();

function getAuthor(){
    first = document.getElementById("author"); 
    authors.push(first.value);
    first.value = "";
}
function getTitle(){
    last = document.getElementById("title").value;   
}
function getISBN(){
    email = document.getElementById("isbn").value;    
}
function addTitle(){
    bookIndex = document.getElementById("catalog").selectedIndex;
    bookTitle = document.getElementById("catalog").options;
    title = bookTitle[bookIndex]; 
    titles.push(title.value);
    q = document.getElementById("quantity");
    //copies.push(q.value);
    sessionStorage.setItem("bookTitles", JSON.stringify(titles));
    var storedDTitles = sessionStorage.getItem("titles");
    if (storedDTitles) {
        title = JSON.parse(storedDTitles);
}
    
}
function purchase(){
     
    for (i=0; i<=sessionStorage.length-1; i++)  
    {   
        key = sessionStorage.key(i);  
        val = sessionStorage.getItem(key);
        window.alert(key + " " + val);
    } 


    /*document.getElementById("orderForm").innerHTML= q + " : " + title;
    var showAuthors = authors.join("\n");
    var showTitles = titles.join("\n");
    var showCopies = copies.join("\n");
    document.getElementById("searchedAuthors").innerHTML = showAuthors;
    var resultList = "<tr><th>Titles</th><th>Quantity</th></tr>\n";
    document.getElementById("selectedTitles").innerHTML = "";*/
        
       
    
}
