import Rastreador from "./Rastreador.js";
import FilaAbertos from "./FilaAbertos.js";

export default class Grafo{
    inicio = null;
    fim = null;

    constructor(inicio, fim){
        this.inicio = inicio;
        this.fim = fim;
        
    }

    buscaAestrela(){
        let abertos = new FilaAbertos();
        let atual;
        let fechados = new Map();
        abertos.adicionar(new Rastreador(this.inicio, null,0));
            
        atual = abertos.retiraPrimeiro();
        while(atual != null){
            if(atual.vertice == this.fim){
                return atual;
            }else{
                fechados.set(atual.vertice.valor, atual);
                atual.vertice.adjacentes.forEach(aresta => {
                    let vertice = aresta.destino;
                    if(!fechados.has(vertice.valor)){
                        let rastreadorAntigo = abertos.buscaRastreador(vertice);
                        let rastreadorNovo = new Rastreador(vertice, atual,vertice.heuristica);
                        if(!rastreadorAntigo){
                            abertos.adicionar(rastreadorNovo);
                        }else{
                            if(rastreadorAntigo.retornaCustoTotal() > rastreadorNovo.retornaCustoTotal()){
                                abertos.substituirRastreador(rastreadorAntigo,rastreadorNovo);
                            }
                        }
                    }
                });
            }
            atual = abertos.retiraPrimeiro();

        }
        return null;
    }
}