/**
 * multi level condition***********************
 */
const price=2000;
if(price>=5000){
    const discount= price * 10 / 100;
const payment=price-discount;
console.log(payment);
}
else if (price>2500){
    const discount= price * 5/ 100;
const payment=price-discount;
console.log(payment);
}