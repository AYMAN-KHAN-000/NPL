

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
      email: document.getElementById("email").value,

      message: document.getElementById("message").value,
       phone: document.getElementById("phone").value,
      
    }

    const serviceID = "npl-computer";
const templateID = "template_v0o0s0i";

emailjs.send(serviceID,templateID,params)

.then (
    res => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
         document.getElementById('phone').value = "";

        console.log(res);
        alert("Message sent. wait till review")
    }
)
.catch((err) => console.log(err))

}

