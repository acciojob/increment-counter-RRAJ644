document.addEventListener('DOMContentLoaded', () => {
  const createCounterElement = () => {
    let count = 0; // Initialize counter

    // Get counter paragraph and button elements
    const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Set initial counter display
    counterParagraph.textContent = count;

    // Add event listener directly on the button
    incrementButton.addEventListener('click', () => {
      alert(count); // Display current count in an alert before increment

      // Increment the counter and update the paragraph text
      count += 1;
      counterParagraph.textContent = count;
    });
  };

  createCounterElement();
});
