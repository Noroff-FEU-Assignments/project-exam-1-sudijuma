const staff = [
    {
        name: 'John Astro',
        occupation: 'Content creator',
        interest: 'Space of course, duh!?',
    },
    {
        name: 'Steven Bistro',
        occupation: 'Emotional support',
        interest: 'Basketball and Spaceforce',
    },
    {
        name: 'Sarah Flex',
        occupation: 'Technical supervisor',
        interest: 'Black holes and pointy asteroids',
    },
];

const crew = document.getElementsByClassName(".staff-box");

function staffPicker() {
    for (const i in staff) {
        let staffList = document.createElement(".content");
        staffList.innerHTML = `    
        <p class="staff-name">${staff[i].name}</p>
        <p class="staff-occupation">${staff[i].occupation}</p>
        <p class="staff-interest">${staff[i].interest}</p>
        <div class="staff-image-box">
          <img src="" alt="" srcset="" />
        </div>
        <button class="prev">Previous</button>
        <button class="next">Next</button>`
        crew.append(staffList);        
    }
}
staffPicker();