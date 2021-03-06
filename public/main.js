
var $surfboards = [
  {
    name: 'The Shredder',
    panelType: 'panel-primary',
    img: 'images/Surfboard1.jpg',
    id: '0',
    description: 'Shredds in the morning, shredds in the evening. With \'The Shredder\' you will' +
    ' become a serious shreddaholic. If you like to look good and have fun while doing it, this' +
    ' is the board for you.',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to double overhead surf',
    price: '$200'
  },
  {
    name: 'The Articulator',
    panelType: 'panel-success',
    img: 'images/Surfboard2.jpg',
    id: '1',
    description: 'Have you ever had a problem with proving your point in an arguement? Ever had to deal' +
    ' with someone who just doesn\'t understand? Well we have the answer for you, The Articulator will' +
    ' send the right message to anyone who has problems understanding what you\'re all about. ' +
     'Look smart and feel good and prove your point in the surf lineup with this beast of a surfboard.',
    surfLevel: 'Beginner-Intermediate',
    waveType: 'Ancle high to head-high surf',
    price: '$300'
  },
  {
    name: 'The Opportunist',
    panelType: 'panel-info',
    img: 'images/Surfboard3.jpg',
    id: '2',
    description: 'You ever listenened that one Eminem song that talks about you only get one shot and to' +
    ' never let your chance go, otherwise something something watever is gona happen? Well we have an' +
    ' answer for that, \'The Opportunist\'. We want you to never miss your chance when that big ride' +
    ' opportunity comes your way so we encourage you to take full advantage of taking full advantage' +
    'OPPORTUNITY COMES ONCE IN AN LIFETIME!',
    surfLevel: 'Intermediate',
    waveType: 'knee high to overhead',
    price: '$350'
  },
  {
    name: 'The Geriatric',
    panelType: 'panel-warning',
    img: 'images/Surfboard4.jpg',
    id: '3',
    description: 'The title says it all, \'The Geriatric\' will have your age turn into nothing but a' +
    ' number when your out in the water shredding. Young people will see your grey hair and think' +
    'no way that guy is above 35 years old, impossible. Either with killing it with youngins or just' +
    ' having a grand old cruise on your own, you can\'t miss the chance to the fountain of youth with' +
    '\'The Geriatric\'',
    surfLevel: 'Beginner-Intermediate',
    waveType: 'knee high to chest high',
    price: '$250'
  },
  {
    name: 'The Bedazzler',
    panelType: 'panel-danger',
    img: 'images/Surfboard5.jpg',
    id: '4',
    description: 'Bedazzle your way to glory on \'The Bedazzler\'. Do not let the flamboyant color fool you' +
    ' , this surfboard has the ability to mesmorize all walks of life, including the female species!' +
    'I like to think of the ride on a Bedazzler as similar to an Aladdin magic carpet ride,' +
    ' you have the wind blowing through your hair as your impressing the finest of princesses through' +
    ' a magical experience. If you don\'t like Disney or Alladdin, just think babes',
    surfLevel: 'Intermediate-pro',
    waveType: 'Chest high to overhead',
    price: '$500'
  },
  {
    name: 'The Wave Bandit',
    panelType: 'panel-default',
    img: 'images/Surfboard6.jpg',
    id: '5',
    description: 'Now here at Surf-azon, we don\'t condone stealing, its really just bad Karma after all, but if you\'re' +
    ' Going to steal, at least steal from the rich and give to the poor: yourself. \'The Wave Bandit\' will provide that' +
    ' experience for you. Feel like Robbin Hood while you shread from coast to cast on the flyest of mini-shredders. But' +
    ' if you end up in a tussle because someone doesn\'t like the idea of you banditing their wave, just tellem its for' +
    ' a good cause!',
    surfLevel: 'Intermediate-pro',
    waveType: 'knee high to head high',
    price: '$400'
  }
]

var cart = {}
var $surfboardDescription = document.querySelector('#surfboard-description')
var $surfboardList = document.querySelector('#surfboard-list')
var $container = document.querySelector('.container')
var $logoDiv = document.getElementById('logo')
var $logoClick = document.getElementById('logo-click')
var $view = document.querySelectorAll('.view')
var $mainCart = document.getElementById('shopping-cart')
var $cartQuantity = document.createElement('span')
var $galleryTitle = document.getElementById('gallery-title')

function renderItem(surfboard) {
  var $divColumn = document.createElement('div')
  $divColumn.classList.add('col-sm-4', 'col-xs-12')

  var $divPanel = document.createElement('div')
  $divPanel.classList.add('panel')
  $divPanel.classList.add(surfboard.panelType)

  var $divHeading = document.createElement('div')
  $divHeading.classList.add('panel-heading')

  var $panelTitle = document.createElement('h3')
  $panelTitle.classList.add('panel-title', 'text-center', 'pointer')
  $panelTitle.setAttribute('data-id', surfboard.id)
  $panelTitle.textContent = surfboard.name

  var $panelBody = document.createElement('div')
  $panelBody.classList.add('panel-body')

  var $divPhoto = document.createElement('div')
  $divPhoto.classList.add('photo')

  var $img = document.createElement('img')
  $img.setAttribute('data-id', surfboard.id)
  $img.classList.add('pointer')

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
  $surfboardList.appendChild($surfboard)
}

