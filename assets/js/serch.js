function getByTitle() {
    var title = $('#searchInput').val();
    $.ajax({
        type: 'GET',
        url: 'https://uts-rayfan-2024-3e17b3bd197f.herokuapp.com/games/title', 
        data: { title: title }, 
        dataType: 'json',
        success: function (response) {
            $('#dataTable tbody').html('<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">' +
                '<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">' + response.title + '</th>' +
                '<td class="px-6 py-4">' + response.genre + '</td>' +
                '<td class="px-6 py-4">' + response.developer + '</td>' +
                '<td class="px-6 py-4">' + response.publisher + '</td>' +
                '<td class="px-6 py-4">' + response.release_year + '</td>' +
                '<td class="px-6 py-4">' + response.platform + '</td>' +
                '<td class="px-6 py-4">' + response.mode + '</td>' +
                '<td class="px-6 py-4">' + response.price + '</td>' +
                '<td class="px-6 py-4">' + response.rating + '</td>' +
                '</tr>');
        },
        error: function (xhr) {
            console.error(xhr.responseText);
        }
    });
}

$('#searchButton').click(function () {
    getByTitle();
});

$('#searchInput').keypress(function (event) {
    if (event.which === 13) {
        getByTitle();
    }
});
