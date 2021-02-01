const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  reset: "\x1b[0m",
};

/**
 * Utility to supercharge console log with time and colors.
 * @param {String} message Message to send to console.
 * @param {Number} level Select a level: 1 = INFO, 2 = WARNING, 3 = SUCCESS, 4 = ERROR
 * @description
 * @example
 * nodelog("Message to Print", 1)
 * Prints INFO message with Cyan.
 *
 * nodelog("Message to Print")
 * Prints LOG message with Default Color.
 */
const fastlog = (message, level) => {
  switch (level) {
    case 1:
      return console.log(
        `${colors.cyan}[INFO: ${new Date().toLocaleString()}] %s${colors.reset}`,
        message
      );
    case 2:
      return console.log(
        `${colors.yellow}[WARNING: ${new Date().toLocaleString()}] %s${
          colors.reset
        }`,
        message
      );
    case 3:
      return console.log(
        `${colors.green}[SUCCESS: ${new Date().toLocaleString()}] %s${
          colors.reset
        }`,
        message
      );
    case 4:
      return console.log(
        `${colors.red}[ERROR: ${new Date().toLocaleString()}] %s${colors.reset}`,
        message
      );
    default:
      return console.log(`[LOG: ${new Date().toLocaleString()}] %s`, message);
  }
};

module.exports = fastlog;
