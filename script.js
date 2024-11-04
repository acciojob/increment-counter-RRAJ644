document.addEventListener('DOMContentLoaded', (e) => {
  const createCounterElement = () => {
    let count = 0

    const counterDiv = document.createElement('div')

    const counterParagraph = document.createElement('p')
    counterParagraph.innerText = count

    const incrementButton = document.createElement('button')
    incrementButton.innerText = 'Increment'
    incrementButton.classList.add('increment-button')

    counterDiv.appendChild(counterParagraph)
    counterDiv.appendChild(incrementButton)

    counterDiv.addEventListener('click', (e) => {
      e.preventDefault()
      alert(count)
      const target = e.target.classList

      if (target.contains('increment-button')) {
        count += 1
        counterParagraph.textContent = count
      }
    })

    document.body.appendChild(counterDiv)
  }

  createCounterElement()
})
