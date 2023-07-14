const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearAllButton = document.querySelector('.clear-all');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${i + 1}. ${plate.text}</label>
        </li>
      `;
    }).join('');
  }

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAllItems() {
  items.length = 0;
  localStorage.removeItem('items'); 
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAllButton.addEventListener('click', clearAllItems);

populateList(items, itemsList);