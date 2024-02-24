function toggleColor(element) {
    if (element.style.color === 'black' || element.style.color === '') {
      element.style.color = 'blue';
    } else {
      element.style.color = 'black';
    }
}