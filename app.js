const countdown =()=>{
    const endDate=new Date("January 30, 2023 00:00:00").getTime()

    const now= new Date().getTime()
    const difference=endDate-now

    //second, minutes, hours, days constant
    let seconds=1000
    let minutes=seconds*60
    let hours=minutes*60
    let days=hours*24

    let timeDays=Math.floor(difference/days)
    let timeHours=Math.floor(difference%days/hours)
    let timeMinutes=Math.floor(difference%hours/minutes)
    let timeSeconds=Math.floor(difference%minutes/seconds)

    timeHours=timeHours<10?"0"+timeHours: timeHours
    timeMinutes=timeMinutes<10?"0"+timeMinutes: timeMinutes
    timeSeconds=timeSeconds<10?"0"+timeSeconds: timeSeconds


    document.getElementById("days").innerHTML=timeDays
    document.getElementById("hours").innerHTML=timeHours
    document.getElementById("minutes").innerHTML=timeMinutes
    document.getElementById("seconds").innerHTML=timeSeconds
}

setInterval(countdown,1000)