document.addEventListener('DOMContentLoaded',function(){

    var heroButton = document.querySelector(".btn");
    var Searchname = document.querySelector("#search").value;
    httpRequest= new XMLHttpRequest();



    heroButton.addEventListener("click",function(event){
        event.preventDefault();
        console.log("clicked")
        console.log(Searchname)

        
        var url="http://localhost/info2180-lab4/superheroes.php?query="+Searchname;
        httpRequest.onreadystatechange=Recall;
        httpRequest.open('GET',url);
        httpRequest.send();

    })

    function Recall(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                var new_result = document.querySelector('#result')
                new_result.innerHTML = response;
                


            }else{
                alert('There was a problem with the request.')
            }
        }
    }
})


