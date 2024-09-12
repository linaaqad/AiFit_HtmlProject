// Event listener for hashchange event
window.addEventListener("hashchange", function (event) {
    event.preventDefault(); // Prevent the default behavior of scrolling

    // Clear login form fields
    document.getElementById("logName").value = "";
    document.getElementById("logPassword").value = "";

    // Clear signup form fields
    document.getElementById("signName").value = "";
    document.getElementById("signLName").value = "";
    document.getElementById("signUName").value = "";
    document.getElementById("signEmail").value = "";
    document.getElementById("signNumber").value = "";
    document.getElementById("signPassword").value = "";
	
	
	// Reset error message
    document.getElementById("errorMsg").innerHTML = "";

    // Check if the hash value in the URL is "signup"
    if (location.hash.slice(1) == "signup") {
        document.querySelector(".page").classList.add("extend"); // Add class "extend" to the page element
        document.getElementById("login").classList.remove("active"); // Remove class "active" from login link
        document.getElementById("signup").classList.add("active"); // Add class "active" to signup link
    } else {
        document.querySelector(".page").classList.remove("extend"); // Remove class "extend" from the page element
        document.getElementById("login").classList.add("active"); // Add class "active" to login link
        document.getElementById("signup").classList.remove("active"); // Remove class "active" from signup link
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
});

window.dispatchEvent(new Event("hashchange")); // Trigger the hashchange event on page load

// Function to validate the login form
function validateLoginForm() {
    var name = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;

    if (name == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
        return false;
    } else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
        return false;
    } else {
        alert("Successfully logged in");
        return true;
    }
}

// Function to validate the signup form
function validateSignupForm() {
    var mail = document.getElementById("signEmail").value;
    var firstName = document.getElementById("signName").value;
    var lastName = document.getElementById("signLName").value;
    var username = document.getElementById("signUName").value;
    var phoneNumber = document.getElementById("signNumber").value;
    var password = document.getElementById("signPassword").value;

    if (mail == "" || firstName == "" || lastName == "" || username == "" || phoneNumber == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill all the required fields";
        return false;
    } else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
        return false;
    } else {
        alert("Successfully signed up");
        return true;
    }
}

function showMessage() {
    var message = document.createElement("div");
    message.setAttribute("class", "message");
    message.innerHTML = "Added to Cart";
    document.body.appendChild(message);
    setTimeout(function() {
      message.parentNode.removeChild(message);
    }, 2000);
  }

// JavaScript to handle checkbox change and show the message
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var messages = document.querySelectorAll('.messagelist');

checkboxes.forEach(function(checkbox, index) {
var messagelist = messages[index];

checkbox.addEventListener('change', function() {
	if (this.checked) {
		messagelist.style.display = 'block';
		setTimeout(function() {
		messagelist.style.display = 'none';
		}, 3000); // hide the message after 3 seconds
	} else {
		messagelist.style.display = 'none';
		}
	});
});
				
				
const toggleButton = document.getElementById('toggleButton');
const additionalButtonContainer = document.getElementById('additionalButtonContainer');
const textSquare = document.getElementById('textSquare');

toggleButton.addEventListener('click', function() {
  if (!additionalButtonContainer.hasChildNodes()) {
    // Create the additional button
    const additionalButton = document.createElement('button');
    additionalButton.className = 'centered-button additional-button';
    additionalButton.textContent = 'שלח לתיקון';

    // Add the additional button to the container
    additionalButtonContainer.appendChild(additionalButton);
    
    // Show the text square
    textSquare.style.display = 'block';
  } else {
    // Remove the additional button
    additionalButtonContainer.innerHTML = '';
    
    // Hide the text square
    textSquare.style.display = 'none';
  }
});


function incrementQuantity(productId) {
            var input = document.getElementById(productId);
            var value = parseInt(input.value);
            input.value = value + 1;
        }

function decrementQuantity(productId) {
            var input = document.getElementById(productId);
            var value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
            }
        }