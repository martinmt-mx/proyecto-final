const Colors = require("colors")

module.exports = {
  getParamByIndex: (paramIndex) => process.argv.slice(2)[paramIndex],
  printWarning: (textoAdvertencia, texto) =>
  console.log(
    `${Colors.yellow("Advertencia:")} + ${Colors.yellow(textoAdvertencia)}  ${texto}`
  ),
  printError: (errorText, texto) =>
  console.log(
    `${Colors.red("Error:")}  ${Colors.red(errorText)}  ${texto}`
  ),
  printSuccess: (textoCorrecto, texto) =>
  console.log(
    `${Colors.green("Correcto:")}  ${Colors.green(textoCorrecto)}  ${texto}`
  ),
  printInfo: (TextoOrder, texto) =>
  console.log(
    `${Colors.magenta("Order:")}  ${Colors.magenta(TextoOrder)} ${texto}`
  ),
}