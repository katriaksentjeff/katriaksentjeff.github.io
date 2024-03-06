console.log('Is this working?');

let viz;

//Add Share Link to Tableau Public in here
const url = "https://tuni-my.sharepoint.com/:x:/g/personal/katri_aksentjeff_tuni_fi/Ee4z-iRLNxBPocnoyh6sF6wBju68rvLZTRzXj7-S69SGrg?e=to2GfX";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1000,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');


//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

//click on image to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });
