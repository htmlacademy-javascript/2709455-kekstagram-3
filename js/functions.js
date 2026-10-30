const checkStringLength = function (string, maxlength) {
  return string.length <= maxlength;
};

const checkPalindrome = function (string) {
  const workstring = string
    .replaceAll(' ', '')
    .toLowerCase();
  let reverseString = "";
  for (let i = workstring.length - 1; i >= 0; i--) {
    reverseString += workstring[i];
  }
  return reverseString === workstring;
};



