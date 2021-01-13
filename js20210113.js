let num=prompt("請輸入正確正整數","");
mum=parseInt(num);
let i=1;
if(num<=0){
    alert("錯誤");

}
while(i<num){
    if(num==i*i){
        alert("答案:"+i);
        break;
    }
    i++;
}
if(num==i){
    alert("無整數解");
}