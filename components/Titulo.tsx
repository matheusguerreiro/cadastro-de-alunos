interface propsTitulo {
    children: any
}

function Titulo(props: propsTitulo) {
    return ( 
        <div>
            <h1 className="text-3xl text-center py-2 px-3">
                {props.children}
            </h1>
            <hr className="border-gray-900 border"/>
        </div>
     );
}

export default Titulo;