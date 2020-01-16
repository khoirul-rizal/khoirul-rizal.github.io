const listVFX = [
  {
    title: 'Dishonored 2',
    subtitle: 'Cracing in slab',
    img: 'https://i.pinimg.com/originals/11/8c/4f/118c4feda96aa420671bb35e4b33a179.jpg'
  },
  {
    title: 'Detroit',
    subtitle: 'Scan VFX',
    img: 'https://i.pinimg.com/originals/11/8c/4f/118c4feda96aa420671bb35e4b33a179.jpg'
  },
  {
    title: 'Async Loading',
    subtitle: 'Loading Template',
    img: 'https://i.pinimg.com/originals/11/8c/4f/118c4feda96aa420671bb35e4b33a179.jpg'
  },
  {
    title: 'Fluid UI',
    subtitle: 'UI flat and easy',
    img: 'https://i.pinimg.com/originals/11/8c/4f/118c4feda96aa420671bb35e4b33a179.jpg'
  },
]

const LoadList = () => {
  let myHTML =''
  listVFX.forEach(data => {
    const tempHTML = 
    `<article>
      <span class="image">
        <img src="${data.img}" alt="" />
      </span>
      <header class="major">
        <h3><a href="landing.html" class="link">${data.title}</a></h3>
        <p>${data.subtitle}<p>
      </header>
    </article>` 
    myHTML += tempHTML
  })
  $("#one").html(myHTML)
}; LoadList()
