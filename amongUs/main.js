const players ={
    name:"",
    color:["red","blue","green","purple","yellow","pink","orange","black","violet"],
    role:""

}
const crewRoles =["crew","role"]


let roles = ["imp", "crew", "crew", "crew"]

//console.log(roles)

    ranNums = [],
    i = roles.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(roles[j]);
    roles.splice(j,1);
}

console.log(ranNums)


