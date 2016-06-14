
var button = document.getElementById('output')
  button.addEventListener('click', function() {
var result = document.getElementById('input').value;
console.log(result);

var title = document.getElementById('center_column')

var request = new XMLHttpRequest()

request.open("GET", "http://www.omdbapi.com/?s=" + result)
request.send()

request.onreadystatechange = function(){
  if(request.readyState === 4 && request.status < 400){
    var response  = JSON.parse(request.responseText)
    var array = response.Search
//console.log(array);

    for (var i = 0; i < array.length; i++) {
      // create an img element
      // set the src of that img element to array[i].Poster
      // append img to parent div
      var img = document.createElement("img")
      img.src = array[i].Poster
      img.innerHTML = array[i].Poster
      title.appendChild(img)
      }
    }
  }
})
