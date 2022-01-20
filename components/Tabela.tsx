import Aluno from "../core/Aluno";

interface propsTabela {
    alunos: Aluno[]
}

function Tabela(props: propsTabela) {

    function cabeca() {
        return (
            <tr>
                <th>id</th>
                <th>nome</th>
                <th>idade</th>
            </tr>
        )
    }
    
    function corpo() {
        return (
            props.alunos?.map((aluno, i) => {
                return (
                    <tr>
                        <td>{aluno.id}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.idade}</td>
                    </tr>
                )
            })
        )
    }

    return ( 
        <table>
            <thead>
                {cabeca()}
            </thead>
            <tbody>
                {corpo()}
            </tbody>
        </table>
     );
}

export default Tabela;