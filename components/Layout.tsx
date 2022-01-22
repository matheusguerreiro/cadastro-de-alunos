import Titulo from "./Titulo";

interface propsLayout {
    titulo: string
    children: any
}

function Layout(props: propsLayout) {
    return ( 
        <div className="flex flex-col bg-yellow-200 text-gray-900 w-2/3 h-3/4 rounded-md">
            <Titulo>
                {props.titulo}
            </Titulo>
            <div className="px-4 py-4">
                {props.children}
            </div>
        </div>
     );
}

export default Layout;