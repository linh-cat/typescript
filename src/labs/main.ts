export function checkNumber(n: number) {
  return n > 0;
}

export function isNumber(num: any) {
  return typeof num === 'number';
}

interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const studentList: Student[] = [
  { id: 1, name: 'linh', age: 22, gender: 'male' },
  { id: 2, name: 'Tuyen', age: 22, gender: 'female' },
];

const newList = [...studentList];

newList[0].name = 'Alice alice';

console.log(newList[0]);
