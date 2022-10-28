import React, {useRef, useState} from 'react'
import './GameWindow.scss'


// mui


import { styled } from '@mui/material'
import { Box } from '@mui/material'
import { useEffect } from 'react';


function GameWindow({
    canvasHeight, 
    setCanvasHeight, 
    canvasWidth, 
    setCanvasWidth, 
    canvasScore, 
    setCanvasScore, 
    displayScore, 
    setDisplayScore, 
    highscore, 
    setHighscore,

}) {

    
    
//player variables
    const [playerWidth, setPlayerWidth] = useState();
    const [playerHeight, setPlayerHeight] = useState();
    const [playerX, setPlayerX] = useState();
    const [playerY, setPlayerY] = useState();

//enemy variables
    const [enemy1X, setEnemy1X] = useState();
    const [enemy1Y, setEnemy1Y] = useState();
    const [enemy1Width, setEnemy1Width] = useState();
    const [enemy1Height, setEnemy1Height] = useState();
    const [enemy1XDirection, setEnemy1XDirection] = useState(1);
    const [enemy1YDirection, setEnemy1YDirection] = useState(1);

    const [enemy2X, setEnemy2X] = useState();
    const [enemy2Y, setEnemy2Y] = useState();
    const [enemy2Width, setEnemy2Width] = useState();
    const [enemy2Height, setEnemy2Height] = useState();
    const [enemy2XDirection, setEnemy2XDirection] = useState(1);
    const [enemy2YDirection, setEnemy2YDirection] = useState(-1);

    const [enemy3X, setEnemy3X] = useState();
    const [enemy3Y, setEnemy3Y] = useState();
    const [enemy3Width, setEnemy3Width] = useState();
    const [enemy3Height, setEnemy3Height] = useState();
    const [enemy3XDirection, setEnemy3XDirection] = useState(-1);
    const [enemy3YDirection, setEnemy3YDirection] = useState(1);

    const [enemy4X, setEnemy4X] = useState();
    const [enemy4Y, setEnemy4Y] = useState();
    const [enemy4Width, setEnemy4Width] = useState();
    const [enemy4Height, setEnemy4Height] = useState();
    const [enemy4XDirection, setEnemy4XDirection] = useState(-1);
    const [enemy4YDirection, setEnemy4YDirection] = useState(-1);

//game variables
    const [gameTime1, setGameTime1] = useState(0);
    const [gameTime2, setGameTime2] = useState(0);
    var timer;
    var finalTimer;

    const [tempGame, setTempGame] = useState(false);
    const [tempPlayer, setTempPlayer] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    const [gameStatus, setGameStatus] = useState(false);
    const [gameText, setGameText] = useState('');


    
    const screenFun = () => {
        
        setScreenWidth(window.screen.width);
        playerFun();
        
    }

    

    //set player dimensions
    const playerFun = () => {

        if(screenWidth >= 2100){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.04 );
            setPlayerHeight( canvasHeight*0.04*whratio );

            setEnemy1Width( canvasWidth*0.08 );
            setEnemy1Height( canvasHeight*0.08*whratio );

            setEnemy2Width( canvasWidth*0.0264 );
            setEnemy2Height( canvasHeight*0.08*whratio );

            setEnemy3Width( canvasWidth*0.1 );
            setEnemy3Height( canvasHeight*0.08*whratio );

            setEnemy4Width( canvasWidth*0.12 );
            setEnemy4Height( canvasHeight*0.02*whratio );

            

        };
        if(screenWidth >= 1850 && window.screen.width < 2100){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.03 );            // 1 : 1
            setPlayerHeight( canvasHeight*0.03*whratio );  // 1 : 1
            
            setEnemy1Width( canvasWidth*0.06 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.06*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.02 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.075*whratio );  // 2.5 : 1

            setEnemy3Width( canvasWidth*0.075 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.06*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.09 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.015*whratio );  // 0.5 : 1

        };
        if(screenWidth >= 1536 && window.screen.width < 1850){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.03 );
            setPlayerHeight( canvasHeight*0.03*whratio );

            setEnemy1Width( canvasWidth*0.06 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.06*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.02 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.075*whratio );  // 2.5 : 1

            setEnemy3Width( canvasWidth*0.075 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.06*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.09 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.015*whratio );  // 0.5 : 1

        }
        if(screenWidth >= 1200 && window.screen.width < 1536){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.03 );
            setPlayerHeight( canvasHeight*0.03*whratio );

            setEnemy1Width( canvasWidth*0.06 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.06*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.02 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.075*whratio );  // 2.5 : 1

            setEnemy3Width( canvasWidth*0.075 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.06*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.09 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.015*whratio );  // 0.5 : 1

        }
        if(screenWidth >= 900 && window.screen.width < 1200){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.05 );
            setPlayerHeight( canvasHeight*0.05*whratio );

            setEnemy1Width( canvasWidth*0.1 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.1*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.033 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.15*whratio );   // 2.5 : 1

            setEnemy3Width( canvasWidth*0.15 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.1*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.15 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.025*whratio );  // 0.5 : 1

        }
        if(screenWidth >= 600 && window.screen.width < 900){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.05 );
            setPlayerHeight( canvasHeight*0.05*whratio );

            setEnemy1Width( canvasWidth*0.1 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.1*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.033 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.15*whratio );  // 2.5 : 1

            setEnemy3Width( canvasWidth*0.15 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.1*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.15 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.025*whratio );  // 0.5 : 1

        }

        if(screenWidth <600){

            const whratio = canvasWidth/canvasHeight;
            setPlayerWidth( canvasWidth*0.05 );
            setPlayerHeight( canvasHeight*0.05*whratio );

            setEnemy1Width( canvasWidth*0.1 );             // 2 : 1
            setEnemy1Height( canvasHeight*0.1*whratio ); // 2 : 1

            setEnemy2Width( canvasWidth*0.033 );             // 0.66 : 1
            setEnemy2Height( canvasHeight*0.15*whratio );  // 2.5 : 1

            setEnemy3Width( canvasWidth*0.15 );            // 2.5 : 1
            setEnemy3Height( canvasHeight*0.1*whratio );   // 2 : 1

            setEnemy4Width( canvasWidth*0.15 );             // 3 : 1
            setEnemy4Height( canvasHeight*0.025*whratio );  // 0.5 : 1

        }
    }

    const canvasRef = useRef(null);

    const tempGameRef = useRef(tempGame)
    const tempPlayerRef = useRef(tempPlayer)

    const playerXRef = useRef(playerX)
    const playerYRef = useRef(playerY)

    const enemy1XRef = useRef(enemy1X)
    const enemy1YRef = useRef(enemy1Y)

    const enemy2XRef = useRef(enemy2X)
    const enemy2YRef = useRef(enemy2Y)

    const enemy3XRef = useRef(enemy3X)
    const enemy3YRef = useRef(enemy3Y)

    const enemy4XRef = useRef(enemy4X)
    const enemy4YRef = useRef(enemy4Y)

    

