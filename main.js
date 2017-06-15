
var $surfboards = [
  {
    name: 'The Shredder',
    panelType: 'panel-primary',
    img: 'images/surfboard1.jpg'
  },
  {
    name: 'The Articulator',
    panelType: 'panel-success',
    img: 'images/surfboard2.jpg'
  },
  {
    name: 'The Opportunist',
    panelType: 'panel-info',
    img: 'images/surfboard3.jpg'
  },
  {
    name: 'The Geriatric',
    panelType: 'panel-warning',
    img: 'images/surfboard4.jpg'
  },
  {
    name: 'The Bedazzler',
    panelType: 'panel-danger',
    img: 'images/surfboard5.jpg'
  },
  {
    name: 'The Wave Bandit',
    panelType: 'panel-default',
    img: 'images/surfboard6.jpg'
  }
]

function renderItem(surfboard) {
  var $divColumn = document.createElement('div')
  $divColumn.classList.add('col-sm-4', 'col-xs-12')

  var $divPanel = document.createElement('div')
  $divPanel.classList.add('panel')
  $divPanel.classList.add(surfboard.panelType)

  var $divHeading = document.createElement('div')
  $divHeading.classList.add('panel-heading')

  var $panelTitle = document.createElement('h3')
  $panelTitle.classList.add('panel-title', 'text-center')
  $panelTitle.textContent = surfboard.name

  var $panelBody = document.createElement('div')
  $panelBody.classList.add('panel-body')

  var $divPhoto = document.createElement('div')
  $divPhoto.classList.add('photo')

  var $img = document.createElement('img')

  $divColumn.appendChild($divPanel)
  $divPanel.appendChild($divHeading)
  $divHeading.appendChild($panelTitle)

  $divPanel.appendChild($panelBody)
  $panelBody.appendChild($divPhoto)
  $divPhoto.appendChild($img)
  $img.setAttribute('src', surfboard.img)

  return $divColumn
}

for (var i = 0; i < $surfboards.length; i++) {
  var surfboard = $surfboards[i]
  var $surfboard = renderItem(surfboard)
  var $row = document.querySelector('.row')
  $row.appendChild($surfboard)
}
