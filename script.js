function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function sendMessage() {
    let input = document.getElementById('msgInput');
    let msgArea = document.getElementById('messages');
    if (input.value.trim() !== "") {
        let newMsg = document.createElement('p');
        newMsg.textContent = input.value;
        newMsg.style.background = "#dcf8c6";
        newMsg.style.padding = "8px";
        newMsg.style.borderRadius = "5px";
        newMsg.style.margin = "5px 0";
        msgArea.appendChild(newMsg);
        input.value = "";
        msgArea.scrollTop = msgArea.scrollHeight;
    }
}