// BEGIN HERE
    const Canvas = props => { 
        
        useEffect(() =>{
            
            //canvas variables
            const canvas = canvasRef.current

            tempGameRef.current = tempGame
            tempPlayerRef.current = tempPlayer
            playerXRef.current = playerX
            playerYRef.current = playerY
            enemy1XRef.current = enemy1X
            enemy1YRef.current = enemy1Y
            enemy2XRef.current = enemy2X
            enemy2YRef.current = enemy2Y
            enemy3XRef.current = enemy3X
            enemy3YRef.current = enemy3Y
            enemy4XRef.current = enemy4X
            enemy4YRef.current = enemy4Y
            

            const context = canvas.getContext('2d')          
            canvas.width = canvas.getBoundingClientRect().width
            canvas.height = canvas.getBoundingClientRect().height
            setCanvasWidth(canvas.width);
            setCanvasHeight(canvas.height);
            
            var player1 = { x: playerX, y: playerY, draggable: gameStatus }
            var enemy1 = { x: enemy1X, y: enemy1Y, width: enemy1Width, height: enemy1Height, xDirection: enemy1XDirection, yDirection: enemy1YDirection}
            var enemy2 = { x: enemy2X, y: enemy2Y, width: enemy2Width, height: enemy2Height, xDirection: enemy2XDirection, yDirection: enemy2YDirection}
            var enemy3 = { x: enemy3X, y: enemy3Y, width: enemy3Width, height: enemy3Height, xDirection: enemy3XDirection, yDirection: enemy3YDirection}
            var enemy4 = { x: enemy4X, y: enemy4Y, width: enemy4Width, height: enemy4Height, xDirection: enemy4XDirection, yDirection: enemy4YDirection}
            


            // draws the player and enemies 
            const drawFun = () => {
                
                

                context.clearRect(0,0, canvasWidth, canvasHeight)

                context.fillStyle = 'rgba(0, 197, 165, 0.65)'
                context.font = "64px VT323";
                context.textAlign = 'center'
                context.fillText(gameText, canvasWidth/2, canvasHeight/4);

                context.beginPath();
                context.fillStyle = '#f40028'
                context.fillRect(player1.x, player1.y, playerWidth, playerHeight)

                context.beginPath();
                context.fillStyle = '#00bd9e'
                context.fillRect(enemy1.x, enemy1.y, enemy1Width, enemy1Height)

                context.beginPath();
                context.fillStyle = '#00bd9e'
                context.fillRect(enemy2.x, enemy2.y, enemy2Width, enemy2Height)

                context.beginPath();
                context.fillStyle = '#00bd9e'
                context.fillRect(enemy3.x, enemy3.y, enemy3Width, enemy3Height)

                context.beginPath();
                context.fillStyle = '#00bd9e'
                context.fillRect(enemy4.x, enemy4.y, enemy4Width, enemy4Height)

                

                requestAnimationFrame(drawFun);
            }
            drawFun();

            //determines position of enemies
            const enemyMoving = () => {

                
                if( tempGameRef.current ){

                    //left
                        // left enemy1
                        if(enemy1.x <= 0){

                            enemy1.xDirection *= 1
                            enemy1.xDirection += 1                          

                        }
                        // left enemy2
                        if(enemy2.x <= 0){

                            enemy2.xDirection *= 1
                            enemy2.xDirection += 1

                        }
                        // left enemy3
                        if(enemy3.x <= 0){

                            enemy3.xDirection *= 1
                            enemy3.xDirection += 1

                        }
                        // left enemy4
                        if(enemy4.x <= 0){

                            enemy4.xDirection *= 1
                            enemy4.xDirection += 1

                        }

                    //right
                        // right enemy1
                        if(enemy1.x+enemy1Width >= canvasWidth){

                            enemy1.xDirection *= -1
                            enemy1.xDirection += -1
                        }
                        // right enemy2
                        if(enemy2.x+enemy2Width >= canvasWidth){

                            enemy2.xDirection *= -1
                            enemy2.xDirection += -1
                        }
                        // right enemy3
                        if(enemy3.x+enemy3Width >= canvasWidth){

                            enemy3.xDirection *= -1
                            enemy3.xDirection += -1
                        }
                        // right enemy4
                        if(enemy4.x+enemy4Width >= canvasWidth){

                            enemy4.xDirection *= -1
                            enemy4.xDirection += -1
                        }

                    //top
                        // top enemy1
                        if(enemy1.y <= 0){

                            enemy1.yDirection *= -1
                            enemy1.yDirection += 1
                        }
                        // top enemy2
                        if(enemy2.y <= 0){

                            enemy2.yDirection *= -1
                            enemy2.yDirection += 1
                        }
                        // top enemy3
                        if(enemy3.y <= 0){

                            enemy3.yDirection *= -1
                            enemy3.yDirection += 1
                        }
                        // top enemy4
                        if(enemy4.y <= 0){

                            enemy4.yDirection *= -1
                            enemy4.yDirection += 1
                        }

                    //bot
                        // bot enemy1
                        if(enemy1.y+enemy1Height >= canvasHeight){

                            enemy1.yDirection *= -1
                            enemy1.yDirection += -1
                        }
                        // bot enemy2
                        if(enemy2.y+enemy2Height >= canvasHeight){

                            enemy2.yDirection *= -1
                            enemy2.yDirection += -1
                        }
                        // bot enemy3
                        if(enemy3.y+enemy3Height >= canvasHeight){

                            enemy3.yDirection *= -1
                            enemy3.yDirection += -1
                        }
                        // bot enemy4
                        if(enemy4.y+enemy4Height >= canvasHeight){

                            enemy4.yDirection *= -1
                            enemy4.yDirection += -1
                        }
                        

                        // SPEED MODULATOR FOR ENEMY 1
                        if((enemy1.xDirection <= 10 && enemy1.xDirection >= 0)){

                            enemy1.x += enemy1.xDirection
                        }
                        else if((enemy1.xDirection >= -10 && enemy1.xDirection <= 0)){

                            enemy1.x += enemy1.xDirection
                        }
                        else if((enemy1.xDirection >= 10)){

                            enemy1.xDirection = 10;
                            enemy1.x += enemy1.xDirection
                        }
                        else if((enemy1.xDirection <= -10 )){

                            enemy1.xDirection = -10;
                            enemy1.x += enemy1.xDirection
                        }

                        

                        if((enemy1.yDirection <= 10 && enemy1.yDirection >= 0)){

                            enemy1.y += enemy1.yDirection
                        }
                        else if((enemy1.yDirection >= -10 && enemy1.yDirection <= 0)){

                            enemy1.y += enemy1.yDirection
                        }
                        else if((enemy1.yDirection >= 10 )){

                            enemy1.yDirection = 10;
                            enemy1.y += enemy1.yDirection
                        }
                        else if((enemy1.yDirection <= -10 )){

                            enemy1.yDirection = -10;
                            enemy1.y += enemy1.yDirection
                        }


                        //SPEED MODUALTOR FOR ENEMY 2
                        if((enemy2.xDirection <= 5 && enemy2.xDirection >= 0)){

                            enemy2.x += enemy2.xDirection
                        }
                        else if((enemy2.xDirection >= -5 && enemy2.xDirection <= 0)){

                            enemy2.x += enemy2.xDirection
                        }
                        else if((enemy2.xDirection >= 5)){

                            enemy2.xDirection =5;
                            enemy2.x += enemy2.xDirection
                        }
                        else if((enemy2.xDirection <= -5 )){

                            enemy2.xDirection = -5;
                            enemy2.x += enemy2.xDirection
                        }

                        

                        if((enemy2.yDirection <= 5 && enemy2.yDirection >= 0)){

                            enemy2.y += enemy2.yDirection
                        }
                        else if((enemy2.yDirection >= -5 && enemy2.yDirection <= 0)){

                            enemy2.y += enemy2.yDirection
                        }
                        else if((enemy2.yDirection >= 5 )){

                            enemy2.yDirection = 5;
                            enemy2.y += enemy2.yDirection
                        }
                        else if((enemy2.yDirection <= -5 )){

                            enemy2.yDirection = -5;
                            enemy2.y += enemy2.yDirection
                        }


                        //SPEED MODUALTOR FOR ENEMY 3
                        if((enemy3.xDirection <= 5 && enemy3.xDirection >= 0)){
                            enemy3.x += enemy3.xDirection
                        }
                        else if((enemy3.xDirection >= -5 && enemy3.xDirection <= 0)){
                            enemy3.x += enemy3.xDirection
                        }
                        else if((enemy3.xDirection >= 5)){
                            enemy3.xDirection = 5;
                            enemy3.x += enemy3.xDirection
                        }
                        else if((enemy3.xDirection <= -5 )){
                            enemy3.xDirection = -5;
                            enemy3.x += enemy3.xDirection
                        }

                        

                        if((enemy3.yDirection <= 5 && enemy3.yDirection >= 0)){
                            enemy3.y += enemy3.yDirection
                        }
                        else if((enemy3.yDirection >= -5 && enemy3.yDirection <= 0)){
                            enemy3.y += enemy3.yDirection
                        }
                        else if((enemy3.yDirection >= 5 )){
                            enemy3.yDirection = 5;
                            enemy3.y += enemy3.yDirection
                        }
                        else if((enemy3.yDirection <= -5 )){
                            enemy3.yDirection = -5;
                            enemy3.y += enemy3.yDirection
                        }



                        //SPEED MODUALTOR FOR ENEMY 4
                        if((enemy4.xDirection <= 5 && enemy4.xDirection >= 0)){
                            enemy4.x += enemy4.xDirection
                        }
                        else if((enemy4.xDirection >= -5 && enemy4.xDirection <= 0)){
                            enemy4.x += enemy4.xDirection
                        }
                        else if((enemy4.xDirection >= 5)){
                            enemy4.xDirection = 5;
                            enemy4.x += enemy4.xDirection
                        }
                        else if((enemy4.xDirection <= -5 )){
                            enemy4.xDirection = -5;
                            enemy4.x += enemy4.xDirection
                        }

                        

                        if((enemy4.yDirection <= 5 && enemy4.yDirection >= 0)){
                            enemy4.y += enemy4.yDirection
                        }
                        else if((enemy4.yDirection >= -5 && enemy4.yDirection <= 0)){
                            enemy4.y += enemy4.yDirection
                        }
                        else if((enemy4.yDirection >= 5 )){
                            enemy4.yDirection = 5;
                            enemy4.y += enemy4.yDirection
                        }
                        else if((enemy4.yDirection <= -5 )){
                            enemy4.yDirection = -5;
                            enemy4.y += enemy4.yDirection
                        }

                        


                        // increment the coordinates
                        enemy2.x += enemy2.xDirection
                        enemy2.y += enemy2.yDirection

                        enemy3.x += enemy3.xDirection
                        enemy3.y += enemy3.yDirection

                        enemy4.x += enemy4.xDirection
                        enemy4.y += enemy4.yDirection

                      
                        //declare each side of the shapes
                        var enemy1Left = enemy1.x    
                        var enemy1Right = enemy1.x + enemy1Width  
                        var enemy1Top = enemy1.y  
                        var enemy1Bot = enemy1.y + enemy1Height

                        var enemy2Left = enemy2.x    
                        var enemy2Right = enemy2.x + enemy1Width  
                        var enemy2Top = enemy2.y  
                        var enemy2Bot = enemy2.y + enemy1Height

                        var enemy3Left = enemy3.x    
                        var enemy3Right = enemy3.x + enemy1Width  
                        var enemy3Top = enemy3.y  
                        var enemy3Bot = enemy3.y + enemy1Height

                        var enemy4Left = enemy4.x    
                        var enemy4Right = enemy4.x + enemy1Width  
                        var enemy4Top = enemy4.y  
                        var enemy4Bot = enemy4.y + enemy1Height


                        var playerLeft = playerXRef.current
                        var playerRight = playerXRef.current + playerWidth
                        var playerTop = playerYRef.current 
                        var playerBot = playerYRef.current + playerHeight


                    // enemy 1 collision
                        if(((playerLeft < enemy1Right && playerLeft > enemy1Left)||(playerRight > enemy1Left && playerRight < enemy1Right)) && ((playerTop < enemy1Bot && playerTop > enemy1Top) || (playerBot > enemy1Top && playerBot < enemy1Bot))){

                            setTempGame(false);
                            setTempPlayer(false);
                            setGameStatus(false);

                            //if time 2 is 0
                            if(gameTime2 === 0){                      

                                timer = Date.now();                        
                                finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds
                                setCanvasScore(finalTimer);

                                if(finalTimer>highscore){                                   
                                    setDisplayScore('New Highscore: '+finalTimer+'!');
                                    setHighscore(finalTimer);
                                }
                                else if(highscore === 0){
                                    setDisplayScore('No Games Played Yet');
                                }
                                else if(finalTimer<highscore){
                                    setDisplayScore('Highscore: '+ highscore);
                                }

                            }
                        }

                    // enemy 2 collision       
                        if(((playerLeft < enemy2Right && playerLeft > enemy2Left)||(playerRight > enemy2Left && playerRight < enemy2Right)) && ((playerTop < enemy2Bot && playerTop > enemy2Top) || (playerBot > enemy2Top && playerBot < enemy2Bot))){

                            setTempGame(false);
                            setTempPlayer(false);
                            setGameStatus(false);

                            //if time 2 is 0
                            if(gameTime2 === 0){                      

                                timer = Date.now();                               
                                finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds
                                setCanvasScore(finalTimer);

                                if(finalTimer>highscore){
                                    setDisplayScore('New Highscore: '+finalTimer+'!');
                                    setHighscore(finalTimer);
                                }
                                else if(highscore === 0){
                                    setDisplayScore('No Games Played Yet');
                                }
                                else if(finalTimer<highscore){
                                    setDisplayScore('Highscore: '+ highscore);
                                }

                            }
                        }

                    // enemy 3 collision
                        if(((playerLeft < enemy3Right && playerLeft > enemy3Left)||(playerRight > enemy3Left && playerRight < enemy3Right)) && ((playerTop < enemy3Bot && playerTop > enemy3Top) || (playerBot > enemy3Top && playerBot < enemy3Bot))){

                            setTempGame(false);
                            setTempPlayer(false);
                            setGameStatus(false);

                            //if time 2 is 0
                            if(gameTime2 === 0){                      

                                timer = Date.now();                                
                                finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds
                                setCanvasScore(finalTimer);

                                if(finalTimer>highscore){
                                    setDisplayScore('New Highscore: '+finalTimer+'!');
                                    setHighscore(finalTimer);
                                }
                                else if(highscore === 0){
                                    setDisplayScore('No Games Played Yet');
                                }
                                else if(finalTimer<highscore){
                                    setDisplayScore('Highscore: '+ highscore);
                                }

                            }
                        }

                    // enemy 4 collision
                        if(((playerLeft < enemy4Right && playerLeft > enemy4Left)||(playerRight > enemy4Left && playerRight < enemy4Right)) && ((playerTop < enemy4Bot && playerTop > enemy4Top) || (playerBot > enemy4Top && playerBot < enemy4Bot))){

                            setTempGame(false);
                            setTempPlayer(false);
                            setGameStatus(false);

                            //if time 2 is 0
                            if(gameTime2 === 0){                      

                                timer = Date.now();                               
                                finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds
                                setCanvasScore(finalTimer);

                                if(finalTimer>highscore){
                                    setDisplayScore('New Highscore: '+finalTimer+'!');
                                    setHighscore(finalTimer);
                                }
                                else if(highscore === 0){
                                    setDisplayScore('No Games Played Yet');
                                }
                                else if(finalTimer<highscore){
                                    setDisplayScore('Highscore: '+ highscore);
                                }

                            }
                        }
                }
                else{
                    return
                }
                requestAnimationFrame(enemyMoving);
                
            }
            enemyMoving();
            



            //if game didn't start yet and you are not controlling the player set coordinates to center
            if(tempGameRef.current === false && tempPlayerRef.current === false){


                if(screenWidth >= 2100){

                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    
                    setEnemy1XDirection(5);
                    setEnemy1YDirection(5);

                    setEnemy2XDirection(2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-2);
                    setEnemy3YDirection(2);

                    setEnemy4XDirection(-3);
                    setEnemy4YDirection(-3);

                    

                    setEnemy1X(enemy1Width);
                    setEnemy1Y(enemy1Width);

                    setEnemy2X(enemy2Width);
                    setEnemy2Y(canvasHeight-enemy2Height*2);

                    setEnemy3X(canvasWidth - enemy3Width*2);
                    setEnemy3Y(enemy3Height);

                    setEnemy4X(canvasWidth - enemy4Width*2);
                    setEnemy4Y(canvasHeight - enemy4Height*2);
        
                    
        
                };
                if(screenWidth >= 1850 && window.screen.width < 2100){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    

                    setEnemy1XDirection(3);
                    setEnemy1YDirection(-2);

                    setEnemy2XDirection(-2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-1.7);
                    setEnemy3YDirection(1.3);

                    setEnemy4XDirection(1.5);
                    setEnemy4YDirection(-1.5);

                    

                    setEnemy1X(1);
                    setEnemy1Y(2*enemy1Height);

                    setEnemy2X(enemy2Width*6);
                    setEnemy2Y(canvasHeight-enemy2Height);

                    setEnemy3X(canvasWidth - enemy3Width*3);
                    setEnemy3Y(1);

                    setEnemy4X(canvasWidth - enemy4Width*3);
                    setEnemy4Y(canvasHeight - enemy4Height);
                };
                if(screenWidth >= 1536 && window.screen.width < 1850){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    

                    setEnemy1XDirection(3);
                    setEnemy1YDirection(-2);

                    setEnemy2XDirection(-2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-1.7);
                    setEnemy3YDirection(1.3);

                    setEnemy4XDirection(1.5);
                    setEnemy4YDirection(-1.5);

                    

                    setEnemy1X(1);
                    setEnemy1Y(2*enemy1Height);

                    setEnemy2X(enemy2Width*6);
                    setEnemy2Y(canvasHeight-enemy2Height);

                    setEnemy3X(canvasWidth - enemy3Width*3);
                    setEnemy3Y(1);

                    setEnemy4X(canvasWidth - enemy4Width*3);
                    setEnemy4Y(canvasHeight - enemy4Height);
        
                }
                if(screenWidth >= 1200 && window.screen.width < 1536){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    

                    setEnemy1XDirection(3);
                    setEnemy1YDirection(-2);

                    setEnemy2XDirection(-2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-1.7);
                    setEnemy3YDirection(1.3);

                    setEnemy4XDirection(1.5);
                    setEnemy4YDirection(-1.5);

                    

                    setEnemy1X(1);
                    setEnemy1Y(2*enemy1Height);

                    setEnemy2X(enemy2Width*6);
                    setEnemy2Y(canvasHeight-enemy2Height);

                    setEnemy3X(canvasWidth - enemy3Width*3);
                    setEnemy3Y(1);

                    setEnemy4X(canvasWidth - enemy4Width*3);
                    setEnemy4Y(canvasHeight - enemy4Height);
        
                }
                if(screenWidth >= 900 && window.screen.width < 1200){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    

                    setEnemy1XDirection(3);
                    setEnemy1YDirection(-2);

                    setEnemy2XDirection(-2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-1.7);
                    setEnemy3YDirection(1.3);

                    setEnemy4XDirection(1.5);
                    setEnemy4YDirection(-1.5);

                    

                    setEnemy1X(1);
                    setEnemy1Y(2*enemy1Height);

                    setEnemy2X(enemy2Width*6);
                    setEnemy2Y(canvasHeight-enemy2Height);

                    setEnemy3X(canvasWidth - enemy3Width*3);
                    setEnemy3Y(1);

                    setEnemy4X(canvasWidth - enemy4Width*3);
                    setEnemy4Y(canvasHeight - enemy4Height);
        
                }
                if(screenWidth >= 600 && window.screen.width < 900){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    

                    setEnemy1XDirection(3);
                    setEnemy1YDirection(-2);

                    setEnemy2XDirection(-2);
                    setEnemy2YDirection(-2);

                    setEnemy3XDirection(-1.7);
                    setEnemy3YDirection(1.3);

                    setEnemy4XDirection(1.5);
                    setEnemy4YDirection(-1.5);

                    

                    setEnemy1X(1);
                    setEnemy1Y(2*enemy1Height);

                    setEnemy2X(enemy2Width*6);
                    setEnemy2Y(canvasHeight-enemy2Height);

                    setEnemy3X(canvasWidth - enemy3Width*3);
                    setEnemy3Y(1);

                    setEnemy4X(canvasWidth - enemy4Width*3);
                    setEnemy4Y(canvasHeight - enemy4Height);
        
                }
                if(screenWidth < 600){
        
                    setGameTime1(0);
                    setGameTime2(0);

                    setGameText('SURVIVE')

                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);
                    
                    setEnemy1XDirection(2);
                    setEnemy1YDirection(2);

                    setEnemy2XDirection(1);
                    setEnemy2YDirection(-1);

                    setEnemy3XDirection(-1);
                    setEnemy3YDirection(1);

                    setEnemy4XDirection(-1);
                    setEnemy4YDirection(-1);

                    

                    setEnemy1X(enemy1Width);
                    setEnemy1Y(enemy1Width);

                    setEnemy2X(enemy2Width);
                    setEnemy2Y(canvasHeight-enemy2Height*2);

                    setEnemy3X(canvasWidth - enemy3Width*2);
                    setEnemy3Y(enemy3Height);

                    setEnemy4X(canvasWidth - enemy4Width*2);
                    setEnemy4Y(canvasHeight - enemy4Height*2);
        
                }
           

            }

            

            
            //canvas resize
            canvas.addEventListener('resize', () => {
                screenFun();
            })



            if(screenWidth > 600){
                    //mouse click event
                    canvas.addEventListener('mousedown', e => {

                        e.preventDefault();

                        var rect = e.target.getBoundingClientRect();
                        var x = e.clientX - rect.left  //x position within the element.
                        var y = e.clientY - rect.top   //y position within the element.

                        //if clicked inside box
                        if( (x > player1.x) && (x < player1.x+playerWidth) && (y > player1.y) && (y < player1.y+playerHeight)){
                            if(tempGame === false && tempPlayer === false){
                                
                                setGameText('')

                                //if time 1 is 0 then replace the 0 with new time
                                if(gameTime1 === 0){
                                    var timer = Date.now();                     
                                    setGameTime1(timer); 
        
                                }
        
                                setTempGame(true);
                                setTempPlayer(true);
                                setGameStatus(true);                       

                                setEnemy1X(enemy1.x)
                                setEnemy1Y(enemy1.y)
                                setEnemy1XDirection(enemy1.xDirection)
                                setEnemy1YDirection(enemy1.yDirection)

                                setEnemy2X(enemy2.x)
                                setEnemy2Y(enemy2.y)
                                setEnemy2XDirection(enemy2.xDirection)
                                setEnemy2YDirection(enemy2.yDirection)

                                setEnemy3X(enemy3.x)
                                setEnemy3Y(enemy3.y)
                                setEnemy3XDirection(enemy3.xDirection)
                                setEnemy3YDirection(enemy3.yDirection)

                                setEnemy4X(enemy4.x)
                                setEnemy4Y(enemy4.y)
                                setEnemy4XDirection(enemy4.xDirection)
                                setEnemy4YDirection(enemy4.yDirection)
                                
                                
                            }
                            else if(tempGame === true && tempPlayer === false){
                                setGameStatus(true);
                                setTempPlayer(true);
                                player1.draggable=true;

                                
                                setEnemy1X(enemy1.x)
                                setEnemy1Y(enemy1.y)
                                setEnemy1XDirection(enemy1.xDirection)
                                setEnemy1YDirection(enemy1.yDirection)

                                setEnemy2X(enemy2.x)
                                setEnemy2Y(enemy2.y)
                                setEnemy2XDirection(enemy2.xDirection)
                                setEnemy2YDirection(enemy2.yDirection)

                                setEnemy3X(enemy3.x)
                                setEnemy3Y(enemy3.y)
                                setEnemy3XDirection(enemy3.xDirection)
                                setEnemy3YDirection(enemy3.yDirection)

                                setEnemy4X(enemy4.x)
                                setEnemy4Y(enemy4.y)
                                setEnemy4XDirection(enemy4.xDirection)
                                setEnemy4YDirection(enemy4.yDirection)
                            }
                            

                        }

                        
                    });
            }


            if(screenWidth > 600){
                    //if mouse is released
                    canvas.addEventListener('mouseup', (e) => {
                        e.preventDefault();
                        if(tempGame){

                            if(gameStatus){

                                setPlayerX(player1.x);
                                setPlayerY(player1.y);
                                

                                setEnemy1X(enemy1.x)
                                setEnemy1Y(enemy1.y)
                                setEnemy1XDirection(enemy1.xDirection)
                                setEnemy1YDirection(enemy1.yDirection)

                                setEnemy2X(enemy2.x)
                                setEnemy2Y(enemy2.y)
                                setEnemy2XDirection(enemy2.xDirection)
                                setEnemy2YDirection(enemy2.yDirection)

                                setEnemy3X(enemy3.x)
                                setEnemy3Y(enemy3.y)
                                setEnemy3XDirection(enemy3.xDirection)
                                setEnemy3YDirection(enemy3.yDirection)

                                setEnemy4X(enemy4.x)
                                setEnemy4Y(enemy4.y)
                                setEnemy4XDirection(enemy4.xDirection)
                                setEnemy4YDirection(enemy4.yDirection)

                                setTempPlayer(false);
                                setGameStatus(false);

                            }
                        }            
                    });
                }

            
                if(screenWidth > 600){
                        //on mouse move
                        canvas.addEventListener('mousemove', e => {

                            e.preventDefault();
                            
                            var rect = e.target.getBoundingClientRect();
                            var x = e.clientX - rect.left  //x position within the element.
                            var y = e.clientY - rect.top   //y position within the element.

                            //if cursor is outside the box
                            if( (x <= 10 || x >= canvasWidth-10 || y <= 10 || y >= canvasHeight-10)&&tempGame&&tempPlayer ){
                                setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                                setPlayerY(canvasHeight*(0.5) - playerHeight/2);

                                setTempPlayer(false);
                                setGameStatus(false);
                                setTempGame(false);
                            }

                            //if game is running
                            if( gameStatus && tempPlayer){               
                                
                                player1.x = (x - playerWidth/2);
                                player1.y = (y - playerHeight/2);
                                playerXRef.current = player1.x;
                                playerYRef.current = player1.y;
                                

                                var playerLeft = x-playerWidth/2; // left side
                                var playerRight = x+playerWidth/2; // right side
                                var playerTop = y-playerHeight/2; // top side
                                var playerBot = y+playerHeight/2; // bottom side
                                
                                

                                var enemy1Left2 = enemy1.x - enemy1.xDirection // right side
                                var enemy1Right2 = enemy1.x + enemy1Width - enemy1.xDirection // right side
                                var enemy1Top2 = enemy1.y - enemy1.xDirection
                                var enemy1Bot2 = enemy1.y + enemy1Height - enemy1.xDirection

                                // if player collides with enemy1
                                if(( playerLeft < enemy1Right2 && playerLeft > enemy1Left2) || (playerRight > enemy1Left2 && playerRight < enemy1Right2)){

                                    if( (playerTop < enemy1Bot2 && playerTop > enemy1Top2) || (playerBot > enemy1Top2 && playerBot < enemy1Bot2)){
                                                    
                                        setTempPlayer(false);
                                        setGameStatus(false);
                                        setTempGame(false);

                            
                                        //if time 2 is 0
                                        if(gameTime2 === 0){                      

                                            timer = Date.now();
                                            
                                            finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds


                                            setCanvasScore(finalTimer);

                                            if(finalTimer>highscore){
                                                setDisplayScore('New Highscore: '+finalTimer+'!');
                                                setHighscore(finalTimer);
                                            }
                                            else if(highscore === 0){
                                                setDisplayScore('No Games Played Yet');
                                            }
                                            else if(finalTimer<highscore){
                                                setDisplayScore('Highscore: '+ highscore);
                                            }

                                        }
                                    }
                                }
                    

                                //if the box edges touch the borders and game is on
                                if( (( playerRight <= playerWidth || playerRight >= canvasWidth || playerBot <= playerHeight || playerBot >= canvasHeight)) && tempGame && tempPlayer ){


                                    setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                                    setPlayerY(canvasHeight*(0.5) - playerHeight/2);

                                    setGameStatus(false);
                                    setTempPlayer(false);
                                    setTempGame(false);


                                    //if time 2 is 0
                                    if(gameTime2 === 0){                      

                                        timer = Date.now();
                                        
                                        finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds

                                        setCanvasScore(finalTimer);

                                        if(finalTimer>highscore){
                                            setDisplayScore('New Highscore: '+finalTimer+'!');
                                            setHighscore(finalTimer);
                                        }
                                        else if(highscore === 0){
                                            setDisplayScore('No Games Played Yet');
                                        }
                                        else if(finalTimer<highscore){
                                            setDisplayScore('Highscore: '+ highscore);
                                        }

                                    }                   
                                    
                                }

                            }

                        });
                }

//TOUCH
        if(screenWidth < 600){
            canvas.addEventListener('touchstart', e => {

                    e.preventDefault();

                    var rect = e.target.getBoundingClientRect();
                    var x = e.touches[0].clientX - rect.left
                    var y = e.touches[0].clientY - rect.top



                    //if clicked inside box
                    if( (x > player1.x) && (x < player1.x+playerWidth) && (y > player1.y) && (y < player1.y+playerHeight)){

                        if(tempGame === false && tempPlayer === false){
                            
                            setGameText('')

                            //if time 1 is 0 then replace the 0 with new time
                            if(gameTime1 === 0){
                                var timer = Date.now();                     
                                setGameTime1(timer); 
    
                            }
    
                            setTempGame(true);
                            setTempPlayer(true);
                            setGameStatus(true);
                            player1.draggable=true;                       
                            setEnemy1X(enemy1.x)
                            setEnemy1Y(enemy1.y)
                            setEnemy1XDirection(enemy1.xDirection)
                            setEnemy1YDirection(enemy1.yDirection)

                            setEnemy2X(enemy2.x)
                            setEnemy2Y(enemy2.y)
                            setEnemy2XDirection(enemy2.xDirection)
                            setEnemy2YDirection(enemy2.yDirection)

                            setEnemy3X(enemy3.x)
                            setEnemy3Y(enemy3.y)
                            setEnemy3XDirection(enemy3.xDirection)
                            setEnemy3YDirection(enemy3.yDirection)

                            setEnemy4X(enemy4.x)
                            setEnemy4Y(enemy4.y)
                            setEnemy4XDirection(enemy4.xDirection)
                            setEnemy4YDirection(enemy4.yDirection)
                            
                            
                        }
                        else if(tempGame === true && tempPlayer === false){
                            setGameStatus(true);
                            setTempPlayer(true);
                            player1.draggable=true;

                            
                            setEnemy1X(enemy1.x)
                            setEnemy1Y(enemy1.y)
                            setEnemy1XDirection(enemy1.xDirection)
                            setEnemy1YDirection(enemy1.yDirection)

                            setEnemy2X(enemy2.x)
                            setEnemy2Y(enemy2.y)
                            setEnemy2XDirection(enemy2.xDirection)
                            setEnemy2YDirection(enemy2.yDirection)

                            setEnemy3X(enemy3.x)
                            setEnemy3Y(enemy3.y)
                            setEnemy3XDirection(enemy3.xDirection)
                            setEnemy3YDirection(enemy3.yDirection)

                            setEnemy4X(enemy4.x)
                            setEnemy4Y(enemy4.y)
                            setEnemy4XDirection(enemy4.xDirection)
                            setEnemy4YDirection(enemy4.yDirection)
                        }
                        

                    }


                
            })
        }


        if(screenWidth < 600){
                canvas.addEventListener('touchend', e => {

                    e.preventDefault();
                        if(tempGame){

                            if(gameStatus){

                                setPlayerX(player1.x);
                                setPlayerY(player1.y);
                                

                                setEnemy1X(enemy1.x)
                                setEnemy1Y(enemy1.y)
                                setEnemy1XDirection(enemy1.xDirection)
                                setEnemy1YDirection(enemy1.yDirection)

                                setEnemy2X(enemy2.x)
                                setEnemy2Y(enemy2.y)
                                setEnemy2XDirection(enemy2.xDirection)
                                setEnemy2YDirection(enemy2.yDirection)

                                setEnemy3X(enemy3.x)
                                setEnemy3Y(enemy3.y)
                                setEnemy3XDirection(enemy3.xDirection)
                                setEnemy3YDirection(enemy3.yDirection)

                                setEnemy4X(enemy4.x)
                                setEnemy4Y(enemy4.y)
                                setEnemy4XDirection(enemy4.xDirection)
                                setEnemy4YDirection(enemy4.yDirection)

                                setTempPlayer(false);
                                setGameStatus(false);

                            }
                        }            
                })
        }

        if(screenWidth < 600){
                canvas.addEventListener('touchmove', e => {

                        e.preventDefault();

                        var rect = e.target.getBoundingClientRect();
                        var x = e.touches[0].clientX - rect.left
                        var y = e.touches[0].clientY - rect.top




                        //if cursor is outside the box
                        if( (x <= 10 || x >= canvasWidth-10 || y <= 10 || y >= canvasHeight-10)&&tempGame&&tempPlayer ){
                            setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                            setPlayerY(canvasHeight*(0.5) - playerHeight/2);

                            setTempPlayer(false);
                            setGameStatus(false);
                            setTempGame(false);
                        }

                        //if game is running
                        if( tempGame && tempPlayer){      


                            player1.x = (x - playerWidth/2);
                            player1.y = (y - playerHeight/2);
                            playerXRef.current = player1.x;
                            playerYRef.current = player1.y;
                            

                            var playerLeft = x-playerWidth/2; // left side
                            var playerRight = x+playerWidth/2; // right side
                            var playerTop = y-playerHeight/2; // top side
                            var playerBot = y+playerHeight/2; // bottom side
                            
                            

                            var enemy1Left2 = enemy1.x - enemy1.xDirection // right side
                            var enemy1Right2 = enemy1.x + enemy1Width - enemy1.xDirection // right side
                            var enemy1Top2 = enemy1.y - enemy1.xDirection
                            var enemy1Bot2 = enemy1.y + enemy1Height - enemy1.xDirection

                            // if player collides with enemy1
                            if(( playerLeft < enemy1Right2 && playerLeft > enemy1Left2) || (playerRight > enemy1Left2 && playerRight < enemy1Right2)){

                                if( (playerTop < enemy1Bot2 && playerTop > enemy1Top2) || (playerBot > enemy1Top2 && playerBot < enemy1Bot2)){
                                                
                                    setTempPlayer(false);
                                    setGameStatus(false);
                                    setTempGame(false);

                        
                                    //if time 2 is 0
                                    if(gameTime2 === 0){                      

                                        timer = Date.now();
                                        
                                        finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds


                                        setCanvasScore(finalTimer);

                                        if(finalTimer>highscore){
                                            setDisplayScore('New Highscore: '+finalTimer+'!');
                                            setHighscore(finalTimer);
                                        }
                                        else if(highscore === 0){
                                            setDisplayScore('No Games Played Yet');
                                        }
                                        else if(finalTimer<highscore){
                                            setDisplayScore('Highscore: '+ highscore);
                                        }

                                    }
                                }
                            }
                

                            //if the box edges touch the borders and game is on
                            if( (( playerRight <= playerWidth || playerRight >= canvasWidth || playerBot <= playerHeight || playerBot >= canvasHeight)) && tempGame && tempPlayer ){


                                setPlayerX(canvasWidth*(0.5) - playerWidth/2);
                                setPlayerY(canvasHeight*(0.5) - playerHeight/2);

                                setGameStatus(false);
                                setTempPlayer(false);
                                setTempGame(false);


                                //if time 2 is 0
                                if(gameTime2 === 0){                      

                                    timer = Date.now();
                                    
                                    finalTimer = ((timer-gameTime1).toFixed(3)/1000); //convert timer into seconds

                                    setCanvasScore(finalTimer);

                                    if(finalTimer>highscore){
                                        setDisplayScore('New Highscore: '+finalTimer+'!');
                                        setHighscore(finalTimer);
                                    }
                                    else if(highscore === 0){
                                        setDisplayScore('No Games Played Yet');
                                    }
                                    else if(finalTimer<highscore){
                                        setDisplayScore('Highscore: '+ highscore);
                                    }

                                }                   
                                
                            }

                        }
                })
        }
            
          

        },[])       
        return <canvas ref={canvasRef} {...props}/>
    }



    useEffect(() => {
        playerFun();
    })

    

    const Canvas2 = styled(Canvas) ( () => ({ 
        
        backgroundColor: '#011826', 
        border: '10px solid #00c5a5',
        fontFamily: 'Press Start 2P'
        
      }))


  return (

    <Box className='canvasClass'>
        <Canvas2 className='canvasClass' sx={{ 
            display: 'block',
            position: 'absolute',
            width: {xs: 'calc(100% - 20px)', sm: 'calc(100% - 20px)', md: 'calc(100% - 20px)', lg: 'calc(100% - 20px)', xl: 'calc(100% - 20px)', xxl: 'calc(100% - 20px)', xxxl: 'calc(100% - 20px)' }, 
            height: {xs: 'calc(90% - 20px)', sm: 'calc(90% - 20px)', md: 'calc(90% - 20px)', lg: 'calc(90% - 20px)', xl: 'calc(90% - 20px)', xxl: 'calc(90% - 20px)', xxxl: 'calc(90% - 20px)'},
            
            }}
            
        >
            
        </Canvas2>
        <Box sx={{paddingTop: '100px', paddingLeft: '100px'}}>
            
        </Box>
    </Box>

  )
}

export default GameWindow
