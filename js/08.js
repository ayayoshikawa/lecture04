function zero(){
  return [];
}
function succ(a){
  a.push(true);
  return a;
}
function n(b){
  if (b < 0){
    return null;
  }

  var a = zero();
  var i = 0;

  while(i < b){
    a = succ(a);
    i = i + 1;
  }

  return a;
}
