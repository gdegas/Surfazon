
var $surfboards = [
  {
    name: 'The Shredder',
    panelType: 'panel-primary',
    img: 'images/surfboard1.jpg',
    id: 1,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
  },
  {
    name: 'The Articulator',
    panelType: 'panel-success',
    img: 'images/surfboard2.jpg',
    id: 2,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
  },
  {
    name: 'The Opportunist',
    panelType: 'panel-info',
    img: 'images/surfboard3.jpg',
    id: 3,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
  },
  {
    name: 'The Geriatric',
    panelType: 'panel-warning',
    img: 'images/surfboard4.jpg',
    id: 4,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
  },
  {
    name: 'The Bedazzler',
    panelType: 'panel-danger',
    img: 'images/surfboard5.jpg',
    id: 5,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
  },
  {
    name: 'The Wave Bandit',
    panelType: 'panel-default',
    img: 'images/surfboard6.jpg',
    id: 6,
    Description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead'
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

var $surfboardList = document.querySelector('#surfboard-list')

for (var i = 0; i < $surfboards.length; i++) {
  var surfboard = $surfboards[i]
  var $surfboard = renderItem(surfboard)
  $surfboardList.appendChild($surfboard)
}

 // add event listening to the whole container
 // event.target
var $container = document.querySelector('.container')

function hide(event) {
  $surfboardList.classList.add('hide')

}

$container.addEventListener('click', hide)
