
let myImages = document.querySelector ('#poster')
let images = ["luffy.jpg" ,"zoro.jpg", "sanji.jpeg" , "nami.jpeg" , "robin.jpeg" ]
let imgsBox = document.querySelector("#posters")
let x = 0



function slideshow(){
    
    myImages.setAttribute ('src' , images[x])
    setTimeout  (function() {
        slideshow();} ,2000)
        if(x== images.length -1){
            x=0
        }
        else{
            x++
        }
        
        
       
}
slideshow()