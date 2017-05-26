---
layout: postit
permalink: "/postits/"
date:   2016-12-22 16:32:39 -0400
jsarr:
- graphs/postits.js
categories: Javascript
header:
  image_fullwidth: "borchert1.gif"
comments: false  
---


<style type="text/css">
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.draggable {
  width: 150px;
  height: 90px;
  color: black;
  border-radius: 0.125em;
  float: left;
  border-width: 0px;
}

textarea {
  overflow: auto;
  resize: none;
  color: black;
}

button {
  background-color: white;
  color:black;
  border-radius: 4px;
}

button:hover {
  background: #58af58;
}

input[type=file] {
  color: black;
  background: white;
  padding: 10px 10px 10px 10px;
}
input[type=file]:hover {
  background: #58af58;
}

#postit {
    width: 100%; 
    height: 500px;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-radius: 1.0em;
}

.span4 {
    display: inline-block;
}
</style>

<div class="row-fluid">
    <div class="span4"><button type="button" onclick="addPostit('#ffff66')">Add Yellow</button></div>
    <div class="span4"><button type="button" onclick="addPostit('#00ffff')">Add Blue</button></div>
    <div class="span4"><button type="button" onclick="addPostit('#ff3399')">Add Pink</button></div>
    <div class="span4"><button type="button" onclick="addPostit('#66ff66')">Add Green</button></div>
    <div class="span4"><button type="button" onclick="deleteSelected()">Delete</button></div>
</div>
<div class="row-fluid">
 <div class="span4"><input type="file" id="csvFileInput" onchange="handleFiles(this.files)"
            accept=".csv"></div>
<div class="span4"><button type="button" onclick="saveCSV()">Download</button></div>
</div>
