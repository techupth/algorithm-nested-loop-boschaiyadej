// เริ่มเขียนโค้ดตรงนี้
/*
 *ให้สร้าง Function printStar Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
 *
 * *
 * * *
 * * * *
 * * * * *
 */
function printStar(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 0; j < i; j++) {
      rowResult += "* ";
    }
    console.log(`รอบที่ ${i} ได้ ${rowResult}`);
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(5));
