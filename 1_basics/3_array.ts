// dizinin veri tipini tanımlarken dizinin iiçerisindeki elemanların tipini söyleriz.

const students: string[] = ["ahmet", "mehmet", "sude", "40"];

// bütün dizi methodları dizinin tipini dikkate alır.
students.push("ali");
// students.push(21);

const ages: number[] = [23, 32, 23, 43, 2, 5, 1];
const license: boolean[] = [true, false, false];

// normalde dizinin tel bir veritipinden oluşmasını bekleriz.
// union type kullanarak ya bu olsun ya bu olsun diyebiliyoruz

const teachers: (string | null)[] = ["Ayşe", "Hasan", null];
