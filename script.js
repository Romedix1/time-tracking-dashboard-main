const timeLineDay = document.querySelector('#nav-timeline-day');
const timeLineWeek = document.querySelector('#nav-timeline-week');
const timeLineMonth = document.querySelector('#nav-timeline-month');

let dayContainer = document.querySelector('#day-container')
let weekContainer = document.querySelector('#week-container')
let monthContainer = document.querySelector('#month-container')

// day

timeLineDay.addEventListener('click',()=>{
    if(weekContainer.classList.contains('active'))
    {
        weekContainer.style.display = "none"
        weekContainer.classList.remove('active')
        timeLineWeek.classList.remove('active')
    } 
    if(monthContainer.classList.contains('active'))
    {
        monthContainer.style.display = "none"
        monthContainer.classList.remove('active')
        timeLineMonth.classList.remove('active')
    }

    dayContainer.style.display = "grid"
    dayContainer.classList.add('active')
    timeLineDay.classList.remove('active')

})

// week

timeLineWeek.addEventListener('click',()=>{
    if(dayContainer.classList.contains('active'))
    {
        dayContainer.style.display = "none"
        dayContainer.classList.remove('active')
        timeLineDay.classList.remove('active')
    } 
    if(monthContainer.classList.contains('active'))
    {
        monthContainer.style.display = "none"
        monthContainer.classList.remove('active')
        timeLineMonth.classList.remove('active')
    }

    weekContainer.style.display = "grid"
    weekContainer.classList.add('active')
    timeLineWeek.classList.add('active')
})

// month

timeLineMonth.addEventListener('click',()=>{
    if(weekContainer.classList.contains('active'))
    {
        weekContainer.style.display = "none"
        weekContainer.classList.remove('active')
        timeLineWeek.classList.remove('active')
    } 
    if(dayContainer.classList.contains('active'))
    {
        dayContainer.style.display = "none"
        dayContainer.classList.remove('active')
        timeLineDay.classList.remove('active')
    }

    monthContainer.style.display = "grid"
    monthContainer.classList.add('active')
    timeLineMonth.classList.add('active')

})