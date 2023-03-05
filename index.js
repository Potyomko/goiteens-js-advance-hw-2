const startRef = document.querySelector(".start")
const stopRef = document.querySelector('.stop')
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
console.log();
  const timer_colors ={
    intervalId: null,
    isActive: false,
    start(){
        if (this.isActive) {
            return
        }
        this.intervalId = setInterval(()=>{
            const bodyRef = document.body
            bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
            console.log(bodyRef.style.backgroundColor);
            this.isActive = true;
        },1000)
    },
    stop(){
        clearInterval(this.intervalId)
        
        this.isActive = false
    }
  }
  startRef.addEventListener('click',timer_colors.start.bind(timer_colors))
  stopRef.addEventListener('click',timer_colors.stop.bind(timer_colors))

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };










  const daysEl = document.querySelector('.days');
  const hoursEl = document.querySelector('.hours');
  const minsEl = document.querySelector('.mins');
  const secsEl = document.querySelector('.secs');
  
  const date = new Date("Jan 1, 2024 00:00:00").getTime();
  
  const interval = setInterval(() => {
  
      const now = new Date().getTime();
      const time = date - now;
  
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
  
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minsEl.textContent = mins;
      secsEl.textContent = secs;
  
  }, 1000);