let qr;

function generateQR() {
    const text = document.getElementById("qrText").value.trim();
    if (!text) {
        alert("Please enter text or URL");
        return;
    }

    const size = parseInt(document.getElementById("qrSize").value);
    const colorDark = document.getElementById("qrColorDark").value;
    const colorLight = document.getElementById("qrColorLight").value;
    const errorLevel = document.getElementById("qrError").value;
    const logoFile = document.getElementById("logoInput").files[0];

    const qrContainer = document.getElementById("qrCode");
    qrContainer.innerHTML = "";

    qr = new QRCode(qrContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: colorDark,
        colorLight: colorLight,
        correctLevel: QRCode.CorrectLevel[errorLevel]
    });

    if (logoFile) {
        embedLogo(logoFile, size);
    }
}

function embedLogo(file, qrSize) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            const canvas = document.querySelector("#qrCode canvas");
            const ctx = canvas.getContext("2d");

            const logoSize = qrSize * 0.2;
            const x = (qrSize - logoSize) / 2;
            const y = (qrSize - logoSize) / 2;

            ctx.drawImage(img, x, y, logoSize, logoSize);
        };
    };
    reader.readAsDataURL(file);
}

function downloadQR() {
    const canvas = document.querySelector("#qrCode canvas");
    if (!canvas) {
        alert("Generate a QR code first");
        return;
    }

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
