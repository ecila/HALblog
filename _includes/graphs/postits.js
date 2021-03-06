
var currentElement;
var currentPostits = [];
var container = document.getElementById('postit');
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processRequest;
var hasGotFile = false;
var url = "http://www.algorithmiclistening.org/";
getLocalFile();

/*CONVERTING POSTITS*/

function arrayFromObject(objects)
{
  var toReturn  = [];
  for(var i = 0; i < objects.length; i++)
  {
    var arr = [];
    var obj = objects[i];
    arr.push(obj.x);
    arr.push(obj.y);
    arr.push(obj.text);
    arr.push(obj.color);
    toReturn.push(arr);
  }
  return toReturn;
};

function removeTitles(csv)
{
  var withoutTitles = [];
  var startIndex = 0;
  if (csv[0][0] == 'x' && csv[0][1] == 'y' && csv[0][2] == 'text' && csv[0][3] == 'color')
  {
    startIndex = 1;
  }
  for(var i = startIndex; i < csv.length; i++)
  {
    withoutTitles.push(csv[i]);
  }
  return withoutTitles;
};

function addTitles(csv)
{
  var withTitles = [['x','y','text','color']];
  for(var i = 0; i < csv.length; i++)
  {
    withTitles.push(csv[i]);
  }
  return withTitles;
};

function rawContentString(csv)
{
  var raw = "x,y,text,color\n";
  for(var i = 0; i < csv.length; i++)
  {
    var postit = csv[i];
    for(var j = 0; j < postit.length; j++)
    {
      raw = raw + postit[j];
      if(j < postit.length-1)
      {
        raw = raw + ","
      }
    }
    raw = raw + "\n";
  };
  return raw;
};

/*KEY PRESS*/

function handleKeyPress(evt)
{
    var e = evt;
    var charCode = e.which || e.keyCode;

    if (charCode == 9 ) 
    {
        postitToFront(currentElement);
        return false;
    }

    return true;
};

/*API*/

function getLocalFile()
{

  /* xhr.open('GET', url + "data/postits.csv", true);
   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(); */

  var arr = arrayFromObject({{site.data.postits | jsonify}});
  console.log(arr);
  drawPostitsFromFile(arr);
};

 
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200 && hasGotFile == false) {
        var response = JSON.parse(xhr.responseText);
        var arr = arrayFromObject(response['content']);
        console.log("processing request");
        console.log(arr);
        drawPostitsFromFile(arr);
        hasGotFile = true;
    }
};

function updateLocalFile(csv)
{
  console.log("updating local file");
  var withHeader = [['x','y','text','color']];
  for(var i = 0; i < csv.length; i++)
  {
    withHeader.push(csv[i]);
  }
  var data = {
    "path": "_data/postits.csv",
    "relative_path": "_data/postits.csv",
    "slug": "data_file",
    "ext": ".csv",
    "title": "Postits",
    "raw_content":rawContentString(csv),
    "content": withHeader
  };
  xhr.open('PUT', url + "_api/data/postits.csv", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(data));

};

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
    item1.onkeydown = handleKeyPress;
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

function postitToFront(postit)
{
  updatePostitsFromDivs();

  var index = postit.getAttribute('index');
  var removed = currentPostits.splice(index,1);
  currentPostits.push(removed[0]);

  redrawCurrentPostits();
};

/*INTERACT.JS*/

interact('.tap-target')
.on('tap', function (event) {
  console.log('tap on ' + event.target.getAttribute('index'));
  currentElement = event.target;
  /*updateLocalFile(currentPostits);*/
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
  lines = removeTitles(lines);
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
  var withTitle = addTitles(currentPostits);
  csvGenerator = new CsvGenerator(withTitle, 'postits.csv');
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