// any bir verinin tipi  belli olmadığı zaman kullanılır.
// kullanımı ts aykırıdır.
// sadece geçici olarak veya acil durumlarda kullanılabilir.

let foo: any;

foo = "ts";
foo = 33;
foo = {};
foo = null;
foo = true;

// let bar: string;
// bar = 321;
