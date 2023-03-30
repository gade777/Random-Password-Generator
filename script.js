// 0123456789zxcvbnmlkjhgfdsaqwertyuiop@#$ZXCVBNMLKJHGFDSAQWERTYUIOP

const Input_Id = document.getElementById('Input_Id');
const Btn = document.getElementById('Btn');

function CreateRandomPassword() {
    const Charaters = "0123456789zxcvbnmlkjhgfdsaqwertyuiop@#$ZXCVBNMLKJHGFDSAQWERTYUIOP";
    //  console.log(Charaters);

    let PasswordLength = 10;

     let password='';


    //  console.log(PasswordCreate);
     
     
     for (let i = 0; i < PasswordLength; i++) {
         let PasswordCreate = Math.floor(Math.random() * Charaters.length);
         password = password + Charaters.substring(PasswordCreate, PasswordCreate +1);
        //  console.log(PasswordCreate);
        
     }
     Input_Id.value = password;
     navigator.clipboard.writeText(password);



}

Btn.addEventListener("click", ()=>{
    CreateRandomPassword()
});












