const selectColor = (tag) => {
    const tagColors = {
        "JavaScript": "#f7df1e", // Yellow
        "React": "#61dafb", // Light Blue
        "CSS": "#ff6347", // Tomato
        "Node.js": "#68a063", // Green
        "Express": "#ff4500", // Orange Red
        "Python": "#306998", // Blue
        "Flask": "#8a2be2", // Blue Violet
        "TypeScript": "#007acc", // Blue
        "Debugging": "#fca311", // Orange
        "Visual Studio Code": "#0078d7", // Blue
        "Git": "#f05033", // Orange
        "GitHub": "#181717", // Black
        "Version Control": "#f34f29", // Orange
        "Closures": "#d2691e", // Chocolate
        "Function": "#f7df1e", // Yellow
        "Hooks": "#61dafb", // Light Blue
        "Grid Layout": "#2e8b57", // Sea Green
        "Web Design": "#dda0dd", // Plum
        "Generators": "#ff4500", // Orange Red
        "Iterators": "#ff1493", // Deep Pink
        "API": "#20b2aa", // Light Sea Green
        "Type System": "#b22222", // Firebrick
        "Responsive Design": "#4682b4" // Steel Blue
    };

    return tagColors[tag] || "#cccccc"; // Default color: light gray
};





export default selectColor;