(function() {
  var signinUrl = 'https://private-47ed5-interviewapitest.apiary-mock.com/signin',
  loginForm = '#login';

  function post(url, data, cb) {
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onload = function() {
      cb(JSON.parse(this.responseText));
    };
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }

  function blockUI(status, el) {
    var spinnerClass = 'block-spinner',
    blockUIClass = 'block-ui',
    loader = document.createElement('div'),
    blockEl = document.querySelector(el);

    loader.classList.add(spinnerClass);
    blockEl.classList.add(blockUIClass);

    if (status) {  //block
      blockEl.appendChild(loader);
    } else { // unblock
      var blockedClass = '.' + blockUIClass + ' .' +  spinnerClass,
      blocked = document.querySelector(blockedClass);

      if (blocked) {
        blocked.remove();
      }
    }
  }

  $.validate({
    form : loginForm,
    modules: 'security',
    onModulesLoaded : function() {
      var optionalConfig = {
        fontSize: '14px',
        padding: '0',
        bad: 'Weak password',
        weak: 'Weak password',
        good: 'Good password',
        strong: 'Strong password'
      };
      $('input[type="password"]').displayPasswordStrength(optionalConfig);
    },
    onSuccess: function() {
      blockUI(true, loginForm);
      post(signinUrl, {
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
      }, function(res) {
        blockUI(false, loginForm);
        if (res) {
          console.log(res);
          if (res.error.msg) {
            alert(res.error.msg);
          }
        }
      })
      return false;
    }
  });

})();
