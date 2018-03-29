import html2canvas from "html2canvas";
import tippy from "tippy.js";
import FileSaver from "file-saver";

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector(".image-container");
  const downloadBtn = document.getElementById("download-button");
  downloadBtn.addEventListener("click", (e) => {
    html2canvas(container).then((canvas) => {
      canvas.toBlob((blob) => FileSaver.saveAs(blob, "佛系.png"));
    });
  });

  tippy(".image-container", {
    placement: "left",
    arrow: true,
    size: "large",
    distance: 20,
  });
});
