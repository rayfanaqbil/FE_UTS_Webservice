import { isiTabel } from "../temp/table.js";

export function isiTable(results) {
    clearTable();
    console.log(results)
    results.forEach(isiRow);
}

function isiRow(value) {
    let content =
        isiTabel.replace("#Title", value.title)
            .replace("#Genre", value.genre)
            .replace("#Developer", value.developer)
            .replace("#Publisher", value.publisher)
            .replace("#ReleaseYear", value.release_gityear)
            .replace("#Platform", value.platform)
            .replace("#Mode", value.mode)
            .replace("#Price", value.price)
            .replace("#Rating", value.rating);


    const tableBody = document.querySelector('#dataTable tbody');
    if (tableBody) {
        
        let newRow = document.createElement('tr');
        newRow.innerHTML = content;
        tableBody.appendChild(newRow); 
    }
}

function clearTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    if (tableBody) {
        tableBody.innerHTML = ''; 
    }
}
