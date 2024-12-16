/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }

  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const tempX = queen.x;
  const tempY = queen.y;
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  let j = tempY;
  for (let i = tempX; i > 0; i -= 1) {
    if (king.x === i && king.y === j && j > 0) {
      return true;
    }
    j -= 1;
  }
  j = tempY;
  for (let i = tempX; i < 9; i += 1) {
    if (king.x === i && king.y === j && j < 9) {
      return true;
    }
    j += 1;
  }
  j = tempY;
  for (let i = tempX; i < 9; i += 1) {
    if (king.x === i && king.y === j && j > 0) {
      return true;
    }
    j -= 1;
  }
  j = tempY;
  for (let i = tempX; i > 0; i -= 1) {
    if (king.x === i && king.y === j && j < 9) {
      return true;
    }
    j += 1;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const angleA = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c);
  const angleB = (a ** 2 + b ** 2 - c ** 2) / (2 * a * b);
  const angleC = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);
  if (a + b > c && a + c > b && b + c > a) {
    if (angleA === angleB || angleA === angleC || angleB === angleC)
      return true;
    return false;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romNum = '';
  if (num < 4) {
    for (let i = 0; i < num; i += 1) {
      romNum += 'I';
    }
  }
  if (num === 4) {
    romNum = 'IV';
  }
  if (num > 4 && num < 10) {
    romNum = 'V';
    for (let i = 0; i < num - 5; i += 1) {
      romNum += 'I';
    }
  }
  if (num >= 10 && num < 15) {
    romNum = 'X';
    for (let i = 0; i < num - 10; i += 1) {
      romNum += 'I';
    }
  }
  if (num >= 15 && num < 19) {
    romNum = 'XV';
    for (let i = 0; i < num - 15; i += 1) {
      romNum += 'I';
    }
  }
  if (num === 19) {
    romNum = 'XIX';
  }
  if (num >= 20 && num < 25) {
    romNum = 'XX';
    for (let i = 0; i < num - 20; i += 1) {
      romNum += 'I';
    }
  }
  if (num >= 25 && num < 29) {
    romNum = 'XXV';
    for (let i = 0; i < num - 25; i += 1) {
      romNum += 'I';
    }
  }
  if (num === 29) {
    romNum = 'XXIX';
  }
  if (num >= 30 && num < 35) {
    romNum = 'XXX';
    for (let i = 0; i < num - 30; i += 1) {
      romNum += 'I';
    }
  }
  if (num >= 35 && num < 39) {
    romNum = 'XXXV';
    for (let i = 0; i < num - 35; i += 1) {
      romNum += 'I';
    }
  }
  if (num === 39) {
    romNum = 'XXXIX';
  }

  return romNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let stringNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        stringNumber += 'zero';
        break;
      case '1':
        stringNumber += 'one';
        break;
      case '2':
        stringNumber += 'two';
        break;
      case '3':
        stringNumber += 'three';
        break;
      case '4':
        stringNumber += 'four';
        break;
      case '5':
        stringNumber += 'five';
        break;
      case '6':
        stringNumber += 'six';
        break;
      case '7':
        stringNumber += 'seven';
        break;
      case '8':
        stringNumber += 'eight';
        break;
      case '9':
        stringNumber += 'nine';
        break;
      case '.':
        stringNumber += 'point';
        break;
      case ',':
        stringNumber += 'point';
        break;
      case '-':
        stringNumber += 'minus';
        break;
      default:
    }
    if (i !== numberStr.length - 1) {
      stringNumber += ' ';
    }
  }
  return stringNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const oddEven = Math.floor(str.length / 2);
  let j = str.length - 1;
  let isPalindrom = true;
  for (let i = 0; i < oddEven; i += 1) {
    if (str[i] !== str[j]) {
      isPalindrom = false;
      break;
    }
    j -= 1;
  }
  return isPalindrom;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const number = String(num);
  const hasDigit = String(digit);
  let digitFound = false;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === hasDigit) {
      digitFound = true;
      break;
    }
  }
  return digitFound;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let k = arr.length - 1; k > i; k -= 1) {
      rightSum += arr[k];
    }
    if (rightSum === leftSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let count = 1;
  let k = 0;
  let m = size;
  let l = 0;
  let n = size;

  while (k < m && l < n) {
    for (let i = l; i < n; i += 1) {
      arr[k][i] = count;
      count += 1;
    }
    k += 1;

    for (let i = k; i < m; i += 1) {
      arr[i][n - 1] = count;
      count += 1;
    }
    n -= 1;

    if (k < m) {
      for (let i = n - 1; i >= l; i -= 1) {
        arr[m - 1][i] = count;
        count += 1;
      }
      m -= 1;
    }

    if (l < n) {
      for (let i = m - 1; i >= k; i -= 1) {
        arr[i][l] = count;
        count += 1;
      }
      l += 1;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const squareMatrix = matrix;
  let left = 0;
  let right = squareMatrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const bottom = right;
      const topLeft = squareMatrix[top][left + i];
      squareMatrix[top][left + i] = squareMatrix[bottom - i][left];
      squareMatrix[bottom - i][left] = squareMatrix[bottom][right - i];
      squareMatrix[bottom][right - i] = squareMatrix[top + i][right];
      squareMatrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }

  return squareMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArr = arr;
  for (let i = 1, l = sortedArr.length; i < l; i += 1) {
    const current = sortedArr[i];
    let j = i;
    while (j > 0 && sortedArr[j - 1] > current) {
      sortedArr[j] = sortedArr[j - 1];
      j -= 1;
    }
    sortedArr[j] = current;
  }
  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let sortedEven = '';
  let sortedOdd = '';
  let tempArr = str;
  let i = 0;
  let countInerations = 0;
  let index = iterations;
  for (; i < index; i += 1) {
    for (let j = 0; j < tempArr.length; j += 1) {
      if (j % 2 === 0) {
        sortedEven += tempArr[j];
      } else {
        sortedOdd += tempArr[j];
      }
    }
    countInerations += 1;
    tempArr = sortedEven + sortedOdd;
    if (tempArr === str) {
      while (index >= countInerations) {
        index -= countInerations;
      }
      i = 0;
      index += 1;
      countInerations = 0;
    }
    sortedEven = '';
    sortedOdd = '';
  }
  return tempArr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const givenNumber = String(number);
  let theLeast = givenNumber[givenNumber.length - 1];
  let theSecondLeast = 0;
  let startIndex = 0;
  let endIndex = 0;
  let numberFound = false;
  for (let i = givenNumber.length - 2; i >= 0; ) {
    if (numberFound === true) {
      break;
    }
    if (givenNumber[i] < theLeast) {
      theLeast = givenNumber[i];
      theSecondLeast = givenNumber[i + 1];
      startIndex = i;
      numberFound = true;
      endIndex = i + 1;
      for (let j = i + 2; j < givenNumber.length; j += 1) {
        if (theSecondLeast > givenNumber[j] && givenNumber[j] > theLeast) {
          theSecondLeast = givenNumber[j];
          endIndex = j;
        }
      }
    } else {
      theLeast = givenNumber[i];
      i -= 1;
    }
  }

  if (numberFound === false) {
    return number;
  }

  const arr = [];
  for (let i = 0; i < givenNumber.length; i += 1) {
    if (i === startIndex) {
      arr[i] = givenNumber[endIndex];
    } else if (i === endIndex) {
      arr[i] = givenNumber[startIndex];
    } else {
      arr[i] = givenNumber[i];
    }
  }
  const arr2 = [];
  let k = 0;
  for (let i = startIndex + 1; i < arr.length; i += 1) {
    arr2[k] = arr[i];
    k += 1;
  }

  const arr3 = [];
  for (let i = 0; i <= startIndex; i += 1) {
    arr3[i] = arr[i];
  }

  for (let i = 1; i < arr2.length; i += 1) {
    const current = arr2[i];
    let j = i;
    while (j > 0 && arr2[j - 1] > current) {
      arr2[j] = arr2[j - 1];
      j -= 1;
    }
    arr2[j] = current;
  }

  const finalNumber = +(arr3.join('') + arr2.join(''));
  return finalNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
