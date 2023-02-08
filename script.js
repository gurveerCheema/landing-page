let imgArr=[
    "https://belvish.com/wp-content/uploads/2022/02/jennifer-lopez-still-600x600.jpg",
    "https://www.jiomart.com/images/product/600x600/491392415/wild-stone-forest-spice-edp-perfume-for-men-100-ml-product-images-o491392415-p491392415-0-202203142345.jpg",
    "https://thameenfragrance.com/wp-content/uploads/2022/01/peregrina-sami-resized-correct-600x600.jpg",
    "http://atlas-content-cdn.pixelsquid.com/stock-images/perfume-bottle-dox7ee1-600.jpg"
   
];
const image_Sliding = [
    { transform: 'translateX(0vw)' },
    { transform: 'translateX(30vw)' }
  ];
  
  const image_timing = {
    duration: 400,
    iterations: 1,
  }
  
let slider_Img = document.getElementById("slider-img");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev")
let imgIndex= 0;
let circle_btn_updating_variable=0;
let circle_Btn = Array.from(document.getElementsByClassName("fa-regular fa-circle"))
slider_Img.src =imgArr[0];
circle_Btn[0].classList.remove('fa-regular');
circle_Btn[0].classList.add('fa-solid');

circle_Btn.forEach(e=>{
    e.addEventListener("click",()=>{
      imgIndex=circle_Btn.indexOf(e)
        slider_Img.src=imgArr[imgIndex]
        updateCircleBtns();
        pauser()
    })
})
function reUpdateCircleBtns(){
   
    let no=imgIndex-1
    if(no<0){
     no=imgArr.length-1
    }
    if(no>imgArr.length-1){
        no=0

    }


    circle_Btn[no].classList.add('fa-regular');
    circle_Btn[no].classList.remove('fa-solid');
    console.log("no",no);
}
function reUpdateCircleBtns2(){
       
   
    let no=imgIndex+1
    if(no<0){
     no=imgArr.length-1
    }
    if(no>imgArr.length-1){
        no=0

    }


    circle_Btn[no].classList.add('fa-regular');
    circle_Btn[no].classList.remove('fa-solid');
    console.log("no",no);

}
function updateCircleBtns(){
    reUpdateCircleBtns();
    reUpdateCircleBtns2()
    console.log(imgIndex);
  circle_Btn[imgIndex].classList.remove('fa-regular');
  circle_Btn[imgIndex].classList.add('fa-solid');
}
console.log(circle_Btn)
function interval(index){
slider_Img.animate(image_Sliding,image_timing)

    if(index===-1){
        imgIndex--;
       
        if(imgIndex<0){
            imgIndex=imgArr.length-1
        }
       
    }
    else{
        imgIndex++;
if(imgIndex>imgArr.length-1){
    imgIndex=0
}


    


}
slider_Img.src=imgArr[imgIndex];

updateCircleBtns();



}
let timer = setInterval(interval,4000)
function pauser(){
  clearInterval(timer);
  timer=setTimeout(interval,2000);
  setTimeout(resumer,2000)
}
function resumer(){
    clearTimeout(timer);
    timer=setInterval(interval,4000)
}
