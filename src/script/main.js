const textArea = document.querySelector('.firstBlock__right'),
      blueArea = document.querySelector('.right__text'),
      redArea = document.querySelector('.right__text_hover');

textArea.addEventListener('mouseover', () => {    
    blueArea.classList.add('hidden');
    blueArea.classList.remove('show');
    redArea.classList.remove('hidden');
    redArea.classList.add('show');
    textArea.style.backgroundColor = '#ff1d25';
})
textArea.addEventListener('mouseout', () => {
    redArea.classList.remove('show');
    redArea.classList.add('hidden');
    blueArea.classList.remove('hidden');
    blueArea.classList.add('show');
    textArea.style.backgroundColor = '#0071bc';    
})