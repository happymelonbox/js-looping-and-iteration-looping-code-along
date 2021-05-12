let messages = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++ ) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i)
    }  
}