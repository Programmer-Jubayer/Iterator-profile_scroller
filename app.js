// class API {
//     constructor () {

//     }

//     async getData() {
//         const response = await fetch(`https://cors-anywhere.herokuapp.com/https://randomuser.me/api/`)

//         const responseData = await response.json();
//         console.log(responseData)
//     }
// }

// const api = new API();
// console.log(api.getData())

const data = [
    {
        name: "John Doe",
        age: 32,
        gender: "male",
        lookingFor: "female",
        location: "Boston MA",
        img: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
        name: "Jena Jui",
        age: 32,
        gender: "female",
        lookingFor: "male",
        location: "London UK",
        img: "https://randomuser.me/api/portraits/women/82.jpg"
    },

    {
        name: "Mike Humbar",
        age: 40,
        gender: "male",
        lookingFor: "female",
        location: "Mian MA",
        img: "https://randomuser.me/api/portraits/men/39.jpg"
    },


    {
        name: "Emma Watson",
        age: 28,
        gender: "female",
        lookingFor: "male",
        location: "Burminghome UK",
        img: "https://randomuser.me/api/portraits/women/40.jpg"
    }
];

const profile = profileIterator(data);

nextProfile();

// Next event listner
document.getElementById("next").addEventListener("click", nextProfile);

// next profile
function nextProfile() {
  
    const currentProfile = profile.next().value;
    if(currentProfile !== undefined) {
        document.querySelector(".profileDisplay").innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">I'm looking for a ${currentProfile.lookingFor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>    
        `;
    
        document.querySelector(".imageDisplay").innerHTML = `
            <img src="${currentProfile.img}">
        `;
    } else {
        // reload the page
        window.location.reload();
    }
}

// Function for iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    
    return {
        next: function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done: true}
        }
    }
}