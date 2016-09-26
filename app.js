function table()
{
  var x=prompt("Enter a number:","");
  var alertBody = '';
  for (var i=1; i<10; i++) {
    alertBody += x + "x" + i +"="+x*i + '\n';
  }
  document.write(alertBody);
}
table();