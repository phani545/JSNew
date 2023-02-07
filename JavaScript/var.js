function Var()
{
 document.write("Hello!! Java Script!!");
 var x,y,z;
 var x = 5;
 var y = 10;
 z = x+y; 
 document.write("<br>")
 document.write("=================")
 document.write("<br>")
 
 document.write("SUM = " + z)
 document.write("<br>")
 document.write("=================")
 document.write("<br>")
}

function Arr()
{
  var x = [];
  var y = new Array();
  var house = ['1BHK','2BHK','3BHK','4BHK'];
  x[0]= 10;
  x[1] = 20;
  x[2] = 30;
  y[0] = "First Home";
  y[1] = "Second Home";
  y[2] = "Third Home";
  document.write(house[2] + "<br>" )
  document.write(x[2] + "<br>" )
  document.write(y[2] + "<br>" )
  
}


function Whlo()
{
  document.write('<br>'); 
  document.write("<h1>While Loop</h1><br>");
  var i = 0;
  while(i<10)
  {
   document.write( i + "   Loop <br>");
   i++;
  }
  document.write("<br>");

  var house = new Array('1BHK','2BHK','3BHk','4BHK');
  var k = 0;
  while(k < house.length )
  {
    document.write(k + "  Hosue while Loop <br> ")
    k++;
  }

}

function forloo()
{
  document.write("<h1> FOR LOOP!! <h1>");
  document.write("<br>")
  for(var i =1; i<10;i++)
  {
    document.write(i + "  Loop <br> ");
    
  }
  
  document.write("<br>")
  var house = new Array('1BHK','2BHK','3BHk','4BHK');
  
  for(var j=0;j<house.length;j++)
  {
    document.write(j + " House <br>")
  }

}

