var nilai = 70
var grade = "";

if(nilai >= 70) grade = "A"
else if(nilai >= 60) grade = "B"
else if(nilai >= 50) grade = "C"
else if(nilai >= 40) grade = "D"
else if(nilai >= 30) grade = "E"
else grade = "F";

console.log(`Terbesar: ${grade}`);