
function whosPaying(names) {
    
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];   
    var random = Math.random() * names.length;
    random = Math.floor(random);
    var selectedName = names[random];
    console.log(selectedName + " is going to buy lunch today!")
    
    }

whosPaying();