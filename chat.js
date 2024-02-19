// Function to process user input using Compromise or your preferred library
function processUserInput(userInput) {
    // Example rule-based responses for mental health-related questions
    if (userInput.toLowerCase().includes('depressed') || userInput.toLowerCase().includes('sad')) {
        return "I'm sorry to hear that you're feeling this way. It's important to talk to someone you trust or seek professional help.";
    } else if (userInput.toLowerCase().includes('anxiety') || userInput.toLowerCase().includes('stressed')) {
        return "If you're dealing with anxiety or stress, consider talking to a mental health professional who can provide support and coping strategies.";
    } else if (userInput.toLowerCase().includes('suicidal') || userInput.toLowerCase().includes('self-harm')) {
        return "I'm really sorry to hear that you're feeling this way, but I can't provide the help that you need. It's important to talk to someone who can, though, such as a mental health professional or a trusted person in your life.";
    }
    else if (userInput.toLowerCase().includes('sleep') || userInput.toLowerCase().includes('restless')) {
        return "To get a good sleep, you can try switching off your gadgets atleast 1 hour before sleep and develop the habit of reading story books before sleeping";
    }


    // Default response if no specific rules match
    return "I'm here to help, but it's important to talk to a mental health professional for personalized support.";
}

// Function to send a message and display it in the chat
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    // Display user message in the chat
    const userMessageContainer = document.createElement('div');
    userMessageContainer.className = 'message user';
    userMessageContainer.innerText = userInput;
    chatMessages.appendChild(userMessageContainer);

    // Process user input and display bot response
    const botResponse = processUserInput(userInput);
    const botMessageContainer = document.createElement('div');
    botMessageContainer.className = 'message bot';
    botMessageContainer.innerText = botResponse;
    chatMessages.appendChild(botMessageContainer);

    // Clear the user input field
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chat container
    chatMessages.scrollTop = chatMessages.scrollHeight;
}





