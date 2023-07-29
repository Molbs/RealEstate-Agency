function formatInput(event) {
    // Get the input element
    const inputElement = event.target;
  
    // Remove all non-digit characters from the input value
    const numericValue = inputElement.value.replace(/[^\d]/g, '');
  
    // Ensure the value is a positive number
    const positiveValue = Math.abs(parseInt(numericValue)) || 0;
  
    // Update the input field with the formatted value
    inputElement.value = `kes ${positiveValue}`;
  }