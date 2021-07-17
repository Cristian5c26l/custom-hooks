import { useEffect, useState, useRef } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);//MultipleCustomHooks
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        //effect
        console.log( 'Componente montado []' );
        return () => {//cuando el componente se desmonte (deja de existir al actualizar el estado en RealExampleRef) cambiamos el valor
            console.log( 'Componente desmontado []' );
            isMounted.current = false;
        }
    }, [])//solo se ejecuta la primera vez que se renderiza

    useEffect(() => {//despues del return se ejecuta esto, dejamos este efecto secundario activo, se ejecuta cada que la url cambia cuando se aprieta el boton Siguiente quote

        setState( {data: null, loading: true, error: null} );
        //quiza aqui no se ocupa el async await porque estamos usando promesas en serie
        fetch( url )
            .then( resp => resp.json() )//resp.json() es data que es un objeto {}
            .then( data => {
            
                //setTimeout(() => {
                    if( isMounted.current ){
                        setState({
                            loading: false,
                            error: null,
                            data//esto es un array que contiene un objeto, objeto es esto {}
                        })//despues de este setState, lo que debemos pensar es que el objeto state se actualiza y vuelve a ejecutarse el return de MultipleCustomHooks, y tambien lo que esta arriba de él, excepto los estados iniciales
                        
                    }else{
                        console.log('setState no se llamo');
                    }
                //},4000);//espera cuatro segundos para ejecutar el if-else (prueba del video 114)

                /* setState({
                    loading: false,
                    error: null,
                    data//esto es un array que contiene un objeto, objeto es esto {}
                })//despues de este setState, lo que debemos pensar es que el objeto state se actualiza y vuelve a ejecutarse el return de MultipleCustomHooks, y tambien lo que esta arriba de él, excepto los estados iniciales
                 */
                
            } )
            .catch( () => {
                setState({
                    data: null, 
                    loading: true, 
                    error: 'No se pudo cargar la info'
                })
            })
    }, [url])//se ejecuta cada vez que la url cambia

    return state;
}
