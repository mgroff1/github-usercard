/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


let gitUsers = [
  'mgroff1',
  'wes-white',
  'chrisbonifacio',
  'mngmay',
  'jquery',
  'google'
];

// axios.get(`https://api.github.com/users/${user}`)

// let gitRepoData = axios.get(`https://api.github.com/repos/:${owner}/:repo/stats/contributions`)
gitData = user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(userdata => {
      console.log(userdata)
      gitCards(userdata.data)
    })

}

gitUsers.forEach(user => {
  gitData(user)
})

const gitCards = user => {
  let entry = document.querySelector('.cards')
  let newCard = document.createElement('div')

//
//   newCard.innerHTML = `
//   <div class="card">
//   <img src=${user.avatar_url} />
//   <div class="card-info">
//     <h3 class="name">${user.name}</h3>
//     <p class="username">${user.login}</p>
//     <p>Location: ${user.location}</p>
//     <p>Profile:
//       <a href=${user.html_url}>${user.html_url.toString()}</a>
//     </p>
//     <p>Followers: ${user.followers}</p>
//     <p>Following: ${user.following}</p>
//     <p>Bio: ${user.bio}</p>
//   </div>
// </div>`

  let creator = (ele, attributes, ...children) => {
    const el = document.createElement(ele)

    for (key in attributes) {
      el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child))
      } else {
        el.appendChild(child)
      }
    })

    return el
  }

  let acard = creator('div',{class:'card'},creator('img',{src:user.avatar_url}));
  let bcard = creator('span',{class:'card-info'},creator('h3',{class:'name'},`${user.name}`));
  let ccard = creator('div',{class:' '},creator('p',{class:'username'},`${user.login}`),
creator('p',{},`Location: ${user.location}`),creator('p',{},
creator('a',{href:user.html_url},user.html_url.toString())),creator('p',{},`Followers: ${user.followers}`),
creator('p',{},`Following: ${user.following}`));
  // creator('p',{},"Profile:"),creator('a',{href:`user.html_url`}),user.followers,user.following))
 entry.appendChild(acard);
 acard.appendChild(bcard);
 bcard.appendChild(ccard);
}
//
// let acc = document.createElement('button');
// let panel = document.createElement('div');
// let i;
//   entry.appendChild(newCard);
//   (`https://api.github.com/repos/:${user}/:repo/stats/contributions`)
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   })
// }
// }
