class person{
    constructor(name,age,designation){
        this.name=name;
        this.age=age;
        this.designation=designation;

    }
    //instance Methods
    getDetails(){
        let personalData=
        `
        Name: ${this.name}
        Age: ${this.age}
        Designation:${this.designation}
        `;
        
    console.log(personalData);
    }

}
class employee extends person{
    constructor(name,age,salary,address){
        super(name,age);
        this.address=address;
        this.salary=salary;

    }
    getDetails(){
        let employeedata=
        `
        Name:${this.name}
        Age:${this.age}
        Salary:${this.salary}
        Address:${this.address}
        
        `;
        console.log(employeedata);

    }

} 
let obj=new person("Prathamesh","24","ASE",28000,"PUNE");
obj.getDetails();
let obj1=new employee("Nirmal","24",480000,"MUMBAI");
obj1.getDetails();