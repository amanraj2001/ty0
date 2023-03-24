export{}
 class vac{
    id:number;
    name:string;
    department:string;
    numberofvac:number;
    constructor(d:number,a:string,b:string,c:number){
        this.id=d;
        this.name=a;
        this.department=b;
        this.numberofvac=c;

    }


}
var x = new vac(0,"aman","dotnet",7);
var x1 = new vac(1,"rajput","nodejs",40);
var x2 = new vac(2,"aman","fulldtack",2);
var z = [x,x1,x2]
// console.log(x)
export{vac,z}