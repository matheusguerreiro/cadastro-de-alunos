import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Aluno from '../core/Aluno'

export default function Home() {

  const alunos = [
    new Aluno('Antonio', 65, '111'),
    new Aluno('Valdir', 55, '222'),
    new Aluno('Ilson', 42, '333'),
    new Aluno('Cleber', 40, '444')
  ]

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 h-screen justify-center items-center">
        <Layout titulo='Cadastro de Alunos'>
            <Tabela alunos={alunos}></Tabela>
        </Layout>
    </div>
  )
}
