var number = [1,2,3,4,5,6,7]

var numbers= number.map((itm)=>{
    return itm *5

})
console.log(numbers)

var eachvalue = number.forEach((item)=>{
    console.log(item)
})

var selectnumber = number.filter((num)=>{
    return num >= 5

})
console.log(selectnumber)

var findnum = number.find((find)=>{
    return find >4

})
console.log(findnum)