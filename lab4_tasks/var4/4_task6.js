let url = new URL(window.location.href);

let text = url.searchParams.get("input_text") || "";
let bold = url.searchParams.get("bold");
let italic = url.searchParams.get("italic");
let underline = url.searchParams.get("underline");
let text_case = url.searchParams.get("case");
let color = url.searchParams.get("color");

document.querySelector("textarea").value = text;

if (bold) {
    text = `<b>${text}</b>`;
}
if (italic) {
    text = `<i>${text}</i>`;
}
if (underline) {
    text = `<span style="text-decoration: underline">${text}</span>`;
}
if (text_case === "lower") {
    text = `<span style="text-transform: lowercase">${text}</span>`;
}
if (text_case === "upper") {
    text = `<span style="text-transform: uppercase">${text}</span>`;
}
if (color !== "#000000") {
    text = `<span style="color: ${color}">${text}</span>`;

}
document.querySelector(".result").innerHTML = text;



