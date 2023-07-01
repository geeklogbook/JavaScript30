const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  var elements = document.querySelectorAll('.open');
  
  elements.forEach(function(element) {
    if (element !== this) {
      element.classList.remove('open');
    }}, this);
  
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));