/* const cardContainer =document.querySelector(".cardContainer");
const slides = document.querySelectorAll('.slides');
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');
let counter = 1;
const size = slides[0].clientwidth;
cardContainer.style.transform='translateX('+(size*counter)+'px';
next.AddEventListner('click',()=>{
    if(counter>=slides.length)return;
    cardContainer.style.transition='transform 0.4s ease-in-out';
    counter++;
    cardContainer.style.transform='translateX('+(-size*counter)+'px';
});
prev.AddEventListner('click',()=>{
    if(counter<=0)return;
    cardContainer.Style.Transition = 'Transform 0.4s Ease-In-Out';  
    counter--;  
    cardContainer.Style.Transform = 'TranslateX(' + (-size * counter ) + 'px'; 
});
cardContainer.AddEventListener('Transitionend',()=>{  
    Console.Log(slides[counter]);  
    if(slides[counter].id ==='lastslide');{  
    cardContainer.Style.Transition = 'None';  
    counter = slides.Length - 2;      
    cardContainer.Style.Transform = 'TranslateX(' + (-size * counter ) + 'Px';  
    }  
  });  
  cardContainer.AddEventListener('Transitionend',()=>{  
    Console.Log(slides[counter]);  
    if(slides[counter].id ==='lastslide');{  
    cardContainer.Style.Transition = 'None';  
    counter = slides.Length - counter;      
    cardContainer.Style.Transform = 'TranslateX(' + (-size * counter ) + 'Px';  
    }  
  });  
 */
const cardContainer = Document.QuerySelector(".cardContainer");  
const Slides = Document.QuerySelectorAll('.Slides');  
const Next = Document.QuerySelector('#Next');  
const Prev = Document.QuerySelector('#Prev');  
let Counter = 1 ;  
const Size = Slides[0].ClientWidth;  
cardContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
Next.AddEventListener('Click',()=>{  
   if (Counter>=Slides.Length)return;  
   cardContainer.Style.Transition = 'Transform 0.4s Ease-In-Out';  
   Counter++;  
   cardContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
 });  
 Prev.AddEventListener('Click',()=>{  
   if (Counter<=0)return;  
   cardContainer.Style.Transition = 'Transform 0.4s Ease-In-Out';  
   Counter--;  
   cardContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
 });  
 cardContainer.AddEventListener('Transitionend',()=>{  
   Console.Log(Slides[Counter]);  
   if(Slides[Counter].Id ==='Lastslide');{  
   cardContainer.Style.Transition = 'None';  
   Counter = Slides.Length - 2;      
   cardContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
   }  
 });  
 cardContainer.AddEventListener('Transitionend',()=>{  
   Console.Log(Slides[Counter]);  
   if(Slides[Counter].Id ==='Firstslide');{  
   cardContainer.Style.Transition = 'None';  
   Counter = Slides.Length - Counter;      
   cardContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
   }  
 });