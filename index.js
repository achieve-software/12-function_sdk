// 1-Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

kelimeYazdir("merhaba", 2);

// 2-Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa, uzun) {
  let alan = kısa * uzun;
  let cevre = (kısa + uzun) * 2;
  return `àlan: ${alan} çevre: ${cevre} `;
}

let sonuc = alanCevreHesapla(7, 10);
console.log(sonuc);

// 3- Yazı-Tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTuraAt() {
  let random = Math.random();

  if (random < 0.5) {
    console.log("yazı");
  } else {
    console.log("tura");
  }
  console.log(random);
}

yaziTuraAt();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi) {
  let sayilar = [];
  for (leti = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayilar.push(i);
    }
  }

  return sayilar;
}

console.log(tamBolenler(10));
console.log(tamBolenler(15));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız
// function toplam(a,b,c){

//     return a+b+c;
// }

// console.log(toplam(2,5));
// console.log(toplam(2,5,7));

function sum() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }

  return sonuc;
}

console.log(sum(2, 5));
