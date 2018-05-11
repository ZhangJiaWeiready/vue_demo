var a={"name":"tom","sex":"男","age":"24"};
var aToStr = JSON.stringify(a);
// alert(aToStr); //结果：{"name":"tom","sex":"男","age":"24"}
var aa = JSON.parse(aToStr)
console.log(aa)
