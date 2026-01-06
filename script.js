

const triggers=document.querySelectorAll('.track-trigger')
const cards=document.querySelectorAll('.card')
const progressBar=document.querySelector('.track-progress')
const scrollContainer=document.querySelector('.sticky-scroll-container')

const totalTriggers=triggers.length-1

let maxScrollHeight,viewportWidth;

const calcScrollDimensions=()=>{
    maxScrollHeight=scrollContainer.offsetHeight - window.innerHeight;

    viewportWidth=window.innerWidth;
    //the reset when screen size changes
    if(viewportWidth<640){
        progressBar.style.height="2px";
    }
    else{
        progressBar.style.width="2px";

    }

}

const calcProgress=()=>
{
    let scrolled=0;
    const rect=scrollContainer.getBoundingClientRect();
    scrolled=-rect.top;
    if(scrolled<0) return;

    if(scrolled>maxScrollHeight) scrolled=maxScrollHeight

    //increase height of progress bar
    const progress=(scrolled/maxScrollHeight)*100;

    if(viewportWidth<640){
        progressBar.style.width=`${progress}%`

    }
    else{
        progressBar.style.height=`${progress}%`
    }

}

const options = {
    rootMargin: '-45% 0px -55% 0px',  // Trigger when element is in near the center of viewport
    threshold: 0
}

function triggerCallback(entries, observer){

    entries.forEach((entry) => {

        entry.target.classList.toggle('active', entry.isIntersecting);

        if(entry.isIntersecting){
            const activeIndex=entry.target.getAttribute('data-index');
            updateState(activeIndex)
            
        }
        
    })

}

const updateState=(activeIndex)=>{

    if(viewportWidth<640) return;


    //card updation logic
    cards.forEach((card,idx)=>
    {
        card.classList.remove('show','fade');
        if(idx==activeIndex) card.classList.add('show');
        else if(idx<activeIndex) card.classList.add('fade')
    })

}


const triggerObserver = new IntersectionObserver(triggerCallback, options)

triggers.forEach((trigger)=>{
    triggerObserver.observe(trigger)
})

/*------------------------------------------------------------------------------------------------------------------------------------- */



const cardOptions={
    rootMargin:'-50% 0% -50% 0%'
}


const cardCallback=(entries,observer)=>
{
    console.log(entries)
    entries.forEach((entry)=>
    {
        const activeIndex=entry.target.getAttribute('data-card-index')
        const triggerDot=document.querySelector(`[data-index="${activeIndex}"]`)
        triggerDot.classList.toggle('active',entry.isIntersecting)
        // entry.target.classList.toggle("fade",!entry.isIntersecting)
        const trackContent=document.querySelector(`[data-index="${activeIndex}"] .track-content`)
        console.log(trackContent)
        trackContent.classList.toggle("active",entry.isIntersecting)
    })
}





const cardObserver=new IntersectionObserver(cardCallback,cardOptions)

if(!viewportWidth>640){
    cards.forEach((card)=>
    {
        cardObserver.observe(card)
    })
}






calcScrollDimensions()

window.addEventListener('resize',calcScrollDimensions)
window.addEventListener('scroll',calcProgress)