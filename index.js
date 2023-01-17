import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

// 1. randomcolor npm generates random HEX code
// 2. It also defines luminosity & hue -> user input
const color = randomColor({
  luminosity: lum,
  hue: col,
});

// 3. chalk npm colorized a variable, value etc.
console.log(
  chalk.hex(color)(
    `  ##############################
  ##############################
  ##############################
  ########              ########
  ########   ${color}    ########
  ########              ########
  ##############################
  ##############################
  ##############################`,
  ),
);
