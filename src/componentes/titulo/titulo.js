import './titulo.css';

const titulo = (
    { 
        texto = 'default',
        clase = 'rojo',
    }
) => {


    return (
        <>
            <h1 className={clase}>{ texto }</h1>
        </>
    );
}


export default titulo;