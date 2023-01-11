import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});

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

// this generates random HEX code
// const color = randomColor();

// this colors the str
// log(chalk.hex('color')(str));
