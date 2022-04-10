function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.get width();
    var total = width * height 
    return total;
  
    // missing co

}


var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);