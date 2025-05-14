function goToPage2() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    function downloadPDF() {
        const element = document.getElementById('pdf-content');
    
        const opt = {
            margin: 0,
            filename: 'certificate.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true, // Allow cross-origin resource sharing
                onclone: function(doc) {
                    const images = doc.querySelectorAll('img');
                    images.forEach(img => {
                        img.crossOrigin = 'anonymous';  // Make sure images are handled with CORS
                    });
                }
            },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
        };
    
        html2pdf().set(opt).from(element).save();
    }
    
      function goBack() {
        // Option 1: Navigate to a specific page
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page1').style.display = 'block';
      
        // Option 2: Use browser history (only if you navigated)
        // window.history.back(); 
      }
      
    // let isValid = true;
  
    // // Validation for name
    // if (!name) {
    //   document.getElementById('nameError').style.display = 'block';
    //   isValid = false;
    // } else {
    //   document.getElementById('nameError').style.display = 'none';
    // }
  
    // // Validation for message
    // if (!message) {
    //   document.getElementById('messageError').style.display = 'block';
    //   isValid = false;
    // } else {
    //   document.getElementById('messageError').style.display = 'none';
    // }
  
    // // Stop here if any field is invalid
    // if (!isValid) return;
  
    // Populate certificate values
    document.getElementById('cert-name').innerText = name;
    document.getElementById('cert-message').innerText = message;
  
    // Show Page 2
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
  }
  