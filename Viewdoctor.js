function Viewdoctor() {
    let url = "http://localhost:8089/api/viewdoctors";

    $.getJSON(url, function (data) {
        console.table(data);
        display(data);
    });
}
function display(doctors) {

    var content = "";

    for (let d of doctors) {
        console.log(d);
        content += "<tr>";
        content += "<td>" + d.doctorId + "</td>";
        content += "<td>" + d.doctorName + "</td>";
        content += "<td>" + d.specializationId + "</td>";
        content += "<td>" + d.consultationFee + "</td>";
        content += "</tr>";

    }

    $("#doctable").append(content);

}