$(document).ready(() => {
    selectData();
    $("#refresh").on("click", selectData);
});

const selectData = () => {
    $.ajax({
        url: "http://localhost:5000/api",
        method: "GET",
        crossDomain : "true",
        dataType: "json",
        success: (data) => {
            console.log(data);
        }
    });
};