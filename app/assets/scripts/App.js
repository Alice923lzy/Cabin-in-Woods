import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
// import Person from './modules/person'

if(module.hot){
    module.hot.accept()
}

let mobileMenu = new MobileMenu();


/* test code

class Adult extends Person{
    payTaxes(fee){
        console.log(this.name + " need to pay "+ fee);
    }
}

var john = new Adult("john","purple");
john.greet();
john.payTaxes(20);

*/