// Function to open a new page
document.getElementById('openPageButton').addEventListener('click', function() {
    // Replace 'your_link_here' with the actual link you want to open
    window.open('your_link_here', '_blank');
});

// Function to display the popup with the timer and time formats
document.getElementById('scrollToBottomButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';

    // Show the timer and other time formats in the popup
    document.getElementById('timer').innerHTML = `Current Time (IST): ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`;
    document.getElementById('unixTime').innerHTML = `UNIX Time: ${Math.floor(Date.now() / 1000)}`;
    document.getElementById('isoTime').innerHTML = `ISO Time: ${new Date().toISOString()}`;
});

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to copy the time to the clipboard
function copyToClipboard(id) {
    const element = document.getElementById(id);
    const text = element.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log(`${id} copied to clipboard: ${text}`);
            alert(`${id} copied to clipboard: ${text}`);
        })
        .catch(err => {
            console.error(`Unable to copy ${id} to clipboard`, err);
        });
}
