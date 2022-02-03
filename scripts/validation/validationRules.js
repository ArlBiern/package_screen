const validationRules = {
  phone: {
    regex: /^[0-9]{9}$/,
    errorInfo: "Numer telefonu powinien zawierać 9 cyfr",
  },
  code: {
    regex: /^[0-9]{4}$/,
    errorInfo: "Kod powinien składać się z 4 cyfr",
  },
};

export default validationRules;
