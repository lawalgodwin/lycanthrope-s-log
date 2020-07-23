class Event {
    constructor(name, day) {
        this.name = name
        this.day = day
    }
    get eventNameAndDay() {
        return {
            eventName: this.name,
            day: this.day
        }
    }
}

class EventLogs {
    constructor(){
        this.event = {}
        this.events = []
    }
   
    get allLogs(){
        return this.events;
    }

    logEvent(eventName, day) {
        let newEvent = new Event(eventName, day)
        this.event[newEvent.day] = newEvent
        this.events.push(newEvent)
    }

    getLogForDay(day){
        let dayEvents = this.events.filter((e) => (e.day === day))
        if(dayEvents.length === 0) return `No events log for the day ${day}`
        return this.events.filter((event) => (
            event.day === day 
        ))
    }
    getTransformationInfo() {
        let re = /pizza/
        let transformLogs = []
       

        let pizzaLogs = this.events.filter((event) => (re.test(event.name)))
         pizzaLogs.forEach((v) => {
            transformLogs.push(`jack transformed on day ${v.day}`)
        })
        return transformLogs
    }
}

let eventLogs = new EventLogs()
eventLogs.logEvent("dancing", 1)
eventLogs.logEvent("trekking", 1)
eventLogs.logEvent("dancing", 2)
eventLogs.logEvent("eating pizza", 2)

console.log(eventLogs.allLogs)
console.log(eventLogs.getLogForDay(2))
console.log(eventLogs.getTransformationInfo())
