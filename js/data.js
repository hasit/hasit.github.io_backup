(function () {
  window.addEventListener('load', function () {
    events();
    projects();
    expandGroups('click');
    expandGroups('touchend');
  }, false);
})();

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
      h.innerHTML += '<li><div class="date">' + x.date + '</div><div class="desc"><div>' + x.description.what + '<span class=' + x.type + '>' + x.description.who + '</span></div><div class="info">' + x.description.info + '</div></div></li>';
    }
  });
}