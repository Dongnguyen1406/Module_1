
    function tinhTrungBinh(){
    let ly= +document.getElementById("vatly").value;
    let hoa= +document.getElementById("hoahoc").value;
    let sinh= +document.getElementById("sinhhoc").value;
    let ketquatrungbinh = (ly+hoa+sinh)/3;
    let ketquatong = ly+hoa+sinh;
    document.getElementById("ketquatong").innerText=ketquatong;
    document.getElementById("ketquatrungbinh").innerText=ketquatrungbinh;
}

    function chuyenDoiNhietDo(){
    let C = +document.getElementById("doC").value;
    let F = 9*(C/5)+32;
    document.getElementById("doF").innerText= " " + F;

}

    function dienTichHinhTron(){
    let r = +document.getElementById("bankinh").value;
    let PI = 3.14;
    let S = PI*r*r
    document.getElementById("ketquadientich").innerText=S;
}

    function chuViHinhTron(){
    let d = +document.getElementById("duongkinh").value;
    let PI = 3.14;
    let C = PI*d
    document.getElementById("ketquachuvi").innerText=C;
}
