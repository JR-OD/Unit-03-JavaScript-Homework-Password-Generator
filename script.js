var generate = document.getElementById("generate")
// var password = document.getElementById("password")

generate.addEventListener("click",genesis)

    function genesis() {

        // variables: 
        var special = ("~,!,@,#,$,%,^,&,*,-,+,?,");
        var numeric = ("0,1,2,3,4,5,6,7,8,9");
        var lowercase = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z");
        var uppercase = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z");
        
        // user imput:

        var size = prompt ("Please choose a pasword length between 8 and 128 characters:").value;
        if(size < 8 || size > 128) 
            alert("Minimum 8 and maximum 128 characters");

        var type = [char1 += char2 += char3 += char4]
        confirm("Special characters")
            if (true) {
                var char1 = special;
            } else {''};

        confirm("Numeric characters")
            if (true){
                var char2 = numeric;
            }else {''};
            
        confirm("lowercase characters") 
            if (true) {
                var char3 = lowercase;
            } else {''};
            
        confirm("Numeric characters") 
            if (true) {
                var char4 = uppercase;
            } else {''};
            
        if (type = '')
            alert("must choose at least one character type");

        for(var i=0; i<size; i++) {
            password = password + type.charArt(Math.floor(Math.random() * Math.floor(type.size - 1)));
        }

        // publishing result

        document.getElementById("generate").value = password; 
    }

// clipboard

function clipboard() {
    document.getElementById("generate").Select();

    document.execCommand("Copy");

    alert("password copied");
}


//     password.value = random(size, type);
// console.log(password)

// // password generation

// function random(size,type){
//     var psswrd = '';

//     for(var i=0; i<size; i++) {
//         psswrd += type.charAt(Math.floor(Math.random() * type.length));
//     }
//     return psswrd;

//     console.log(psswrd)
// }

