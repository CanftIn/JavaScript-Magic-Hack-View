var c = document.querySelector("#c");
c.width = 920;
c.height = 1080;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;

function R(r, g, b, a) {
  a = a === undefined ? 1 : a;
  return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
};
var x = c.getContext("2d");
var time = 0;
var frame = 0;

function u(t) {
  for (c.width |= i = 50; i--;)[0, 4, 8].map(d => x.fillRect(0, 0, i, i, x.fillStyle = R(d * i), x.setTransform(S(s =
    d * 8.9), C(s), S(s += 2.1), C(s), i * i, 99 + i * S(i + t))))
}

function loop() {
  time = frame / 60;
  if (time * 60 | 0 == frame - 1) {
    time += 0.000001;
  }
  frame++;

  try {
    u(time);
  } catch (e) {
    throw e;
  }
}
loop();