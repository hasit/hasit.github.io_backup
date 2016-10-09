(function () {
  window.addEventListener('load', function () {
    events();
    projects();
    expandGroups('click');
    expandGroups('touchend');
  }, false);
})();

(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
  (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-85409468-1', 'auto');
ga('send', 'pageview');

function expandGroups(event) {
  var els = document.getElementsByClassName('title');
  Array.prototype.forEach.call(els, function (el) {
    el.addEventListener(event, function () {
      el.parentElement.classList.toggle('expand');
    }, false);
  });
}

// build headers for requests
function buildHeader() {
  var head = new Headers();
  head.append('pragma', 'no-cache');
  head.append('cache-control', 'no-cache');

  var init = {
    method: 'GET',
    headers: head,
  };
  return init;
}

// pull highlights content
function pullData(file) {
  return fetch('./data/' + file + '.json', buildHeader()).then(function (response) {
    return response.json();
  });
}

function events() {
  var h = document.getElementById('events');
  pullData('events').then(function (r) {
    for (var i = 0, len = r.data.length; i < len; i++) {
      var x = r.data[i];
      h.innerHTML += '<li><div class="date">' + x.date + '</div><div class="desc"><div>' + x.description.what + ' <span class=' + x.type + '>' + x.description.who + '</span></div><div class="info">' + x.description.info + '</div></div></li>';
    }
  });
}

function projects() {
  var h = document.getElementById('projects');
  pullData('projects').then(function (r) {
    for (var i = 0, len = r.data.length; i < len; i++) {
      var x = r.data[i];
      h.innerHTML += '<li><div class="date">' + x.date + '</div><div class="desc"><div>' + x.description.what + ' ' + x.description.who + '</div><div class="info">' + x.description.info + '</div></div></li>';
    }
  });
}