$(document).ready(() => {
    selectData();
    $("#refresh").on("click", selectData);
});

const selectData = () => {
    $.ajax({
        url: "localhost:5000/api",
        method: "GET",
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        crossDomain : "true",
        dataType: "json",
        success: (data) => {
            console.log(data);
        }
    });
};