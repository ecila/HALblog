
var currentElement;
var currentPostits = [];
var container = document.getElementById('postit');

/*RENDERING POSTITS*/

function drawPostitsFromFile(postits)
{
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  currentPostits = [];
  for(var i = 0; i < postits.length; i++)
  {
    currentPostits.push(postits[i]);
    drawPostit(postits[i],i);
  }
};

function updatePostitsFromDivs()
{
  var textareas = document.getElementsByClassName('draggable tap-target');
  for(var i = 0; i < textareas.length; i++)
  {
    var textarea = textareas[i];
    var index = parseInt(textarea.getAttribute('index'));
    var x = parseInt(textarea.getAttribute('data-x'));
    var y = parseInt(textarea.getAttribute('data-y'));
    currentPostits[index][0] = x;
    currentPostits[index][1] = y;
    currentPostits[index][2] = textarea.value;
  }
}

function redrawCurrentPostits()
{  
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  var tempArr = [];
  for(var i = 0; i < currentPostits.length; i++)
  {
    tempArr.push(currentPostits[i]);
    drawPostit(currentPostits[i],i);
  }
  currentPostits = tempArr;
};

function drawPostit(postit,index)
{
    var item1 = document.createElement('textarea');
    var x = postit[0];
    var y = postit[1];
    var text = postit[2];
    var color = postit[3];
    container.appendChild(item1);
    item1.className = "draggable tap-target";
    item1.value = text;
    item1.setAttribute('data-x', x);
    item1.setAttribute('data-y', y);
    item1.setAttribute('index', index);
    item1.style.position = 'absolute';
    item1.style.backgroundColor = color;
    item1.style.webkitTransform =
    item1.style.transform =
    'translate(' + x + 'px, ' + y+ 'px)';
};

function addPostit(color)
{
  var postit = [0,0,"New Idea!",color];
  currentPostits.push(postit);
  drawPostit(postit,currentPostits.length-1);
};

function deleteSelected()
{
  var index = currentElement.getAttribute('index');
  updatePostitsFromDivs();
  currentPostits.splice(index,1);
  redrawCurrentPostits();
};

/*INTERACT.JS*/

interact('.tap-target')
.on('tap', function (event) {
  console.log('tap on ' + event.target.getAttribute('index'));
  currentElement = event.target;
});

interact('.draggable')

  .draggable({
    inertia: true,
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,

    onmove: dragMoveListener,

  });

  function dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    var index = parseInt(target.getAttribute('index'));
    currentPostits[index][0] = x;
    currentPostits[index][1] = y;
    currentElement = target;
  };

window.dragMoveListener = dragMoveListener;

/*CSV READER*/

function handleFiles(files) {
  if (window.FileReader) {
      getAsText(files[0]);
  } else {
      alert('FileReader are not supported in this browser.');
  }
};

function getAsText(fileToRead) {
  var reader = new FileReader();
  reader.readAsText(fileToRead);
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
};

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);
};

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
            var tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
    }
  console.log(lines);
  drawPostitsFromFile(lines);
};

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Canno't read file !");
  }
};

/*CSV DOWNLOAD*/

function saveCSV() {

  updatePostitsFromDivs();
  csvGenerator = new CsvGenerator(currentPostits, 'halPostits.csv');
  csvGenerator.download(true);
};

/*CSVGENERATOR CLASS*/

function CsvGenerator(dataArray, fileName, separator, addQuotes) {
  this.dataArray = dataArray;
  this.fileName = fileName;
  this.separator = separator || ',';
  this.addQuotes = !!addQuotes;

  if (this.addQuotes) {
      this.separator = '"' + this.separator + '"';
  }

  this.getDownloadLink = function () {
      var separator = this.separator;
      var addQuotes = this.addQuotes;

      var rows = this.dataArray.map(function (row) {
          var rowData = row.join(separator);

          if (rowData.length && addQuotes) {
              return '"' + rowData + '"';
          }

          return rowData;
      });

      var type = 'data:text/csv;charset=utf-8';
      var data = rows.join('\n');

      if (typeof btoa === 'function') {
          type += ';base64';
          data = btoa(data);
      } else {
          data = encodeURIComponent(data);
      }

      return this.downloadLink = this.downloadLink || type + ',' + data;
  };

  this.getLinkElement = function (linkText) {
      var downloadLink = this.getDownloadLink();
      var fileName = this.fileName;
      this.linkElement = this.linkElement || (function() {
          var a = document.createElement('a');
          a.innerHTML = linkText || '';
          a.href = downloadLink;
          a.download = fileName;
          return a;
      }());
      return this.linkElement;
  };

  this.download = function (removeAfterDownload) {
      var linkElement = this.getLinkElement();
      linkElement.style.display = 'none';
      document.body.appendChild(linkElement);
      linkElement.click();
      if (removeAfterDownload) {
          document.body.removeChild(linkElement);
      }
  };
};