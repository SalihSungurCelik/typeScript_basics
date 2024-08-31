// fonksiyonların tipini tanımlama dediğimiz zaman fonksiynların parametrelerinin ve return değerlerinin tipini tanımlamaktan bahsediyoruz.
function hesaplama(a, b) {
    return a + b;
}
// fonksiyonu çağırırken parametreye göre hata kontrolü yapar.
hesaplama(12, 34);
// örnek
// kişinin bulunduğu konummu ve oranın hava derecesini parametre olarak alıp, "Merhaba, .... konumundaki hava derecesi .... derece" metnini döndüren onksiyonu yazınız.
function havaDurumu(konum, derece) {
    return "Merhaba, ".concat(konum, " konumundaki hava derecesi ").concat(derece, "'dir");
}
var sonuc = havaDurumu("İzmir", 32);
console.log(sonuc);
