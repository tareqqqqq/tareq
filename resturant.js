const age=20;
const price=2000;
if (age<=12){
    console.log('you can eat for free');
}
else if(age>=60){
    const discount=price*50/100;
   const payment= price-discount;
   console.log(payment);
}
else if(age>=20){
    const discount=price*25/100;
   const payment= price-discount;
   console.log(payment);
}
else{
    console.log(price);
}