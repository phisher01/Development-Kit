    class Person{
        constructor(name,age){
            console.log("Person constructor called");
            this.name=name;
            this.age=age;



        }
        talk(){
            console.log(`hi ! my name is ${this.name}`);
        }
    }
    class Student extends Person{
        constructor(name,age ,marks){
            console.log("Student constructor called");
            super(name,age);
            this .marks=marks;
            
        }
    }
    
    class Teachers extends Person{
        constructor(name,age ,subject){
            console.log("Teachers constructor called");
            super(name,age);
            this .subject=subject;

        }
    }
    
    let p1=new Person("adam",12);
    let p2=new Person("eve",120);
