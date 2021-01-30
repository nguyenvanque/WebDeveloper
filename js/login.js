// const form = document.getElementById('form_login');
// const username = document.getElementById('username');
// const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   localStorage.username = 'admin';
//   localStorage.password = 'admin';

//   if (
//     username.value == localStorage.username &&
//     password.value == localStorage.password
//   ) {
//     setSuccessFor(username);
//     setSuccessFor(password);
//     var location = 'index.html';
//     this.location.href = location;
//   } else if (username.value == '') {
//     setErrorFor(username, 'Tên người dùng không được để trống');
//   } else if (password.value == '') {
//     setErrorFor(password, 'Mật khẩu không được để trống');
//   }else if(username.value != localStorage.username ){
//         setErrorFor(username, 'bạn nhập sai mật khẩu');
//   }else if( password.value != localStorage.password){
//         setErrorFor(password, 'Bạn nhập sai password');

//   }
// });

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector('small');
//   formControl.className = 'form-control error';
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }
// SOCIAL PANEL JS

$(window).on('hashchange', function () {
  if (location.hash.slice(1) == 'register') {
    $('.card').addClass('extend');
    $('#login').removeClass('selected');
    $('#register').addClass('selected');
  } else {
    $('.card').removeClass('extend');
    $('#login').addClass('selected');
    $('#register').removeClass('selected');
  }
});
$(window).trigger('hashchange');
const form = document.getElementById('form_login');
const usernameDN = document.getElementById('username');
const passwordDN = document.getElementById('password');
const checkBox = document.getElementById('checkBox');

const usernameDK = document.getElementById('usernameDK');
const passwordDK = document.getElementById('passwordDK');
const passwordDKCF = document.getElementById('passwordDKCF');

localStorage.removeItem('email');
localStorage.username = 'admin';
localStorage.password = 'admin';

function DangKy() {
    event.preventDefault();
  if (
    usernameDK.value != '' &&
    passwordDK.value != '' &&
    passwordDKCF.value != ''
  ) {
    if (passwordDK.value != passwordDKCF.value) {
      setErrorFor(passwordDKCF, 'Mật khẩu xác nhận không đúng');
    }else{
    localStorage.username = usernameDK.value;
    localStorage.password = usernameDK.value;
    usernameDN.value = localStorage.username;
    passwordDN.value = usernameDK.value;
    setSuccessFor(usernameDK);
    setSuccessFor(passwordDK);
    setSuccessFor(passwordDKCF);
    }

  }
  if (usernameDK.value == '') {
    setErrorFor(usernameDK, 'Tên người dùng không được để trống');
  } else {
    setSuccessFor(usernameDK);
  }
  if (passwordDK.value == '') {
    setErrorFor(passwordDK, 'Mật khẩu không được để trống');
  } else {
    setSuccessFor(passwordDK);
  }
  if (passwordDKCF.value == '') {
    setErrorFor(passwordDKCF, 'Mật khẩu xác nhận không được để trống');
  } else {
    if (passwordDK.value != passwordDKCF.value) {
      setErrorFor(passwordDKCF, 'Mật khẩu xác nhận không đúng');
    } else {
      setSuccessFor(passwordDKCF);
    }
  }
}

function DangNhap() {
  event.preventDefault();
  if (
    usernameDN.value == localStorage.username &&
    passwordDN.value == localStorage.password
  ) {
    var location = 'index.html';
    this.location = location;
    setSuccessFor(usernameDN);
    setSuccessFor(passwordDN);

    if (checkBox.checked) {
      localStorage.setItem('checkBox', 'luutrangthai');
    } else {
      localStorage.removeItem('checkBox');
    }
  } else if (passwordDN.value == '' && passwordDN.value == '') {
    setErrorFor(usernameDN, 'Tên người dùng không được để trống');
    setErrorFor(passwordDN, 'Mật khẩu không được để trống');
  }  if (
    usernameDN.value != localStorage.username 
  ) {
    setErrorFor(usernameDN, 'Bạn nhập sai tên người dùng');
  }
  if (passwordDN.value != localStorage.password){
    setErrorFor(passwordDN, 'Bạn nhập sai mật khẩu');
  }
    if (usernameDN.value == '') {
      setErrorFor(usernameDN, 'Tên người dùng không được để trống');
    } else {
      // setSuccessFor(usernameDN);
    }
  if (passwordDN.value == '') {
    setErrorFor(passwordDN, 'Mật khẩu không được để trống');
  } else {
    // setSuccessFor(passwordDN);
  }
}

if (localStorage.checkBox == checkBox.value) {
  //checBox.setAttribute('checked', 'checked');
  checkBox.checked = true;
  usernameDN.value = localStorage.username;
  passwordDN.value = localStorage.password;
} else {
  //checBox.removeAttribute('checked', 'checked');
  checkBox.checked = false;
  usernameDN.value = '';
  passwordDN.value = '';
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'input error';
  small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'input success';
}



// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector(
//   '.social-panel-container'
// );

// floating_btn.addEventListener('click', () => {
//   social_panel_container.classList.toggle('visible');
// });

// close_btn.addEventListener('click', () => {
//   social_panel_container.classList.remove('visible');
// });
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
