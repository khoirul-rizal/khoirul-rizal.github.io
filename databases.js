const listVFX = [
  {
    title: 'Clean.Inc',
    subtitle: 'Be Game Janitor',
    img: 'images/clean0.png',
    link: 'https://globalgamejam.org/2020/games/cleaninc-video-game-janitor-6'
  },
  {
    title: 'Monday',
    subtitle: 'Be Security',
    img: 'images/monday0.png',
    link: 'https://drive.google.com/open?id=1XqV_FaJmvrJko6vpS4R_oSMwEP5vPmLt'
  },
  {
    title: 'Iluminator',
    subtitle: 'Protect The Engine',
    img: 'images/iluminator.png',
    link: 'https://hapygames.itch.io/luminator'
  }
]

const LoadList = () => {
  let myHTML =''
  listVFX.forEach(data => {
    const tempHTML = 
    `<article>
      <span class="image">
        <img style="width:100%" src="${data.img}" alt="" />
      </span>
      <header class="major">
        <h3><a target="_blank" href="${data.link}" class="link">${data.title}</a></h3>
        <p>${data.subtitle}<p>
      </header>
    </article>` 
    myHTML += tempHTML
  })
  // $("#one").html(myHTML)
}; LoadList()
