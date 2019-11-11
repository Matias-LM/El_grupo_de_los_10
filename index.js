import * as PIXI from "./pixi.js"
/* Funciones/propiedades interesantes

                let container = new PIXI.Container();
                sprite.tint = 0xffffff;
                sprite.scale = new PIXI.Point(0.5, 0.5)
                sprite.pivot.set(0, 100)
                sprite.alpha = 0.5; (Transaparencia)
                sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY (Buscar "Pixijs blend modes")
                sprite.visible = false

                sprite.interactive = true
                sprite.buttonMode = true

                sprite.mask = sprite1 (Profundidad)
                https://www.youtube.com/watch?v=mCbyr8mGNRE (Graficos)

                    button
                    // Mouse & touch events are normalized into
                    // the pointer* events for handling different
                    // button events.
                        .on('pointerdown', onButtonDown)
                        .on('pointerup', onButtonUp)
                        .on('pointerupoutside', onButtonUp)
                        .on('pointerover', onButtonOver)
                        .on('pointerout', onButtonOut);

            */

           import Button from './Button'

           let _w = window.innerWidth;
           let _h = window.innerHeight;
           var player1, player1Atk, player1Dmg, player2, player2Atk, player2Dmg;
           const frames1 = [];
           const framesAtk1 = [];
           const framesDmg1 = [];
           const frames2 = [];
           const framesAtk2 = [];
           const framesDmg2 = [];
           var golpe = false;
           const canvas = document.getElementById('mycanvas');

           const app = new PIXI.Application({

               view: canvas,
               width: _w,
               height: _h,
               resolution: window.devicePixelRatio,
               autoDensity: true

           });
           document.body.appendChild(app.view);
           button.x = app.screen.width / 4.3;
           button.y = app.screen.height / 3;
           document.body.appendChild(button);



           app.loader
               .add('corti', 'assets/corti1/spritesheet.json')
               .add('cortiAtk', 'assets/cortiAtk1/spritesheet.json')
               .add('cortiDmg', 'assets/cortiDmg1/spritesheet.json')
               .add('diNardo', 'assets/diNardo2/spritesheet.json')
               .add('diNardoAtk', 'assets/diNardoAtk2/spritesheet.json')
               .add('diNardoDmg', 'assets/diNardoDmg2/spritesheet.json')
               .add('button', './assets/button.png')
               .load(onplayer1Load);


           function onplayer1Load() {

               for (let i = 0; i < 6; i++)
                  frames1.push(PIXI.Texture.from(`corti1-${i}.png`)); 

               player1 = new PIXI.AnimatedSprite(frames1);
               player1.x = app.screen.width / 4.3;
               player1.y = app.screen.height / 3;
               player1.anchor.set(0.5);
               player1.animationSpeed = 0.1;
               player1.play();

               app.stage.addChild(player1);

               player1.interactive = true

               for (let i = 0; i < 10; i++)
                   framesAtk1.push(PIXI.Texture.from(`cortiAtk1-${i}.png`));
               for (let i = 0; i < 12; i++)
                   framesDmg1.push(PIXI.Texture.from(`cortiDmg1-${i}.png`));

               for (let i = 0; i < 6; i++)
                  frames2.push(PIXI.Texture.from(`diNardo2-${i}.png`)); 

               player2 = new PIXI.AnimatedSprite(frames2);
               player2.x = app.screen.width / 1.3;
               player2.y = app.screen.height / 3;
               player2.anchor.set(0.5);
               player2.animationSpeed = 0.1;
               player2.play();

               app.stage.addChild(player2);

               player2.interactive = true

               for (let i = 0; i < 17; i++)
                   framesAtk2.push(PIXI.Texture.from(`diNardoAtk2-${i}.png`));
               for (let i = 0; i < 10; i++)
                   framesDmg2.push(PIXI.Texture.from(`diNardoDmg2-${i}.png`));
                   
               console.log(framesAtk2);
               player1.on('pointerdown', () => {

                   player1.stop()
                   player1.textures = framesAtk1;
                   player1.play();
                   setTimeout(function(){ 

                       player1.textures = frames1;
                       player1.play();

                   }, 2000);

               });
               var button1 = new Button({
                   label: 'Play',
                   width: 200,
                   height: 80,
                   onTap: () => console.log('Play')
               })
               var button2 = new Button({
                   label: 'Settings',
                   width: 300,
                   height: 110,
                   onTap: () => console.log('Settings')
               })
               app.stage.addChild(button1, button2)
               onResize()

           }



           let Habilidad1 = new PIXI.Graphics();
           Habilidad1.x = app.renderer.width / 4.3;
           Habilidad1.y = app.renderer.height / 1.5;
           app.stage.addChild(Habilidad1);
           Habilidad1.lineStyle(3, 0xebf9e4);
           Habilidad1.beginFill(0xdfdfdf)
           Habilidad1.drawRect(-100, -50, 200, 100);
           Habilidad1.endFill();

           Habilidad1.interactive = true
           Habilidad1.buttonMode = true

           Habilidad1
               .on('pointerover', onButtonOver)
               .on('pointerout', onButtonOut);
               
           function onButtonOver(){

               graphic.beginFill(0xc3c3c3)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           function onButtonOut(){

               graphic.beginFill(0xdfdfdf)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           let Habilidad2 = new PIXI.Graphics();
           Habilidad2.x = app.renderer.width / 2.43;
           Habilidad2.y = app.renderer.height / 1.5;
           app.stage.addChild(Habilidad2);
           Habilidad2.lineStyle(3, 0xebf9e4);
           Habilidad2.beginFill(0xdfdfdf)
           Habilidad2.drawRect(-100, -50, 200, 100);
           Habilidad2.endFill();

           Habilidad2.interactive = true
           Habilidad2.buttonMode = true

           Habilidad2
               .on('pointerover', onButtonOver)
               .on('pointerout', onButtonOut);
               
           function onButtonOver(){

               graphic.beginFill(0xc3c3c3)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           function onButtonOut(){

               graphic.beginFill(0xdfdfdf)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           let Habilidad3 = new PIXI.Graphics();
           Habilidad3.x = app.renderer.width / 1.7;
           Habilidad3.y = app.renderer.height / 1.5;
           app.stage.addChild(Habilidad3);
           Habilidad3.lineStyle(3, 0xebf9e4);
           Habilidad3.beginFill(0xdfdfdf)
           Habilidad3.drawRect(-100, -50, 200, 100);
           Habilidad3.endFill();

           Habilidad3.interactive = true
           Habilidad3.buttonMode = true

           Habilidad3
               .on('pointerover', onButtonOver)
               .on('pointerout', onButtonOut);
               
           function onButtonOver(){

               graphic.beginFill(0xc3c3c3)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           function onButtonOut(){

               graphic.beginFill(0xdfdfdf)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           let Habilidad4 = new PIXI.Graphics();
           Habilidad4.x = app.renderer.width / 1.3;
           Habilidad4.y = app.renderer.height / 1.5;
           app.stage.addChild(Habilidad4);
           Habilidad4.lineStyle(3, 0xebf9e4);
           Habilidad4.beginFill(0xdfdfdf)
           Habilidad4.drawRect(-100, -50, 200, 100);
           Habilidad4.endFill();

           Habilidad4.interactive = true
           Habilidad4.buttonMode = true

           Habilidad4
               .on('pointerover', onButtonOver)
               .on('pointerout', onButtonOut);
               
           function onButtonOver(){

               graphic.beginFill(0xc3c3c3)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           function onButtonOut(){

               graphic.beginFill(0xdfdfdf)
               graphic.drawRect(-100, -50, 200, 100);
               graphic.endFill();

           }

           graphic.on('pointerdown', () => {

               player1.stop()
               player1.textures = framesAtk1;
               player1.play();
               setTimeout(function(){ 

                   player1.textures = frames1;
                   player1.play();
                   player2.textures = framesDmg2;
                   player2.play();
                   setTimeout(function(){ 

                       player2.textures = frames2;
                       player2.play();
                       setTimeout(function(){ 

                           player2.textures = framesAtk2;
                           player2.play();
                           setTimeout(function(){ 

                               player2.textures = frames2;
                               player2.play();
                               player1.textures = framesDmg1;
                               player1.play();
                               setTimeout(function(){ 

                                   player1.textures = frames1;
                                   player1.play();

                               }, 2000);

                           }, 4000);

                       }, 2000);

                   }, 2000);

               }, 2000);

           });
           window.addEventListener('resize', resize);
           function resize(){

               _w = window.innerWidth;
               _h = window.innerHeight;
               app.renderer.resize(_w, _h);
               
           }

           function onResize() {
               this.renderer.resize(window.innerWidth, window.innerHeight)
               const width = this.renderer.width, height = this.renderer.height

               const btnMargin = 5
               this.button1.x = width * 0.5
               this.button1.y = height * 0.5 - this.button1.height * 0.5 - btnMargin

               this.button2.x = width * 0.5
               this.button2.y = height * 0.5 + this.button2.height * 0.5 + btnMargin
           }
           
           /*const texture = PIXI.Texture.from('sprite.png');
           const texture1 = PIXI.Texture;
           img = new PIXI.Sprite(texture);
           img.x = app.renderer.width / 2;
           img.y = app.renderer.height / 2;
           img.anchor.x = 0.5;
           img.anchor.y = 0.5;
           img.alpha = 0.5;
           app.stage.addChild(img);

           img.interactive = true
           img.buttonMode = true

           img.on('pointertap', () => {

               img.texture = texture1;
               setTimeout(function(){ 

                   img.texture = texture;

               }, 2000);

           });

           app.ticker.add(animate);

           let delta = 0;
           function animate() {

               delta += 0.1;
               img.x = app.renderer.screen.width / 2;
               img.y = (Math.sin(delta) * 100) + app.renderer.screen.height / 2;    
               img.rotation += 0.07;

           }*/

global.PIXI = exports; // eslint-disable-line