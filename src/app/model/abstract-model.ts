export abstract class AbstractModel<ID> {
    #_id: ID;
    #_dataCadastro: Date;
    #_dataAlteracao: Date;
    #_dataExclusao: Date;

    set id(id: ID) {
        this.#_id = id;
    }

    get id(): ID{
        return this.#_id;
    }

}