export const secsToDateTime = (secs) => {
    var time = new Date(1970, 0, 1); // Epoch
    time.setSeconds(secs);
    return time;
}

const convertMonthToName = (month) => {
    let monthName;
    
    if (month === 0) monthName = "January"
    if (month === 1) monthName = "February"
    if (month === 2) monthName = "March"
    if (month === 3) monthName = "April"
    if (month === 4) monthName = "May"
    if (month === 5) monthName = "June"
    if (month === 6) monthName = "July"
    if (month === 7) monthName = "August"
    if (month === 8) monthName = "September"
    if (month === 9) monthName = "October"
    if (month === 10) monthName = "November"
    if (month === 11) monthName = "December"

    return monthName
}

export const completeDate = (date) => {
    let month = convertMonthToName(new Date(date).getMonth())
    let day = new Date(date).getDate()
    let year = new Date(date).getFullYear()

    let hours = new Date(date).getHours()
    let minutes = new Date(date).getMinutes()
    let min = minutes < 10 ? "0" + minutes : minutes
    let fullDate = `${month} ${day} ${year} at ${hours}:${min}`

    return fullDate
}