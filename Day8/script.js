
   
class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getmovie() {
        return `the movie ${this.rating}`
    }
}

let movieinfo = new movie("vivegam", "sunpictures", "4.8/5");
console.log(movieinfo.rating);


class person {
    constructor(firstname, lastname, age, education, city, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.education = education;
        this.city = city;
        this.gender = gender;
  }

   getdetails() {
        return `the person detail is ${this.city}`
    }
}

var persondetails = new person("Guna", "sgs", 25, "B.E", "DPI", "Male");
console.log(persondetails);
console.log(persondetails.age);


class uber {
    constructor(travel1, travel2) {
        this.travel1 = travel1;
        this.travel2 = travel2;
    }
    DPITosalem(priceamount) { 
        return "DPITosalem ₹" + priceamount * 70
    }

    Dpitohosur(priceamount) {
        return "Dpitohosur₹" + priceamount * 100
    }

}

var uberprice = new uber("DPITosalem ₹70", "Dpitohosur  per ₹100");
console.log(uberprice);

console.log(uberprice.DPITosalem(2));
console.log(uberprice.Dpitohosur(2));