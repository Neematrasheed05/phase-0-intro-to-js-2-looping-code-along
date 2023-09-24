function writeCards(names, gift){
    let thankYouMessage = [];
    for (let name of names){
        let message = `Thank you, ${name}, for the wonderful ${gift} gift!`;
        thankYouMessage.push(message);
    }
    return thankYouMessage;
}

function countDown(){
    let no = 10;
while (no >= 0){
    console.log(no);
    no--;
} 
}
countDown();