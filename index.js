document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.list-group-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const itemName = this.textContent.trim();
            const listId = this.closest('.card-body').querySelector('.list-group').id;
            this.remove();
            if (itemName.startsWith('Fruits!')) {
                addItems(listId, itemName);
            } else if (itemName.startsWith('Legumes!')) {
                addItems(listId, itemName);
            }
        });
    });

    document.getElementById('searchButton').addEventListener('click', function () {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        const Items = document.querySelectorAll('.list-group-item');
        Items.forEach(function (item) {
            const itemName = item.textContent.trim().toLowerCase();
            if (itemName.includes(searchInput)) {
                item.classList.add('highlight');
            } else {
                item.classList.remove('highlight');
            }
        });
    });

    document.getElementById('deleteButton').addEventListener('click', function () {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        const searchedItem = document.querySelectorAll('.highlight');
        searchedItem.forEach(function (item) {
            item.remove();
        });
    });
});

document.getElementById('addSpecificButton').addEventListener('click', function () {
    const itemInput = document.getElementById('itemInput').value;
    const fruitsRadio = document.getElementById('fruitsRadio').checked;
    const legumesRadio = document.getElementById('legumesRadio').checked;

    if (itemInput) {
        if (fruitsRadio) {
            addItems('fruitsList', 'Fruits!-' + itemInput);
        } else if (legumesRadio) {
            addItems('legumesList', 'Legumes!-' + itemInput);
        } else {
            alert("please enter the item type  ")
        }
    }
});

document.getElementById('addGeneralButton').addEventListener('click', function () {
    const itemInput = document.getElementById('itemInput').value;
    const fruitsRadio = document.getElementById('fruitsRadio').checked;
    const legumesRadio = document.getElementById('legumesRadio').checked;
    if (itemInput) {
        if (fruitsRadio) {
            addItems('generalList', 'Fruits!-' + itemInput);
        } else if (legumesRadio) {
            addItems('generalList', 'Legumes!-' + itemInput);
        } else {
            alert('please enter the item type')
        }
    }
});

function addItems(listId, itemName) {
    const list = document.getElementById(listId);
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = itemName;
    newItem.addEventListener('click', function () {
        const clickeditemName = this.textContent.trim();
        const clickedListId = listId;
        this.remove();
        if (clickeditemName.startsWith('Fruits!')) {
            addItems('fruitsList', clickeditemName);
        } else if (clickeditemName.startsWith('Legumes!')) {
            addItems('legumesList', clickeditemName);
        }
    });
    list.appendChild(newItem);
}
