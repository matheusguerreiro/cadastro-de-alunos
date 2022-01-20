class Aluno {
    protected _nome: string
    protected _idade: number
    private _id: string

    constructor(nome: string = '', idade: number = 0, id: string = '') {
        this._nome = nome
        this._idade = idade
        this._id = id
    }

    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get id() {
        return this._id
    }
}

export default Aluno