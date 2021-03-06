// SOCIAL PANEL JS
var canvas = document.querySelector('#snowField');
var ctx = canvas.getContext('2d');
document.addEventListener('mousemove', function (e) {
  var body = document.querySelector('body');
  var heart = document.createElement('h6');
  // lẤY TẠO ĐỘ X VÀ Y KHI RÊ CHUỘT
  var x = e.offsetX;
  var y = e.offsetY;
  //XÁC ĐỊNH TOP VÀ LEFT CỦA HÌNH THEO TỌA ĐỘ X VÀ Y
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  // TẠO NGẪU NHIÊN KÍCH THƯỚC CỦA HÌNH
  var size = Math.random() * 100;
  heart.style.width = 2 + size + 'px';
  heart.style.height = 2 + size + 'px';
  body.appendChild(heart);
  //TRONG THỜI GIAN 2 GIÂY SẼ XÓA HÌNH

  setTimeout(function () {
    heart.remove();
  }, 2000);
});
;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var totalSnow = 100;

function Snow() {
  this.x = Math.round(Math.random() * canvas.width);
  this.y = Math.round(Math.random() * canvas.height);
  this.r = Math.random() * 4 + 1;
  this.d = Math.random() * totalSnow;
  this.a = Math.random() * 5;
}

Snow.prototype.update = function () {
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();

  this.x += Math.sin(this.a) / 4;
  this.y += Math.random() * 1 + 1;
  // this.y += Math.cos(this.a + this.d) + 1 + this.r/2;
  if (this.x > canvas.width || this.x < 0) {
    this.x = Math.random() * canvas.width;
  }
  if (this.y > canvas.height) {
    this.y = 0;
  }
  this.a += 0.01;
  // console.log(this.x + ' ' + this.y);
};

var snows = [];
// var imgTree = new Image();
// imgTree.src = '../images/code.svg';
// var imgLight = new Image();
// imgLight.src ='../images/tree.png';

function draw() {
  // console.log(imgTree.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(
  //   imgTree,
  //   0,
  //   canvas.height - imgTree.height / 4 + 50,
  //   500,
  //   550
  // );
  // ctx.drawImage(
  //   imgLight,
  //   canvas.width - imgLight.width / 3,
  //   0,
  //   imgLight.width / 4,
  //   imgLight.height / 4
  // );
  // ctx.fontFamily = 'Segoe UI, sans-serif';
  ctx.font = '70px Segoe UI, sans-serif';
  ctx.fillText('WEB APP DEVELOPER', 500, 350);
  ctx.font = '50px Segoe UI, sans-serif';
  ctx.fillText('Design web 2020 ', 600, 450);
  for (var i = 0; i < snows.length; i++) {
    snows[i].update();
  }

  requestAnimationFrame(draw);
}

window.onload = function () {
  for (var i = 0; i < totalSnow; ++i) {
    var _snow = new Snow();
    snows.push(_snow);
  }
  console.log(snows);

  draw();
};

