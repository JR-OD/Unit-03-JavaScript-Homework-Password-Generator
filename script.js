
function genesis(){

    // user imput 

    var size = prompt (Please choose a pasword length between 8 and 128 characters:);

    var special = ("~,!,@,#,$,%,^,&,*,-,+,?,");
    var numeric = ("0,1,2,3,4,5,6,7,8,9");
    var lowercase = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z");
    var uppercase = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z");

    var character = [special, numeric, lowercase, uppercase]

    var type = prompt (imput any combination of character type 0:special, 1:numeric, 2:lowercase, 3:uppercase, divide by comas);

    console.log(type);

    // how to concatenate "type"?

    // pasword generation

    for(var 1=0; i<= size; i++){
    password + password+ type.charAt(Math.random() * Math.floor(type.length-1));
    }
    
    // display
    document.getElementById("generate").value = password;

}

// clipboard

function.clipboard(){
    document.getElementById("generate");

    document.execCommand("Copy");

    alert(password copied);
}




