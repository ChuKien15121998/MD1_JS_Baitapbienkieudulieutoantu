let diemVatly = +prompt("Nhap diem Vat Ly");
let diemHoahoc = +prompt("Nhap diem Hoa Hoc");
let diemSinhhoc = +prompt("Nhap diem Sinh Hoc");
let diemTrungbinh = (diemVatly + diemHoahoc + diemSinhhoc) / 3;
document.write(diemTrungbinh);
