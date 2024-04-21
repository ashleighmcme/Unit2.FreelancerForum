//define array of freelancer.  Use name/price/occ for your keys.
const freelancers = [
    {name: "Ashleigh", price: 45, occupation: "Programmer"},
    {name: "Sam", price: 40, occupation: "Social Media Manager"},
    {name: "Kate", price: 80, occupation: "Set Designer"},
    {name: "Jamie", price: 35, occupation: "Personal Assistant"},
    {name: "Kingsley", price: 50, occupation: "Interior Designer"},
    {name: "Bradleigh", price: 72, occupation: "Costume Designer"},
    {name: "Ken", price: 55, occupation: "Finance Manager"},
    {name: "Olen", price: 60, occupation: "Fitness Engineer"},
];
console.log(freelancers)


//write function to render freelancer data/make sure to call it
function getRandomFreelancers() {
    const randomFreelancers = [];
    const copyOfFreelancers = [...freelancers];

    for (let i = 0; i < 3; i++) {
        const randomFreelancerIndex = Math.floor(Math.random() * copyOfFreelancers.length);
        const randomFreelancer = copyOfFreelancers.splice(randomFreelancerIndex, 1)[0];
        randomFreelancers.push(randomFreelancer);
    }

    return randomFreelancers;
}

function displayRandomFreelancers() {
    const randomFreelancers = getRandomFreelancers();
    randomFreelancers.forEach(freelancer => {
        console.log(`Talent: ${freelancer.name}, Investment: ${freelancer.price}, Profession: ${freelancer.occupation}`);
    });
}

displayRandomFreelancers();



//write a function to generate a random new freelancer and call it
//set interval for new generation
//calculate average starting price for freelancers
//when/how to call this function when freelancer updates.

