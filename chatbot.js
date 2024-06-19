// chatbot.js

function sendMessage() {
    var userMessage = document.getElementById("message").value;
    if (userMessage.trim() === "") return;

    var chatbox = document.getElementById("chatbox");

    // Dodanie wiadomości użytkownika do chatboxa
    var userDiv = document.createElement("div");
    userDiv.innerHTML = "<strong>Ty:</strong> " + userMessage;
    chatbox.appendChild(userDiv);

    // Oczyszczenie pola wiadomości
    document.getElementById("message").value = "";

    // Odpowiedź chatbota
    var botMessage = getBotResponse(userMessage);

    // Dodanie odpowiedzi chatbota do chatboxa
    var botDiv = document.createElement("div");
    botDiv.innerHTML = "<strong>Bot:</strong> " + botMessage;
    chatbox.appendChild(botDiv);

    // Przewinięcie chatboxa do dołu
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    var responses = {
        "cześć": "Cześć! Jak się masz?",
        "jak się masz": "Dziękuję, mam się dobrze. A Ty?",
        "dobrze": "To świetnie słyszeć! Masz jakieś pytania?",
        "do widzenia": "Do widzenia! Miłego dnia!",
        "jak masz na imię": "Jestem chatbotem bez imienia, ale mogę Ci pomóc z pytaniami.",
        "co lubisz robić": "Lubię pomagać ludziom odpowiadając na ich pytania."
    };

    var defaultMessage = "Przepraszam, nie rozumiem. Możesz powtórzyć?";
    var response = responses[userMessage.toLowerCase()] || defaultMessage;

    // Możliwość zadawania pytań przez chatbota
    if (response === "Cześć! Jak się masz?") {
        setTimeout(function() {
            var chatbox = document.getElementById("chatbox");
            var botDiv = document.createElement("div");
            botDiv.innerHTML = "<strong>Bot:</strong> Jak masz na imię?";
            chatbox.appendChild(botDiv);
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 2000);
    }

    return response;
}