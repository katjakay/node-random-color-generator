import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});
function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}

//LONG VERSION
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("########              ########");
// colorAndLog(`########   ${color}    ########`);
// colorAndLog("########              ########");
// colorAndLog("##############################");
// colorAndLog("##############################");
// colorAndLog("##############################");

//SHORT VERSION
colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);

// this generates random HEX code
// const color = randomColor();

// this colors the str
// log(chalk.hex('color').(str));
