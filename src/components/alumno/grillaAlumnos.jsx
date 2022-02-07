import React from 'react';

export default function GrillaAlumnos({busqueda,
                                       handleChange,
                                       alumnos,
                                       Link,
                                       PopupCandidatos_show,

                                       candidatos,
                                       IrAPagina,
                                       candidatosMeta
  }) {

  return (
    <div className="container-fluid">
    <br/>
    <div className="row">
        <div className="form-group col-sm-12 col-md-6">
            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td>
                            <label 
                                style={{fontWeight:'bold', paddingRight:'20px'}} 
                                htmlFor="exampleInputEmail1">Candidatos</label></td>
                        <td>
                            <input id="txtAlumno" 
                            value={busqueda}
                            //onKeyUp={() => fn_Buscar()}  
                            onChange={handleChange}
                            placeholder='Buscar por Nombre, Email o Palabra clave...' 
                            style={{background:'#e6e6ea'}} type="text" className="form-control" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-sm-12 col-md-6" style={{textAlign:'right'}}>
            <button type="button" className="btn" 
                    style={{border: 'solid 1px #a5a8b3', cursor:'pointer'}}
                    onClick={PopupCandidatos_show}
                    title='Agregar un nuevo candidato'>
                    <i className="bi bi-plus-lg"></i>
                    <label htmlFor="" style={{cursor:'pointer'}}>Añadir alumnos</label>
            </button>
        </div>
    </div>
    
    <br/>
    <div className="panel panel-default">
        <div className="panel-body"
        style={{border:'solid 1px #e6e6ea', borderRadius:'20px', background:'white', overflow:'auto'}}>
        <table className="table">
            <thead>
            <tr>
                <th>NOMBRE</th>
                <th>UBICACIÓN</th>
                {/*<th>PAIS</th>*/}
                <th>TELEFONO</th>
                <th>CORREO ELECTRÓNICO</th>
                <th>ETIQUETAS</th>
                <th style={{display:'none'}}>ETIQUETAS oculto</th>
                <th style={{display:'none'}}>DETALLE</th>
                <th>ESTADO</th>
                <th style={{display:'none'}}>ESTADO oculto</th>
            </tr>
            </thead>
            <tbody id="idBody">
                {candidatos && candidatos.map((candidato)=>(
                    <tr 
                        style={{cursor:'pointer'}}
                        key={candidato.id}
                        className="sombrear">
                        <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+candidato.id}><div>{candidato.nombreCompleto}</div></Link></td>
                        <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+candidato.id}><div>{candidato.ciudad+","+candidato.pais}</div></Link></td>
                        <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+candidato.id}><div>{candidato.telefono}</div></Link></td>
                        <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+candidato.id}><div>{candidato.email}</div></Link></td>
                        <td style={{display:'none'}}>{candidato.etiquetas_buscar}</td>
                        
                        {/* */} 
                        <td><Link style={{textDecoration:'none', width:'100%'}} to={"/ficha/"+candidato.id}>
                            <div style={{display:'flex'}}>{
                                candidato.tecnologias.length===0?
                                ("Sin etiquetas"):
                                (
                                    candidato.tecnologias.map((tecnologia)=>(
                                    <div key={Math.random()+""} style={{width:'minContent',
                                                background:'#32d4a4',
                                                margin:'0px 5px 0px 0px',
                                                color:'white',
                                                padding:'0px 5px 0px 5px',
                                                borderRadius: '5px',
                                                fontSize:'15px'
                                                }}>{tecnologia.nombre}</div>
                                    ))
                                )
                            }</div></Link></td>
                        <td style={{display:'none'}}>{candidato.etiquetas}</td>
                        <td style={{display:'none'}}>{candidato.Estado_buscar}</td>
                        <td>
                            <Link style={{textDecoration:'none', width:'100%'}} to={"/ficha/"+candidato.id}>
                                <div style={{display:'flex'}}>


                                {
                                <div key={Math.random()+""} style={{width:'minContent',
                                            background:(//(candidato.estado)==="PRESELECCIONADO"?'#3684fa':
                                                        (candidato.estado)==="en_proceso"?'#3684fa':
                                                        //(candidato.estado)==="PDTE. OFERTAS"?'#3fcbf8':
                                                        //(candidato.estado)==="CONTRATADO"?'#32d4a4':
                                                        (candidato.estado)==="contratado"?'#32d4a4':
                                                        (candidato.estado)==="descartado"?'tomato':
                                                        (candidato.estado)==="libre"?'orange':
                                                        'rgb(165 165 169)'),
                                            margin:'0px 5px 0px 0px',
                                            color:'white',
                                            padding:'0px 5px 0px 5px',
                                            borderRadius: '10px',
                                            fontSize:'15px'
                                            }}>{candidato.estado}</div>
                            }

                                </div>
                            </Link>
                        </td>
                        

                    </tr>
                ))}
            </tbody>
        </table>
        <div style={{justifyContent:"center", display:"flex"}}>
                            <div style={{paddingTop:"5px", paddingRight:"50px"}}><span>Total : </span><span>{candidatosMeta.total}</span></div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                            {(candidatosMeta.last_page===0)?"Sin Páginas":""}
                            {(candidatosMeta.last_page>=1)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag1" className="page-link fondoPaginacion" onClick={() => IrAPagina(1)}>1</span></div></li>:""}
                            {(candidatosMeta.last_page>=2)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag2" className="page-link" onClick={() => IrAPagina(2)}>2</span></div></li>:""}
                            {(candidatosMeta.last_page>=3)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag3" className="page-link" onClick={() => IrAPagina(3)}>3</span></div></li>:""}
                            {(candidatosMeta.last_page>=4)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag4" className="page-link" onClick={() => IrAPagina(4)}>4</span></div></li>:""}
                            {(candidatosMeta.last_page>=5)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag5" className="page-link" onClick={() => IrAPagina(5)}>5</span></div></li>:""}
                            {(candidatosMeta.last_page>=6)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag6" className="page-link" onClick={() => IrAPagina(6)}>6</span></div></li>:""}
                            {(candidatosMeta.last_page>=7)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag7" className="page-link" onClick={() => IrAPagina(7)}>7</span></div></li>:""}
                            {(candidatosMeta.last_page>=8)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag8" className="page-link" onClick={() => IrAPagina(8)}>8</span></div></li>:""}
                            {(candidatosMeta.last_page>=9)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag9" className="page-link" onClick={() => IrAPagina(9)}>9</span></div></li>:""}
                            {(candidatosMeta.last_page>=10)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag10" className="page-link" onClick={() => IrAPagina(10)}>10</span></div></li>:""}
                            {(candidatosMeta.last_page>=11)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag11" className="page-link" onClick={() => IrAPagina(11)}>11</span></div></li>:""}
                            {(candidatosMeta.last_page>=12)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag12" className="page-link" onClick={() => IrAPagina(12)}>12</span></div></li>:""}
                            {(candidatosMeta.last_page>=13)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag13" className="page-link" onClick={() => IrAPagina(13)}>13</span></div></li>:""}
                            {(candidatosMeta.last_page>=14)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag14" className="page-link" onClick={() => IrAPagina(14)}>14</span></div></li>:""}
                            {(candidatosMeta.last_page>=15)?<li className="page-item"><div style={{cursor:"pointer"}}><span id="pag15" className="page-link" onClick={() => IrAPagina(15)}>15</span></div></li>:""}
                            
                </ul>
            </nav>
        </div>
        </div>
    </div>
</div>
  );
}
