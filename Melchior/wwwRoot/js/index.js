const uri = 'api/melchior';
let melch = [];

function getProfiles() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}


function addProfile() {
    const addNameTextbox = document.getElementById('add-name');

    const profile = {
        isComplete: false,
        name: addNameTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
    })
        .then(response => response.json())
        .then(() => {
            getProfiles();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}
