window.onload = function () {
  var anchors = document.querySelectorAll("a.button-buy");

  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = "LINK_DO_CHECKOUT_AQUI";
  }
};
