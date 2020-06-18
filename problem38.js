
function t(x) {
    var a = 0;
    while (x != '') {
      a = a | 1 << Number(x.slice(0, 1));
      x = x.slice(1);
    }
    return a == 0x3fe;
  }
  
  ans = 0;
  for (o = 1; o <= 9999; o++) {
    y = '';
    n = 1;
    while (y.length < 9) {
      y = y + String(o * n++);
      if (y.length == 9 && t(y)) {
        if (Number(y) > ans) ans = Number(y);
      }
    }
  }
  
  document.write('ANS: ', ans);