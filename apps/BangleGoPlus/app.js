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

var button1x = 40;
var button1y = 160;

function makeButton(){
  g.drawCircle(button1x-15,button1y,15);
  g.drawCircle(button1x+15,button1y,15);
  g.clearRect(button1x-15,button1y-15,button1x+15,button1y+15);
  g.drawLine(button1x-15,button1y-15,button1x+15,button1y-15);
  g.drawLine(button1x-15,button1y+15,button1x+15,button1y+15);
}

makeButton();
