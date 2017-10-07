//single data type

var names = document.querySelector("#friend");

var fruits = ["mango", "banana", "orange", "pine apple"] ;
console.log(fruits);

var mamun = "<h1>my first practice class</h1>" ;
mamun = mamun +  "<p>hello world</p>" ;
for ( i=0 ; i<fruits.length ; i++ ){
    mamun = mamun + "<li>" + fruits[i] + "</li>"
}

names.innerHTML = mamun ;

//css in java sCript 

 var hello = document.querySelector("ul");
 hello.style.listStyle = "none" ;

 var text = document.querySelectorAll("ul li");
 text.style.cssFloat ="left" ;

 var second = document.querySelectorAll("a");

 second.style.color = "red";