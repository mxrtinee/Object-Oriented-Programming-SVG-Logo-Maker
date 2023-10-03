const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes'); // Import your shape classes

async function main() {
  try {
    // Use Inquirer to prompt the user for input
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (keyword or hexadecimal):',
      },
    ]);

    // Define default text elements for each shape
    const defaultTextForTriangle = `<text x="150" y="145" text-anchor="middle" dominant-baseline="middle" font-size="70" font-weight="bold" fill="${userInput.textColor}">${userInput.text}</text>`;
    const defaultTextForCircleAndSquare = `<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="70" font-weight="bold" fill="${userInput.textColor}">${userInput.text}</text>`;


    // Create an instance of the selected shape
    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.error('Invalid shape selection.');
        return; // Exit the function to avoid further processing
    }

    // Sets the color for the shape
    shape.setColor(userInput.shapeColor);

   // Specifies the file name based on the shape type
   const shapeType = userInput.shape.toLowerCase();
   const fileName = `example${shapeType}.svg`;

   // Uses the appropriate default text element based on the shape type
  const defaultText = shapeType === 'triangle' ? defaultTextForTriangle : defaultTextForCircleAndSquare;

    // Generates the SVG logo using the shape and default text element
    const svgLogo = `
    <!-- SVG code here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <!-- Shape code here, using shape.render() -->
    ${shape.render()}
    <!-- Text code here, using defaultText -->
    ${defaultText}
    </svg>
    `;

    // Writes the SVG to a file named logo.svg
    fs.writeFileSync(`./examples/${fileName}`, svgLogo);
    console.log(`Generated ${fileName}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the main function to start the application
main();
