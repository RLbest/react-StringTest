import React from 'react';
import './style.css';

export default function App() {
  var str = 'ababbaccb';
  var newStr = str.split((str.length / 2).toString);
  var middle = Math.floor(str.length / 2);
  var before = str.substr(0, middle);
  var after = str.substr(middle + 1);
  var newStr = after + before;
  console.log(newStr);

  newStr.includes('bb') ? console.log(true) : console.log(false);
  console.log(middle);
  console.log(before);
  console.log(after);

  // find the sum of indivisual digits of array

  const arr = [12, 67, 876, 99, 66, 57];

  for (var i = 0; i <= arr.length - 1; i++) {
    let splitVl = arr[i]
      .toString()
      .split('')
      .reduce((acc, res) => {
        return +acc + +res;
      });
    splitVl % 2 === 0 ? console.log('EVEN') : console.log('ODD');
    console.log(splitVl);
  }

  // another way
  const newMethod = arr.map((val) =>
    val
      .toString()
      .split('')
      .reduce((total, res) => +total + +res)
  );
  console.log(newMethod);

  // end of process

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
