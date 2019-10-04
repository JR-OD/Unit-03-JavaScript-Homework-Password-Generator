// variables: 
var special = ("~,!,@,#,$,%,^,&,*,-,+,?,");
var numeric = ("0,1,2,3,4,5,6,7,8,9");
var lowercase = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z");
var uppercase = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z");
var generate = document.getElementById("generate")
var randomPassword = document.getElementById("password")

// user imput:


generate.addEventListener("click",genesis)

function genesis() {

    var size = prompt ("Please choose a pasword length between 8 and 128 characters:");

    var type =
    confirm("Special characters") ? type += special: '';
    confirm("Numeric characters") ? type += numeric: '';
    confirm("lowercase characters") ? type += lowercase: '';
    confirm("Uppercase characters") ? type += uppercase: '';

    randomPassword.value = password(size, type);
};

console.log(password)

// pasword generation

function password(size,type){
    var psswrd = '';

    for(var i=0; i<size; i++) {
        psswrd += type.charAt(Math.floor(Math.random() * type.length));
    }
    return psswrd;

    console.log(psswrd)
}

// clipboard

// function.clipboard() {
//     document.getElementById("generate");

//     document.execCommand("Copy");

//     alert(password copied); //
