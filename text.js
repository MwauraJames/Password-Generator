function pass(){
  let alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v'
    ,'w','x','y','z',1,2,3,4,5,6,7,8,9,0,'@', '#', '$', '%', '^', '&', '*','[',']'];
    let password=[];

    let x=Math.floor(Math.random() * alpha.length);
    let q=Math.floor(Math.random() * alpha.length);
    let n=Math.floor(Math.random() * alpha.length);
    let e=Math.floor(Math.random() * alpha.length);
    let r=Math.floor(Math.random() * alpha.length);
    let y=Math.floor(Math.random() * alpha.length);
    let u=Math.floor(Math.random() * alpha.length);
    let i=Math.floor(Math.random() * alpha.length);

    let t=alpha[x];
    let c=alpha[q];
    let b=alpha[n];
    let h=alpha[e];
    let f=alpha[r];
    let a=alpha[y];
    let j=alpha[u];
    let p=alpha[i];
    
    
password.push(t,c,b,h,f,a,j,p);
let result = password.join('');

document.getElementById("ran").innerHTML=result;
}
