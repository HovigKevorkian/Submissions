var imageChange = document.querySelector('img');

imageChange.onmouseover = function() {
  imageChange.src = 'images/image1_2.jpg';
};

imageChange.onmouseout = function() {
  imageChange.src = 'images/image1.jpg';
};
