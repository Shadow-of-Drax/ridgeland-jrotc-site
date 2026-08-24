// ==========================================
// PANTHER BATTALION EVENT CALENDAR
// ==========================================

// ADD AND EDIT EVENTS HERE
// Date format MUST be: YYYY-MM-DD

const events = [
    {
        date: "2026-08-29",
        name: "Rhea County Raider Challenge",
        location: "885 EAGLE LANE, EVENSVILLE, TN 37332",
        departure: "6:00 AM",
        eventTime: "8:00 AM",
        type: "Raider Competition"
    },
    {
        date: "2026-09-05",
        name: "Etowah Raider Challenge",
        location: "6565 Putnam Ford Drive, Woodstock, GA 30189",
        departure: "6:00 AM",
        eventTime: "8:00 AM",
        type: "Raider Competition"
    },
    {
        date: "2026-09-15",
        name: "Adairsville Raider Challenge",
        location: "519 Old Highway 41, Adairsville, GA 30103",
        departure: "6:00 AM",
        eventTime: "8:00 AM",
        type: "Raider Competition"
    },
    {
        date: "2026-09-26",
        name: "Sectional Qualifier Raider Challenge",
        location: "TBD",
        departure: "TBD",
        eventTime: "TBD",
        type: "Raider Competition"
    },
    {
        date: "2026-10-03",
        name: "Dalton Raider Challenge",
        location: "Dalton Academy, 2000 S Thornton Ave, Dalton, GA 30720",
        departure: "6:00 AM",
        eventTime: "8:00 AM",
        type: "Raider Competition"
    },
    {
        date: "2026-10-22",
        name: "Army National Raider Challenge",
        location: "Fort Knox, KY 40121",
        departure: "TBD",
        eventTime: "TBD",
        type: "Raider Competition"
    },
    {
        date: "2026-11-14",
        name: "Georgia State Raider Challenge",
        location: "Milladgeville, GA 31061",
        departure: "TBD",
        eventTime: "TBD",
        type: "Raider Competition"
    },
    {
        date: "2026-09-04",
        name: "Color Guard Football Game",
        location: "Ridgelad High School",
        departure: "TBD",
        eventTime: "TBD",
        type: "Color Guard"
    }
];


// ==========================================
// DISPLAY EVENTS
// You should not normally need to edit
// anything below this line.
// ==========================================

function displayEvents() {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Convert event dates into actual dates,
    // remove past events, and sort by date.
    const futureEvents = events
        .map(event => ({
            ...event,
            eventDate: new Date(event.date + "T00:00:00")
        }))
        .filter(event => event.eventDate >= today)
        .sort((a, b) => a.eventDate - b.eventDate);


    const nextEventElement =
        document.getElementById("next-event");

    const upcomingList =
        document.getElementById("upcoming-events-list");


    // Stop if this page does not contain the event display.
    if (!nextEventElement || !upcomingList) {
        return;
    }


    // If there are no future events
    if (futureEvents.length === 0) {

        nextEventElement.textContent =
            "Next Event: No Upcoming Events";

        upcomingList.innerHTML =
            "<p>No additional events currently scheduled.</p>";

        return;
    }


   // ==========================================
// NEXT EVENT
// ==========================================

const nextEvent = futureEvents[0];

nextEventElement.innerHTML = `
    Next Event: ${nextEvent.name} - ${formatDate(nextEvent.eventDate)}
    <br>
    <span class="event-details">
        ${nextEvent.location ? nextEvent.location : ""}
        ${nextEvent.type ? " | " + nextEvent.type : ""}
        ${nextEvent.time ? " | " + nextEvent.time : ""}
    </span>
`;


// ==========================================
// UPCOMING EVENTS
// ==========================================

upcomingList.innerHTML = "";

const remainingEvents = futureEvents.slice(1);

if (remainingEvents.length === 0) {
    upcomingList.innerHTML =
        "<p>No additional events currently scheduled.</p>";
    return;
}

remainingEvents.forEach(event => {

    const eventItem = document.createElement("div");

    eventItem.classList.add("upcoming-event-item");

    eventItem.innerHTML = `
        <strong>${formatDate(event.eventDate)} - ${event.name}</strong>
        <br>
        <span class="event-details">
            ${event.location ? event.location : ""}
            ${event.type ? " | " + event.type : ""}
            ${event.time ? " | " + event.time : ""}
        </span>
    `;

    upcomingList.appendChild(eventItem);
});
}

// ==========================================
// FORMAT DATE
// Example: 29 AUG
// ==========================================

function formatDate(date) {

    const day = date
        .getDate()
        .toString()
        .padStart(2, "0");

    const month = date
        .toLocaleDateString("en-US", {
            month: "short"
        })
        .toUpperCase();

    return `${day} ${month}`;
}


// Run the event display
displayEvents();