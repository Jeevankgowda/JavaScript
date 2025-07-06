let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let div=document.querySelector("#div");



let r=document.getElementById("result");


add.addEventListener("click",()=>
{
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Enter numbers");
        return;
    }
    r.value=a+b;
})

sub.addEventListener("click",()=>
{
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Enter numbers");
        return;
    }
    r.value=a-b;
})

mul.addEventListener("click",()=>
{
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Enter numbers");
        return;
    }
    r.value=a*b;
})

div.addEventListener("click",()=>
{
    let a=parseInt(document.querySelector("#a").value);
    let b=parseInt(document.querySelector("#b").value);
    if(isNaN(a) || isNaN(b))
    {
        alert("Enter numbers");
        return;
    }
    r.value=a/b;
})