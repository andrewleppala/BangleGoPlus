
g.clear();
//g.drawLine(73,88,48,88);
//g.drawLine(103,88,128,88);
//g.drawCircle(88,88,40);
//g.drawCircle(88,88,15);

//g.drawCircle(160,160,15);
//g.drawCircle(140,160,15);
//g.clearRect(140,146,160,174);
//g.drawLine(140,145,160,145);
//g.drawLine(140,175,160,175);

//var button1x = 40;
//var button1y = 160;

var pokeballimg = atob("GBiEAREREREREREREREREREREREREREREREREREREREQAAABERERERERERAAAAAAAREREREREAABEREQAAERERERAAEREREREAARERERABERAAAREQAREREQAREQAAABERABEREQARAAARAAARABEREAAAAAARAAAAAAEREAAAEQAAABEAAAEREAARERAAARERAAEREAARERERERERAAEREAAAEREREREAAAEREAAAAAARAAAAAAEREQARAAARAAARABEREQARERAAARERABERERABEREAEREQARERERAAEREREREAAREREREAABEREQAAERERERERAAAAAAAREREREREREQAAABEREREREREREREREREREREREREREREREREREREQ==");
var gymimg = atob("GBiEAREREAAAARERERERABEQAREREAEREREAABEAEREREQAREQABARABEQAAEQARABEQERARABERABEAEREQEQERAQAAEQAREREBEQEQEAEQAQEREREBEQEQEBERAQERERAREQEQEBERAQEREQAREQABEAEQAQEREQEREREQAQAAEBEREBERERABABERABEREBERERABEQAAERERAREREREAERERERERAREREREQABEREREQEREREREREAABEREAEREREREREREBEREBEREREREREREAERAREREREREREREQERAREREREREREREQEQEREREREREREREQEQEREREREREREREQABERERERERERERERABERERERERERERERAREREREREQ==");
var vibrateimg = atob("GBiEARERERERERERERERERERERERERERERERERERERERAAAAAREREREREAABEAAQAREREREREAEAARERAREREREREBERERERAREREREREBERERERABEBEREREAERERERABEBEREREAERERERABEBEREREAERERERABEAEREAEAEREREREBEAEREAEQEREREREBEAEREAEQEREREREBEAEREQEQEREREREAEQEREQEQAREREREAEQEREQEQAREREREAEREREQAQAREREREAEREREQAQAREREREQERERERERAREREREQERERERERAREREREAERERERERABAAAAAAERERERERAAAAAREREREREREREREREREREREREREREREREREREREQ==");

//g.drawImage(pokeballimg, 50, 50);


function makeButton(button1x, button1y, img){
  var button1xp = button1x+10;
  var button1xm = button1x-10;
  var button1yp = button1y+15;
  var button1ym = button1y-15;

  g.drawCircle(button1xm,button1y,15);
  g.drawCircle(button1xp,button1y,15);
  g.clearRect(button1xm,button1ym,button1xp,button1yp);
  g.drawLine(button1xm,button1ym,button1xp,button1ym);
  g.drawLine(button1xm,button1yp,button1xp,button1yp);
  g.drawImage(img, button1x-10.5, button1y-12);
}

//makeButton(x, y)
//x is center of left circle, all else is relative to that
makeButton(25, 160, pokeballimg);
makeButton(150, 160, vibrateimg);
makeButton(88, 160, gymimg);
