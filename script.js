$(document).ready(function() {
    const messages = [
        "Checking systems...",
        "Updating components...",
        "Finalizing updates...",
        "Almost done..."
    ];

    let currentMessage = 0;

    setInterval(function() {
        if (currentMessage < messages.length) {
            $('#message').text(messages[currentMessage]);
            currentMessage++;
        }
    }, 1250);
});