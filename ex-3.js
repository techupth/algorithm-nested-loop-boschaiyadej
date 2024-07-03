// เริ่มเขียนโค้ดตรงนี้
/*
*ให้สร้าง Function multiplicationTable Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงตารางสูตรคูณตั้งแต่ 1 จนถึงตัวเลขที่ใส่เข้ามา หรือก็คือแสดงสูตรคูณขนาน n x n เช่น ถ้า n เป็น 5 จะได้ผลลัพธ์ดังนี้
1   2   3   4   5   
2   4   6   8  10  
3   6   9  12  15  
4   8  12  16  20  
5  10  15  20  25  
*/
function multiplicationTable(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 1; j <= n; j++) {
      rowResult += i * j + "\t";
    }
    console.log(`รอบที่ ${i} ได้ ${rowResult}`);
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(multiplicationTable(5));
