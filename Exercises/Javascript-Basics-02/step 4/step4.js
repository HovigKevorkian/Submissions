var resetBTN = document.querySelector('button[type=button]');

resetBTN.addEventListener('click', resetForm);

function resetForm() {
    if (confirm('Are you sure you want to reset?')) {
      var name = (document.querySelector('#name').value = '');
      var surname = (document.querySelector('#surname').value = '');
      var city = (document.querySelector('#city').value = '');
    } else {
      // Do Nothing.
    }
  }