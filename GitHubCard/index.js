
const followersArray = [];

let gitUsers = [
  'mgroff1',
'wes-white',
'chrisbonifacio',
'mngmay',
'jquery',
'google'
]

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

  newCard.innerHTML = `
  <div class="card">
  <img src=${user.avatar_url} />
  <div class="card-info">
    <h3 class="name">${user.name}</h3>
    <p class="username">${user.login}</p>
    <p>Location: ${user.location}</p>
    <p>Profile:
      <a href=${user.html_url}>${user.html_url.toString()}</a>
    </p>
    <p>Followers: ${user.followers}</p>
    <p>Following: ${user.following}</p>
    <p>Bio: ${user.bio}</p>
  </div>
</div>`

entry.appendChild(newCard)

}
