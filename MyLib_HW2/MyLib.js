const prettyConsole = {
    themes: {
        info: {
            prefix: "ℹ️ [INFO]",
            style: "color: blue;"
        },
        warning: {
            prefix: "⚠️ [WARNING]",
            style: "color: orange;"
        },
        error: {
            prefix: "❌ [ERROR]",
            style: "color: red;"
        },
        success: {
            prefix: "✅ [SUCCESS]",
            style: "color: green;"
        },
        debug: {
            prefix: "🐞 [DEBUG]",
            style: "color: purple;"
        }
    },

    log: function(message, theme) {
        if (!this.themes[theme]) {
            console.log(`Theme "${theme}" is not defined. Try one of these: ${Object.keys(this.themes).join(', ')}`);
            return;
        }
        console.log(`%c${this.themes[theme].prefix} ${message}`, this.themes[theme].style);
    }
};

function help() {
    console.log("PrettyConsole Library Usage Help:");
    console.log("You can use this library to print styled messages to the console with predefined themes.");
    console.log("Available themes: info, warning, error, success, debug.");
    console.log("Usage:");
    console.log('prettyConsole.log("Your message here", "theme");');
    console.log("Example:");
    prettyConsole.log("This is an info message", "info");
    prettyConsole.log("This is a warning message", "warning");
    prettyConsole.log("This is an error message", "error");
    prettyConsole.log("This is a success message", "success");
    prettyConsole.log("This is a debug message", "debug");
}

export { prettyConsole, help };