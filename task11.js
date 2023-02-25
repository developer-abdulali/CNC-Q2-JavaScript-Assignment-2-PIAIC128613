var usertime = Number(prompt('Enter time in 24 hours clock format like: 1900'));

if(usertime >= 0000 && usertime < 1200){
    alert("'Good morning!'");
} else if(usertime >= 1200 && usertime < 1700){
    alert("'Good afternon!'");
} else if(usertime >= 1700 && usertime < 2100){
    alert("'Good evening!'");
} else if(usertime >= 2100 && usertime < 2359){
    alert("'Good nigt!'");
}