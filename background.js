
    var video = document.getElementById("video");


    var links=["img/vid1.mp4","img/vid2.mp4","img/vid3.mp4","img/vid4.mp4","img/vid5.mp4"];
    var index=0;
    
    video.addEventListener( 'ended',function (){

        moveindex();
        let path= links[index];
        video.setAttribute('src', path);
        
        
        video.play();
        }   );

    function moveindex(){
        index=index+1; 
        if(index == links.length){
            index=0;    
        };
    }
    // function myHandler() {

    //     moveindex;
    //     let path= links[index];
    //     alert(path);
    //     src.setAttribute('src', path);
    //     video.appendChild(src);

    // }