const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    
let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
        //console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            //console.log("Starging to check them in between!");
        }

        if(inBetween){
            checkbox.checked = true;
        }
        });
    }

    lastChecked = this;
}

function restart() {
    var checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  }

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))