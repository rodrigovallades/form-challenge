var signinUrl = 'https://private-47ed5-interviewapitest.apiary-mock.com/signin'

function post(url, data, cb) {
  var xhr = new XMLHttpRequest()
  console.log(xhr)
  xhr.onload = function() {
    cb(JSON.parse(this.responseText))
  }
  xhr.open('POST', url)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(JSON.stringify(data))
}

window.submitForm = function() {
  post(signinUrl, {
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value
  }, function(res) {
    console.log(res)
  })
}
