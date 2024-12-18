const kiemtra = () => {


    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;

    var sName = document.getElementById("txtName").value;
    var reName = /^[A-Za-z0-9 ]+$/;
    if (!reName.test(sName)) { //(2) reName.test(sName) == false, test chỉ có trong toán tử kiểm tra
        alert("full name field can't left blank !");
        document.getElementById("txtName").focus();
        return false;

    }

    var sAddress = document.getElementById("txtAddress").value;
    var reAddress = /^[A-Za-z0-9]+[,]+[A-Za-z0-9]+([,]+[A-Za-z0-9]+)?$/;
    if (!reAddress.test(sAddress)) {

        alert("please enter your address !");
        document.getElementById("txtAddress").focus();
        return false;
    }

    var sMail = document.getElementById("txtMail").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
    if (!reMail.test(sMail)) {

        alert("email is incorrect!");
        document.getElementById("txtMail").focus();
        return false;
    }


    var sPhone = document.getElementById("txtPhone").value;
    var rePhone = /^\d{8,12}$/;
    if (!rePhone.test(sPhone)) {

        alert("Phone is incorrect !");
        document.getElementById("txtPhone").focus();
        return false;
    }
    const dobDate = new Date(dob);
    const currentDate = new Date();
    if (dobDate >= currentDate) {
        alert("Invalid Date of Birth. Please enter a valid date.");
        return false;
    }

    alert(`Registered Information\n+++++++++++++++++++++++++++++\nName: ${sName}\nGender: ${gender.value}\nDate Of Birth: ${dob}\nAddress: ${sAddress}\nMail: ${sMail}\nPhone: ${sPhone}\nCountry: ${country}`);
    return true;
}

