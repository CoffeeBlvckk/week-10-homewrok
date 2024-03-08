const svgwrite = require('svgwrite');

function createLogo(text, textColor, shape, shapeColor) {
    // Create an SVG drawing
    const dwg = svgwrite.createSvg('logo.svg', { viewBox: '0 0 300 200' });

    // Add text to the SVG
    dwg.text(text).fill(textColor).move(10, 20);

    // Add shape to the SVG based on user choice
    if (shape === 'circle') {
        dwg.circle(50).move(150, 100).fill(shapeColor);
    } else if (shape === 'triangle') {
        dwg.polygon([[150, 50], [100, 150], [200, 150]]).fill(shapeColor);
    } else if (shape === 'square') {
        dwg.rect(100, 100).move(100, 50).fill(shapeColor);
    } else {
        console.log('Invalid shape choice');
    }

    // Save the SVG file
    dwg.save();
    console.log('Generated logo.svg');
}

// Get user input
const userText = prompt('Enter up to three characters: ');
const textColor = prompt('Enter text color (keyword or hexadecimal): ');
const shape = prompt('Choose a shape (circle, triangle, square): ');
const shapeColor = prompt('Enter shape color (keyword or hexadecimal): ');

// Validate user input and generate logo
if (userText.length <= 3 && ['circle', 'triangle', 'square'].includes(shape)) {
    createLogo(userText, textColor, shape, shapeColor);
} else {
    console.log('Invalid input. Please check your input and try again.');
}
