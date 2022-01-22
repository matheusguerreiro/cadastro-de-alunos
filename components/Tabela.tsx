import Aluno from "../core/Aluno";

interface propsTabela {
    alunos: Aluno[]
}

function Tabela(props: propsTabela) {

    function cabeca() {
        return (
            <tr className="bg-black text-yellow-300">
                <th className="px-3 py-2">id</th>
                <th className="px-3 py-2">nome</th>
                <th className="px-3 py-2">idade</th>
            </tr>
        )
    }
    
    function corpo() {
        return (
            props.alunos?.map((aluno, i) => {
                return (
                    <tr key={aluno.id} className={`
                        text-yellow-100
                        ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
                    `}>
                        <td className="px-3 py-2">{aluno.id}</td>
                        <td className="px-3 py-2">{aluno.nome}</td>
                        <td className="px-3 py-2">{aluno.idade}</td>
                    </tr>
                )
            })
        )
    }

    return ( 
        <table className="w-full rounded-sm overflow-hidden">
            <thead className="text-left">
                {cabeca()}
            </thead>
            <tbody>
                {corpo()}
            </tbody>
        </table>
     );
}

export default Tabela;