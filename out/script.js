const selectCard = document.querySelectorAll('.card')
const selectQuantity = document.querySelectorAll('.quantity')
const bookmark = document.getElementById('bookmark')
const svg = document.getElementById('svg')
const text = document.getElementById('text')
const stock = document.querySelectorAll('.stock')
const cardButton = document.querySelectorAll('.cardButton')
const fullCard = document.querySelectorAll('#fullCard')

bookmark.addEventListener('mouseover', () => {
  text.innerHTML = 'Bookmarked'
  text.classList.add('hover:text-green-600')
})
bookmark.addEventListener('mouseout', () => {
  text.innerHTML = 'Bookmark'
})

for (let j = 0; j < stock.length; j++) {
  const element = stock[j]
  console.log(element.innerHTML)
  for (let i = 0; i < cardButton.length; i++) {
    const element2 = cardButton[i]
    console.log(element2)
    if (element.innerHTML === 0) {
      element2.innerHTML = 'Out of Stock'
      element2.classList.add('bg-gray-300')
    } else {
      element2.innerHTML = 'Select Reward'
    }
  }
}
