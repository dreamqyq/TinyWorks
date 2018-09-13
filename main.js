! function () {
  let portfolioItem = document.querySelectorAll('li.item')
  for (let i = 0; i < portfolioItem.length; i++) {
    let portfolioFigure = portfolioItem[i].querySelector('figure')
    let portfolioTop = portfolioItem[i].querySelector('.figureTop')
    portfolioTop.addEventListener('mouseenter', e => {
      portfolioItem[i].classList.add('active')
      portfolioFigure.classList.add('active')
    })
    portfolioTop.addEventListener('mouseleave', e => {
      portfolioItem[i].classList.remove('active')
      portfolioFigure.classList.remove('active')
    })
  }
}.call()
