function goToPage2() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true;
  
    // Validation for name
    if (!name) {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('nameError').style.display = 'none';
    }
  
    // Validation for message
    if (!message) {
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('messageError').style.display = 'none';
    }
  
    // Stop here if any field is invalid
    if (!isValid) return;
  
    // Populate certificate values
    document.getElementById('cert-name').innerText = name;
    document.getElementById('cert-message').innerText = message;
  
    // Show Page 2
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
  }
  