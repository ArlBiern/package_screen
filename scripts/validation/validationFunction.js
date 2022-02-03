import validationRules from "./validationRules.js";

const validationFunction = (validationObject) => {
  let validationResult = {};
  for (let item in validationObject) {
    validationResult[item] = "";

    if (validationRules[item].regex) {
      let regexTest = new RegExp(validationRules[item].regex);
      regexTest.test(validationObject[item])
        ? (validationResult[item] = "")
        : (validationResult[item] = validationRules[item].errorInfo);
    }
  }
  return validationResult;
};

export default validationFunction;
