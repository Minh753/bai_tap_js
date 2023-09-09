// Hàm tính lương
function tinhLuong() {
    // input:số ngày làm , lương 1 ngày :number
    var luong1Ngay = +document.getElementById('luong1Ngay').value;
    var soNgayLam = +document.getElementById('soNgayLam').value
    // output : lương : number
    var luong = 0
    // process
    luong = luong1Ngay * soNgayLam;
    // in output ra giao diện
    document.getElementById('tongLuong').innerHTML = luong + '$'

}

// Hàm tính tổng
function tinhTrungBinh() {
    // alert(1)
    // input: số thứ 1,2,3,4,5 :number
    var soThu1 = +document.getElementById('soThu1').value;
    var soThu2 = +document.getElementById('soThu2').value;
    var soThu3 = +document.getElementById('soThu3').value;
    var soThu4 = +document.getElementById('soThu4').value;
    var soThu5 = +document.getElementById('soThu5').value;
    // output trung bình:number
    var trungBinh = 0
    // process
    trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
    // in output ra giao diện
    document.getElementById('tinhTrungBinh').innerHTML = trungBinh
}

// Hàm đổi tiền
function doiTien() {
    // input :số tiền : number
    var soDo = +document.getElementById('soDo').value;
    // output : tiền đổi được :number
    var tienViet = 0
    // process
    tienViet = soDo * 23500
    // in output ra giao diện
    document.getElementById('doiTien').innerHTML = new Intl.NumberFormat('vn-VN').format(tienViet);
}

// Hàm Tính Chu vi
function tinhChuVi() {
    // input chiều dài , rộng : number
    var canhThu1 = +document.getElementById('canhThu1').value;
    var canhThu2 = +document.getElementById('canhThu2').value;
    // output chu vi :number
    var chuVi = 0
    // process
    chuVi = (canhThu1 + canhThu2) * 2
    // in output ra giao diện
    document.getElementById('ketQua').innerHTML = chuVi + 'cm'
}
// Hàm tính Diện Tích
function tinhDienTich() {
    // input chiều dài , rộng : number
    var canhThu1 = +document.getElementById('canhThu1').value;
    var canhThu2 = +document.getElementById('canhThu2').value;
    // output chu vi :number
    var chuVi = 0
    // process
    dienTich = canhThu1 * canhThu2
    // in output ra giao diện
    document.getElementById('ketQua').innerHTML = dienTich + 'cm²'
}

// Tính tổng ký số
function tinhTongKySo() {
    // input ký số : number
    var kySo = +document.getElementById('kySo').value
    // output tổng ký số :number
    var tongKySo = 0
    // process
    phanChuc = Math.floor(kySo / 10)
    donVi = kySo % 10
    tongKySo = phanChuc + donVi
    // in output ra giao diện
    document.getElementById('tongKySo').innerHTML = tongKySo
}

