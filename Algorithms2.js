function checkOdd(a,b){
    let newA= a/4;
    let newB= b/4;
    // check if both intergeers are converted to an odd integer
    if (newA%2 != 0 && newB%2!=0){
        console.log("Both numbers are converted to an odd integer at the same time")
    }
    else
    if(newA%2!=0)
        {
            console.log("integer"+ a +"is the first number to be converted to an odd integer")
        }
    
    else if(newB%2!=0){

        console.log("integer"+ b+ "is the first number to be converted to an odd integer")
    }
    else{
        console.log("Neither of the number to be converted to an odd integer")
    }
}
//Test Cases
checkOdd(20,16)// should be "20" is the first number to be converted to an odd integer
checkOdd(36,60)//should be both numbers to be converted to an odd integer
checkOdd(32,48)// should be integer "48" to be converted to an odd 
