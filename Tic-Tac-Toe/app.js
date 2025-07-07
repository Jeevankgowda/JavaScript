
let boxes=document.querySelectorAll(".box");
let msg=document.getElementById("msg");
let msgc=document.querySelector(".msgc");
let new1= document.getElementById("new");
let reset=document.getElementById("reset");
let turn="X";


const winning=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const disableBtns=()=>
{
    for(btn of boxes)
    {
        btn.disabled=true;
    }
}
const enableBtns=()=>
{
    for(btn of boxes)
    {
        btn.disabled=false;
        btn.innerText="";
    }
}
reset.addEventListener("click",()=>
{
    turn="X"
    enableBtns();

})
new1.addEventListener("click",()=>
{
    turn="X"
    msgc.classList.add("hide");
    enableBtns();
    msg.innerText="Congratulations!! Winner is   "
})


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==="X"){
       box.innerText="X";
       turn="O";
        }
        else if(turn==="O"){
            box.innerText="O";
            turn="X";
        }
        box.disabled=true;

        checkResult();
    });
});

function checkResult()
{
    for(let pattern of winning)
    {
        let p1=boxes[pattern[0]].innerText
        let p2=boxes[pattern[1]].innerText
        let p3=boxes[pattern[2]].innerText
        
        if(p1 != "" && p2 != "" && p3 != ""){
        if(p1===p2 && p2===p3 && p3===p1)
        {
            msg.innerText+=p1
            console.log(msg);
            msgc.classList.remove("hide");
            disableBtns();
            
        }}
    }
}