export class Student {
  //properties of the class
  name = "Sajid";
  roll_no = "16CS14";
  department = "Computer Engineering";
  email = "example@gmail.com";
  //1st method
  studentDetail() {
    console.log(this.name, "is studying in", this.department, "department.");
  }
  //2st method
  studentInfo() {
    console.log("name is", this.name);
    console.log("roll no is", this.roll_no);
    console.log("department is", this.department);
    console.log("email is", this.email);
  }
}
