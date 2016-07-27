var obj = {
  time: '',
  answer: '',
};

function setAnswer(answer) {
  obj.answer = answer;
}

function setTime() {
  var d = new Date();
  var n = d.getTime();
  obj.time = n;
}

function uploadData() {
  var jsonURL = "https://api.myjson.com/bins/2ijg7";

  $.get(jsonURL, function (data, textStatus, jqXHR) {
    data.answers.push(obj);
    var jsonData = JSON.stringify(data);
    
    $.ajax({
      url:jsonURL,
      type:"PUT",
      data:jsonData,
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, textStatus, jqXHR){
        console.log(textStatus + ' ' + jsonData);
      }
    });    
  });
}
