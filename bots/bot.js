// Simple starter bot for Defector Bot
// Exports a Bot class with basic greet and respond methods.

class Bot {
  constructor(name = 'Defector') {
    this.name = name;
  }

  greet() {
    return `Hello — I am ${this.name}.`;
  }

  // Simple echo-style response; replace with real logic as needed.
  respond(message) {
    if (!message) return "I didn't get a message.";
    return `You said: "${message}"`;
  }
}

module.exports = Bot;