$container.addEventListener('click', function (event) {
  var id = event.target.getAttribute('data-id')
  if (id === null) {
    return
  }
  var surfboard = findBoard(id, $surfboards)
  var $details = renderDescription(surfboard)
  $surfboardList.classList.add('hide')
  $galleryTitle.classList.add('hide')
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

function getCartItems(cart) {
  var cartItems = []
  for (var id in cart) {
    cartItems.push(cart[id])
  }
  return cartItems
}

function renderDescription(surfboard) {
  var $panel = document.createElement('div')
  $panel.classList.add('panel')
  $panel.classList.add(surfboard.panelType)

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
  $surfLevel.textContent = 'Surf Level: ' + surfboard.surfLevel
  $surfLevel.classList.add('underline')

  var $waveType = document.createElement('p')
  $waveType.textContent = 'Wave type: ' + surfboard.waveType
  $waveType.classList.add('underline')

  var $price = document.createElement('h3')
  $price.textContent = surfboard.price

  var $addCart = document.createElement('button')
  $addCart.classList.add('btn', 'btn-default', 'btn-large')
  $addCart.textContent = 'Add to Cart'

  var $viewCart = document.createElement('button')
  $viewCart.classList.add('btn', 'btn-default', 'btn-large')
  $viewCart.textContent = 'View Cart'

  var $photoDiv = document.createElement('div')
  $photoDiv.classList.add('photo')

  var $image = document.createElement('img')
  $image.setAttribute('src', surfboard.img)
  $image.classList.add('bigger-surfboard')

  var $cartImage = document.createElement('img')
  $cartImage.setAttribute('src', 'images/cart.png')
  $cartImage.classList.add('cart-image')

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
  $column1.appendChild($viewCart)

  $row.appendChild($column2)
  $column2.appendChild($photoDiv)
  $photoDiv.appendChild($image)

  $addCart.addEventListener('click', function (event) {
    addToCart(surfboard)

  })

  $viewCart.addEventListener('click', function (event) {
    var $items = document.getElementById('items')
    $items.innerHTML = ''
    var $quantityTotal = document.getElementById('quantity-total')
    $quantityTotal.textContent = 'Subtotal' + ' (' + getCartQuantity(cart) + ')'
    var $subtotal = document.getElementById('subtotal')
    $subtotal.textContent = getCartSubtotal(cart)
    var cartItems = getCartItems(cart)
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = cartItems[i]
      var $cartItem = renderCartItem(cartItem)
      $galleryTitle.classList.add('hide')
      $surfboardDescription.classList.add('hide')
      $items.appendChild($cartItem)
      $mainCart.classList.remove('hide')
    }
  })

  return $panel
}

function addToCart(surfboard) {
  if (cart[surfboard.id] !== undefined) {
    cart[surfboard.id].quantity += 1
  }
  else {
    cart[surfboard.id] = {
      quantity: 1,
      name: surfboard.name,
      image: surfboard.img,
      price: surfboard.price
    }
  }
  var $quantity = getCartQuantity(cart)
  var $cart = renderCartIcon($quantity)
  $logoDiv.appendChild($cart)
}

function renderCartItem(cartItem) {

  var $hr = document.createElement('hr')
  var $row = document.createElement('div')
  $row.classList.add('row')

  var $img = document.createElement('img')
  var $divColumn1 = document.createElement('div')
  $divColumn1.classList.add('col-xs-3')
  $img.setAttribute('src', cartItem.image)
  $img.classList.add('img-responsive')

  var $column2 = document.createElement('div')
  $column2.classList.add('col-xs-5')
  $column2.textContent = cartItem.name

  var $column3 = document.createElement('div')
  $column3.classList.add('col-xs-2')
  $column3.textContent = cartItem.price

  var $column4 = document.createElement('div')
  $column4.classList.add('col-xs-2')
  $column4.textContent = cartItem.quantity

  var $hrDiv = document.createElement('div')
  $hrDiv.classList.add('col-xs-12')
  $hrDiv.appendChild($hr)

  $divColumn1.appendChild($img)
  $row.appendChild($divColumn1)
  $row.appendChild($column2)
  $row.appendChild($column3)
  $row.appendChild($column4)
  $row.appendChild($hrDiv)

  return $row
}

function returnHome() {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i] === $surfboardList) {
      $view[i].classList.remove('hide')
      $galleryTitle.classList.remove('hide')
    }
    else {
      $view[i].classList.add('hide')
      $surfboardDescription.innerHTML = ''
    }
  }
}

function returnToCart() {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i] === $mainCart) {
      $view[i].classList.remove('hide')
    }
    else {
      $view[i].classList.add('hide')
    }
  }
}

$logoClick.addEventListener('click', returnHome)

function renderCartIcon(cartQuantity) {
  var $cartSpan = document.createElement('span')
  var $cart = document.createElement('span')
  $cart.classList.add('glyphicon', 'glyphicon-shopping-cart')
  $cartSpan.appendChild($cart)
  $cart.classList.add('cart-logo')
  document.body.appendChild($cartQuantity)
  $cartQuantity.textContent = cartQuantity
  $cartQuantity.setAttribute('id', 'cart-number')

  $cart.addEventListener('click', returnToCart)

  return $cartSpan
}

function getCartQuantity(cart) {
  var quantity = 0
  for (var surfboardId in cart) {
    quantity += cart[surfboardId].quantity
  }
  return quantity
}

function getCartSubtotal(cart) {
  var subtotal = 0
  for (var surfboardId in cart) {
    var price = cart[surfboardId].price
    let split = price.split('$')
    let number = Number(split[1])
    subtotal += number * cart[surfboardId].quantity
  }
  return '$' + subtotal
}
