// Toggle Login/Signup
function toggleForm() {

    const title = document.getElementById("formTitle");
    const btn = document.getElementById("actionBtn");
    const text = document.getElementById("switchText");

    if (title.innerText === "Login") {
        title.innerText = "Signup";
        btn.innerText = "Create Account";
        text.innerHTML = 'Already have account? <span onclick="toggleForm()">Login</span>';
    } else {
        title.innerText = "Login";
        btn.innerText = "Login";
        text.innerHTML = 'Don\'t have account? <span onclick="toggleForm()">Signup</span>';
    }
}


// Login & Signup Logic
function handleAuth() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const mode = document.getElementById("formTitle").innerText;

    if (username.length < 6 || password.length < 6) {
        alert("Username and Password must be at least 6 characters.");
        return;
    }

    if (mode === "Signup") {

        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);

        alert("Account Created Successfully ✅");

    } else {

        const savedUser = localStorage.getItem("user");
        const savedPass = localStorage.getItem("pass");

        if (username === savedUser && password === savedPass) {

            alert("Login Successful ✅");

        } else {
            alert("Invalid Username or Password!");
            return;
        }
    }

    // Fake loading delay
    setTimeout(function() {
        window.location.href = "fuel.html";
    }, 1000);
}


// Select Fuel
function selectFuel(name, price) {

    localStorage.setItem("fuelName", name);
    localStorage.setItem("fuelPrice", price);

    window.location.href = "liters.html";
}


// Show Fuel Name
window.addEventListener("load", function() {

    const fuelTitle = document.getElementById("fuelName");

    if (fuelTitle) {
        const fuel = localStorage.getItem("fuelName");
        fuelTitle.innerText = "Selected Fuel: " + fuel;
    }
});


// Calculate Total
function calculate() {

    const liters = document.getElementById("liters").value;
    const price = localStorage.getItem("fuelPrice");
    const fuel = localStorage.getItem("fuelName");

    if (!liters || liters <= 0) {
        alert("Please enter valid liters.");
        return;
    }

    const total = liters * price;

    localStorage.setItem("totalAmount", total);

    document.getElementById("total").innerText =
        fuel + " Total Amount: ₹" + total;
}


// Go to Payment
function goPayment() {

    if (!localStorage.getItem("totalAmount")) {
        alert("Please calculate total first.");
        return;
    }

    window.location.href = "payment.html";
}


// Payment
function pay(method) {

    alert("Payment Successful ✅\nMethod: " + method +
          "\nAmount: ₹" + localStorage.getItem("totalAmount"));

    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000);
}

