
window.onscroll = function() {
  stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function validateForm() {
    fieldsValid = false;
    fieldsValidated = 0
        for (i=0; i < document.forms["contactForm"].getElementsByTagName("input").length;i++){
            if(document.forms["contactForm"][i].type === "text" || document.forms["contactForm"][i].type === "date") {
            if (document.forms["contactForm"][i].element.value === "") 
                $('.alert').removeClass('d-none').addClass('show');
                document.forms["contactForm"][i].element.classList.add("required-input");
            } else {
                document.forms["contactForm"][i].element.classList.remove("required-input");
                fieldsValidated += 1;
            }
        }
   
if (isValid === document.forms["contactForm"].getElementsByTagName("input").length) {
        document.forms["contactForm"].submit();
    }
