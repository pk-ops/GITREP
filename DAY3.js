var student={
    name: "John doe",
    class:10,
    Marks:{
        Science:75,
        arts:74
    }
}

var res=Object.keys(student)
for(var i=0;i<res.length;i++){
    console.log(res[i],student[res[i]]);
}