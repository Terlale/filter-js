const data = [
    { id: 1, name: "Ramzi", surname: "Mammadli", age: 27, MusteriNO: 15, located: "Baku", sifarisSayi: 1020},
    { id: 2, name: "Heydar", surname: "Mammadli", age: 3, MusteriNO: 12, located: "Sumqayit", sifarisSayi: 151 },
    { id: 3, name: "John", surname: "Wick", age: 21, MusteriNO: 12, located: "Gence", sifarisSayi: 1510 },
    { id: 4, name: "Ilqar", surname: "Abdurahmanov", age: 31, MusteriNO: 13, located: "Gence", sifarisSayi: 1320 },
    { id: 5, name: "Tural", surname: "Rustamov", age: 29, MusteriNO: 13, located: "Baku", sifarisSayi: 1015 },
    { id: 6, name: "Sitare", surname: "Hummetova", age: 27, MusteriNO: 13, located: "Baku", sifarisSayi: 952 },
    { id: 7, name: "Terlale", surname: "Ramazanova", age: 21, MusteriNO: 18, located: "Gence", sifarisSayi: 698 },
    { id: 8, name: "Rauf", surname: "Qarayev", age: 27, MusteriNO: 18, located: "Baku", sifarisSayi: 1205 },
    { id: 9, name: "Recep", surname: "Tayyip", age: 18, MusteriNO: 20, located: "Baku", sifarisSayi: 125 },
    { id: 10, name: "Rauf", surname: "Qarayev", age: 27, MusteriNO: 18, located: "Sumqayit", sifarisSayi: 60 },
    { id: 11, name: "Emine", surname: "Erdogan", age: 18, MusteriNO: 20, located: "Baku", sifarisSayi: 320 },
    { id: 12, name: "John", surname: "Doe", age: 18, MusteriNO: 18, located: "Sumqayit", sifarisSayi: 195 },
  ];

const arr = data.filter((item) => item.age === 21 || item.age === 27 || item.age === 18)
// const arr = data.filter((item) => item.MusteriNO === 12 || item.MusteriNO === 13 || item.MusteriNO === 18 || item.MusteriNO === 20)
// const arr = data.filter((item) => item.located ==='Sumqayit' || item.located==='Baki' || item.located==='Gence')
// const arr = data.filter((item) => item.sifarisSayi >1000)
// const arr = data.filter((item) => item.sifarisSayi <1000)

  console.log(arr)