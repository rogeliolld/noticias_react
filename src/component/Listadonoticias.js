import React from 'react'
import Noticias from './Noticias';
import PropTypes from 'prop-types';

const Listadonoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia =>(
                <Noticias
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}

        </div>
    )
}

Listadonoticias.propTypes={
    noticias: PropTypes.array.isRequired
}

export default Listadonoticias
