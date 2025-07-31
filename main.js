let zakaz_soni = prompt("Nechta Снек сет zakaz qilmoqchisiz ?");
let tasdiqlash = confirm(`Siz ${zakaz_soni} ta Снек сет olmoqdasiz narxi: ${zakaz_soni * 1000}`);

function Zakaz() {
    switch (tasdiqlash) {
        case true:
            alert(" Sizning Zakazingiz qabul qilindi");
            break;
        case false:
            alert("Sizning Zakazingiz bekor qilindi");
            break;
        default:
            alert("Menyuga qayta qaytish iltimos otmenani bosing");
            break;
    }
}
Zakaz();
