const grades: number[] = [1, 2, 3, 4, 5];
const gradeListItems: string[] = []; // 要素が空の配列
for (let i = 0; i < grades.length; i++) {
  const listItem = `<li>${grades[i]}年</li>`;
  gradeListItems.push(listItem); // 要素を追加
}

console.log(grades);
console.log(gradeListItems);