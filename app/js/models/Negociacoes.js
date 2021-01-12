class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //programação defenciva
        return [].concat(this._negociacoes);
    }
}
