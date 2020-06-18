
function p(n) {
    var y = 1;
    for (var i = 1; i <= n; i++) {
      y = y * n;
      y = y % 1e10;
    }
    return y;
  }
  
  ans = 0;
  for (var n = 1; n <= 1000; n++) {
    ans = ans + p(n);
    ans = ans % 1e10;
  }
  
  document.write('ANS: ', ans);