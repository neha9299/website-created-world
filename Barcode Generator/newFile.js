const { btn, input } = require("./script");

btn.addEventListener("click", () => {
    JsBarcode("barcode", input.value, {
        format: "code128",
        displayValue: true,
        fontSize: 25,
        lineColor: "#111",
    });
});
