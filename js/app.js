var  slides=document.querySelectorAll('.slide');

var arrowLeft=$('#arrow-left');
var arrowRight=$('#arrow-right');
var current=0;
var currentForCertificates=0;

var slider=document.querySelector('.sliders');

var leftArrow=document.querySelector('#left');
var rightArrow=document.querySelector('#right');
var certificateSlideImg=document.querySelectorAll('.slide-img');







$(document).ready(function(){


             $(window).on('load',function(){

                       $('#loading').fadeOut();
                       
             });
	
             reset();
              
             slides[0].style.display='block';

             slider.addEventListener('click',function(){
             	            slide();
             });



  
              // console.log(certificateSlideImg.length);
             certificateSlideReset();
             

              certificateSlideImg[2].style.display='block';

          


});
//certificate slide reset
function certificateSlideReset(){
         for(let i=0;i<certificateSlideImg.length;i++){
              	     certificateSlideImg[i].style.display='none';
              }
            

              // certificateSlideImg[2].style.display='block';

              // console.log(certificateSlideImg[5]);
}

//function slide

function slide(){

	      if(current==3){
	      	   current=0;
	      }else{

	      	      reset();
	      	      slides[current].style.display='block';
	      	      console.log(current);
	      	      current+=1;
	      }
}


//hide all the images
function reset(){
         
           for(let i=0;i<slides.length;i++){

           	          slides[i].style.display="none";

           }

}



//left arrow click

leftArrow.addEventListener('click',function(){

	 if(currentForCertificates==0){
	 	currentForCertificates=certificateSlideImg.length;
	 }else{
	 	  currentForCertificates-=1;
	 	  certificateSlideReset();
	      certificateSlideImg[currentForCertificates].style.display='block';
	      console.log(currentForCertificates);
	 }
});

rightArrow.addEventListener('click',function(){
          if(currentForCertificates==certificateSlideImg.length){
          	   currentForCertificates=0;
          }else{
          	  
          	   certificateSlideReset();

          	   certificateSlideImg[currentForCertificates].style.display='block';

          	    currentForCertificates+=1;
          	    console.log(currentForCertificates);
          }
});