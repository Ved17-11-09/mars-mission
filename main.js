canvas = document.getElementById('canvas') ;
ctx = canvas.getContext("2d") ;

nasa_mission_mars_2010 = ["nasa1.jpg" , "nasa2.jpg" , "nasa3.jpg" , "nasa4.jpg"] ;

var random_num = Math.floor(Math.random()*4) ;
console.log(random_num) ;

rover_width = 100 ;
rover_height = 100 ;

rover_x = 10 ;
rover_y = 20 ;

background_image = nasa_mission_mars_2010[random_num] ;
console.log("background image is" + background_image) ;
rover_image = "rover.png" ; 

function add() {
    background_imgTag = new Image() ;
    background_imgTag.onload = uploadBackground ;
    background_imgTag.src = background_image ;

    rover_imgTag = new Image() ;
    rover_imgTag.onload = uploadrover ;
    rover_imgTag.src = rover_image ;
}

function uploadBackground() {
    ctx.drawImage( background_imgTag , 0 , 0 , canvas.width , canvas.height ) ;
}

function uploadrover() {
    ctx.drawImage( rover_imgTag , rover_x , rover_y , rover_width , rover_height ) ;
}

window.addEventListener("keydown" , my_keydown) ;

function my_keydown(e) {
    keypressed = e.keyCode ;
    console.log(keypressed) ;
    
    if(keypressed == '38') {
        console.log("Up pressed") ;
        up() ;
    }

    if(keypressed == '37') {
        console.log("left pressed") ;
        left() ;
    }

    if(keypressed == '39') {
        console.log("right pressed") ;
        right() ;
    }

    if(keypressed == '40') {
        console.log("down pressed") ;
        down() ;
    }

}

function up() {
    if(rover_y >=0) {
        rover_y = rover_y-10 ;
        console.log("When up pressed x = " + rover_x + "y = " + rover_y) ;
        uploadBackground() ;
        uploadrover() ;
    }
}

function down() {
    if(rover_y <=500) {
        rover_y = rover_y+10 ;
        console.log("When up pressed x = " + rover_x + "y = " + rover_y) ;
        uploadBackground() ;
        uploadrover() ;
    }
}

function left() {
    if(rover_x >=0) {
        rover_x = rover_x-10 ;
        console.log("When up pressed x = " + rover_x + "y = " + rover_y) ;
        uploadBackground() ;
        uploadrover() ;
    }
}

function right() {
    if(rover_x <=700) {
        rover_x = rover_x+10 ;
        console.log("When up pressed x = " + rover_x + "y = " + rover_y) ;
        uploadBackground() ;
        uploadrover() ;
    }
}



