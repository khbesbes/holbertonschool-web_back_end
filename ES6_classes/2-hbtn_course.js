 export default class HolbertonCourse{
    constructor(name, length, students) {
        if(typeof name !== 'String') throw TypeError('name must be a String');
        if(typeof length!=='number') throw TypeError('length must be a Number');
        if (!Array.isArray(students)) throw TypeError('students must be an Array');
        students.forEach((student) => {
          if (typeof student !== 'string') throw TypeError('student must be a String');
        });
            this._name = name;
            this._length = length;
            this._students = students;
    }

    set name(newname) {
        if(typeof newname !== 'string') throw TypeError('name must be a String');
        this._name = newname;
    }
    get name() {
        return this._name;
    }
    set length(newlength){
        if(typeof newlength !== 'number') throw TypeError(' length must be a number');
        this._length = newlength;
    }
    get length() {
        return this._length;
    }
    set students(newstudents) {
        if (!Array.isArray(newstudents)) throw TypeError('students must be an Array');
        newStudents.forEach((student) => {
          if (typeof student !== 'string') throw TypeError('student must be a String');
        });
        this._students = newstudents;
      }
    
      get students() {
        return this._students;
      }
}