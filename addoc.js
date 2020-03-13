$(document).ready(function(){
    var url = "http://localhost:8089/api/getSpecialization";
    $.get(url, function(data){
        // console.log(data);
        var content = "";
        for(let d of data){
            content += `"<option value='${d.specializationId}'>${d.specializationId}</option>"`;
        }
        // console.log(content);
        $("#dataList").append(content);
        
    })
});



function adddoctor() {
    event.preventDefault();

    var docId = $("#docId").val();
    var docName = $("#docName").val();
    var splId = $("#splId").val();
    var conFee = $("#conFee").val();

    console.log(docId);

    var url = "http://localhost:8089/api/addDoctor?consultingfee=" + conFee + "&doctor_id=" + docId + "&doctor_name=" + docName + "&splzation_id=" + splId;
    console.log(url);

    $.post(url)
    .done( function(data){
        
   alert(data);
}).fail( function(err,status){
    console.log(err);
    if (err.status == 201) /* jQuery thinks, Status 201 means error, but it doesnt so we have to work around it here */
    {
        alert("added Successfully");
        return;
    }
    else{    
        var msg = err.responseJSON.errorMessage;
        alert(msg);
    }
});
}

