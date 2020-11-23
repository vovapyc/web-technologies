function calculateHypotenuse() {

    let kat1 = parseFloat(document.getElementById("kat1").value);
    let kat2 = parseFloat(document.getElementById("kat2").value);

    if (kat1 > 0 && kat2 > 0) {
        let hypotenuse = Math.sqrt(
            Math.pow(kat1, 2) + Math.pow(kat2, 2)
        )
        document.getElementById("result").innerText = "Катет: " + hypotenuse
    } else {
        alert("Ви помилились під час введення значення");
    }
}
