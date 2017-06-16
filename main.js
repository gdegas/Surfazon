
var $surfboards = [
  {
    name: 'The Shredder',
    panelType: 'panel-primary',
    img: 'images/surfboard1.jpg',
    id: '1',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
  },
  {
    name: 'The Articulator',
    panelType: 'panel-success',
    img: 'images/surfboard2.jpg',
    id: '2',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
  },
  {
    name: 'The Opportunist',
    panelType: 'panel-info',
    img: 'images/surfboard3.jpg',
    id: '3',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
  },
  {
    name: 'The Geriatric',
    panelType: 'panel-warning',
    img: 'images/surfboard4.jpg',
    id: '4',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
  },
  {
    name: 'The Bedazzler',
    panelType: 'panel-danger',
    img: 'images/surfboard5.jpg',
    id: '5',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
  },
  {
    name: 'The Wave Bandit',
    panelType: 'panel-default',
    img: 'images/surfboard6.jpg',
    id: '6',
    description: 'Shredds in the morning, shredds in the evening. With \' The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead',
    price: '$300'
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
  $panelTitle.setAttribute('data-id', surfboard.id)
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

var $surfboardDescription = document.querySelector('#surfboard-description')
var $surfboardList = document.querySelector('#surfboard-list')
var $container = document.querySelector('.container')

for (var i = 0; i < $surfboards.length; i++) {
  var surfboard = $surfboards[i]
  var $surfboard = renderItem(surfboard)
  $surfboardList.appendChild($surfboard)
}

$container.addEventListener('click', function (event) {
  var id = event.target.getAttribute('data-id')
  var surfboard = findBoard(id, $surfboards) // returns the surfboard from the array that has that id
  var $details = renderDescription(surfboard)
  $surfboardList.classList.add('hide')
  $surfboardDescription.appendChild($details)
  $surfboardDescription.classList.remove('hide')
})

function findBoard(id, surfboards) {
  for (var i = 0; i < surfboards.length; i++) {
    if (surfboards[i].id === id) {
      return surfboards[i]
    }
  }
}

function renderDescription(surfboard) {
/* <div class="panel panel-default">
  <div class="panel-body">
    <div class="row">
        <div class="col-xs-6 description-text">
          <h2>The Shredder</h2>
          <hr />
          <p class="product-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi elit, pellentesque nec ante in, maximus dignissim ipsum. Vivamus mattis leo nisi, at iaculis nisl accumsan vitae. Aenean porttitor, urna non porttitor dictum, velit diam convallis dui, a condimentum erat justo quis nibh. Mauris porta aliquam erat sed rhoncus. Nulla iaculis commodo neque. Aliquam erat volutpat. Pellentesque tortor lectus, laoreet in iaculis ac, blandit eget massa. Praesent eget malesuada orci. Aliquam id arcu sit amet justo ullamcorper tincidunt. Nulla facilisi. Aenean at varius sem. Sed vehicula pharetra nibh, in pulvinar lacus sagittis id.
          </p>

          <p class="product-description"><u>Surf Level : Intermediate-Pro</u></p>

          <p class="product-description"><u>Wave Type : Knee high to double overhead</u></p>

          <h3>$300</h3>

          <button class="btn btn-default btn-large" type="submit">Add to Cart</button>
          <button class="btn btn-default btn-large" type="submit">Checkout</button>
        </div>
      <div class="col-xs-6">
        <div class="photo">
          <img src="images/surfboard1.jpg" alt="surfboard" />
        </div>
      </div>
    </div>
  </div>
</div> */

  var $panel = document.createElement('div')
  $panel.classList.add('panel')

  var $panelBody = document.createElement('div')
  $panelBody.classList.add('panel-body')

  var $row = document.createElement('div')
  $row.classList.add('row')

  var $column1 = document.createElement('div')
  $column1.classList.add('col-xs-6')
  $column1.setAttribute('id', 'description-text')

  var $column2 = document.createElement('div')
  $column2.classList.add('col-xs-6')

  var $title = document.createElement('h2')
  $title.textContent = surfboard.name

  var $hr = document.createElement('hr')

  var $paragraph = document.createElement('p')
  $paragraph.textContent = surfboard.description

  var $surfLevel = document.createElement('p')
  $surfLevel.textContent = surfboard.surfLevel
  $surfLevel.classList.add('underline')

  var $waveType = document.createElement('p')
  $waveType.textContent = surfboard.waveType

  var $price = document.createElement('h3')
  $price.textContent = surfboard.price

  var $addCart = document.createElement('button')
  $addCart.classList.add('btn', 'btn-default', 'btn-large')
  $addCart.textContent = 'Add to Cart'

  var $checkout = document.createElement('button')
  $checkout.classList.add('btn', 'btn-default', 'btn-large')
  $checkout.textContent = 'Checkout'

  var $photoDiv = document.createElement('div')
  $photoDiv.classList.add('photo')

  var $image = document.createElement('img')
  $image.setAttribute('src', surfboard.img)
  $image.classList.add('bigger-surfboard')

  $panel.appendChild($panelBody)
  $panelBody.appendChild($row)
  $row.appendChild($column1)
  $column1.appendChild($title)
  $column1.appendChild($hr)
  $column1.appendChild($paragraph)
  $column1.appendChild($surfLevel)
  $column1.appendChild($waveType)
  $column1.appendChild($price)
  $column1.appendChild($addCart)
  $column1.appendChild($checkout)

  $row.appendChild($column2)
  $column2.appendChild($photoDiv)
  $photoDiv.appendChild($image)

  return $panel
}
