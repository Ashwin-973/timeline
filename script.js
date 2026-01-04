

const triggers=document.querySelectorAll('.track-trigger')
const cards=document.querySelectorAll('.card')
const progressBar=document.querySelector('.track-progress')
const scrollContainer=document.querySelector('.sticky-scroll-container')

const totalTriggers=triggers.length-1

let maxScrollHeight;

const calcScrollDimensions=()=>{
    maxScrollHeight=scrollContainer.offsetHeight - window.innerHeight;
}

const calcProgress=()=>
{
    let scrolled=0;
    const rect=scrollContainer.getBoundingClientRect();
    scrolled=-rect.top;
    if(scrolled<0) return;

    if(scrolled>maxScrollHeight) scrolled=maxScrollHeight
    console.log(scrolled)

    //increase height of progress bar
    const progress=(scrolled/maxScrollHeight)*100;
    progressBar.style.height=`${progress}%`

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

calcScrollDimensions()

window.addEventListener('resize',calcScrollDimensions)
window.addEventListener('scroll',calcProgress)