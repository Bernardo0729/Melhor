import Vertice from "./Vertice.js";
import Grafo from "./Grafo.js";

let s = new Vertice("s", null);
let t = new Vertice("t", 0);
let a = new Vertice("a", 11060);
let b = new Vertice("b", 11320);
let c = new Vertice("c", 10480);
let d = new Vertice("d", 6820);
let e = new Vertice("e", 4400);
let f = new Vertice("f", 3740);
let g = new Vertice("g", 1756);
let h = new Vertice("h", 410);
let i = new Vertice("i", 200);
let j = new Vertice("j", 7900);
let k = new Vertice("k", 3660);
let l = new Vertice("l", 708);
let m = new Vertice("m", 5760);
let n = new Vertice("n", 3260);
let o = new Vertice("o", 902);

let grafo = new Grafo(s,t);

s.adicionarAresta(a, 200);
a.adicionarAresta(b, 360);
b.adicionarAresta(c, 940);

c.adicionarAresta(j, 4100);
j.adicionarAresta(k, 5400);
k.adicionarAresta(l,3400);
l.adicionarAresta(t, 1200);

c.adicionarAresta(d, 4100);
d.adicionarAresta(e, 2400);
e.adicionarAresta(f, 2000);
f.adicionarAresta(g, 3000);
g.adicionarAresta(h, 1600);
h.adicionarAresta(i, 400);
i.adicionarAresta(t, 200);

d.adicionarAresta(m, 2000);
m.adicionarAresta(n, 5200);
n.adicionarAresta(o, 2800);
o.adicionarAresta(t, 1200);



let caminho = grafo.buscaAestrela();
console.log("Caminho:\n" + caminho.retornaCaminho());
console.log("Custo Total: " + caminho.retornaCustoTotal());