let table=document.getElementById("table");

for(let i=1;i<=10;i++)
{
    let row=document.createElement("tr");
    let scell=document.createElement("td");
    let ccell=document.createElement("td");
    scell.textContent=i*i;
    ccell.textContent=i*i*i;
    row.appendChild(scell);
    row.appendChild(ccell);
    table.appendChild(row);
}