const { getParamByIndex } = require("./printConsola")
const Expresion = require("./expresiones")._default
const Formula = require("./formula")._default
const DEFAULT_EXPRESSION = '2+2'
const main = () =>{
    const input_expression = getParamByIndex(0) ? getParamByIndex(0) : DEFAULT_EXPRESSION;
    new Formula(new Expresion(input_expression))
}
main()