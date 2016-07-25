function validateForm() {
  var nickname = $("[name='nickname']");
  if (nickname == null || x == "") {
    alert("Oh come on! He calls you this every day!");
    return false;
  }
  if (nickname == "apple" || nickname == "Apple") {
    window.location.href = "http://www.google.com";
  }
}
