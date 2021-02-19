const selectCard = document.querySelectorAll('.card')
const selectQuantity = document.querySelectorAll('.quantity')
const bookmark = document.getElementById('bookmark')
const svg = document.getElementById('svg')
const text = document.getElementById('text')
const stock = document.querySelectorAll('.stock')
const cardButton = document.querySelectorAll('.cardButton')
const fullCard = document.querySelectorAll('.fullCard')

bookmark.addEventListener('mouseover', () => {
  text.innerHTML = 'Bookmarked'
  text.classList.add('hover:text-green-600')
})
bookmark.addEventListener('mouseout', () => {
  text.innerHTML = 'Bookmark'
})

fullCard.forEach((card) => {
  const stockString = card.querySelector('.stock').innerHTML
  const stock = parseInt(stockString)
  const btn = card.querySelector('.cardButton')
  let isInStock = stock > 0
  if (!isInStock) {
    btn.disabled = true
    btn.innerHTML = 'Out of stock'
    card.classList.add('opacity-40')
  } else {
    btn.disabled = false
    btn.innerHTML = 'Select Reward'
  }
})
