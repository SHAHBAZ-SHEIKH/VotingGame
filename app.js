var count =0
function addFriendHandler(){
    
    let inputtext = document.getElementById("input").value
    let detail = document.getElementById("detail")

    if(inputtext.length >10){
        alert("Please less than 10")
        document.getElementById("input").value =''  
    }
    else{
        console.log("test")
    count++;
    detail.innerHTML += `<div class="detail2">
                                    <h3>0${count}</h3>
                                    <h3 class="inputgap">${inputtext}</h3>
                                    <h3 id='incre' onclick='increamentHandler(event)'>0</h3>
                        </div>`
   document.getElementById("input").value =''  

    }
    
                    
}




function increamentHandler(event){
    let incre = document.getElementById("incre")
    incre = event.target;
    let count = incre.innerHTML
    count++
    incre.innerHTML = count
    

}






