import React from 'react'

export default function FiltrosBusqueda({nombre, 
                                        fn_eliminarFiltros,
                                        busquedaE,
                                        handleChangeE,
                                        etiquetas,
                                        seleccionar,
                                        lblEtiqueta,
                                        etiquetasActuales,
                                        eliminarEtiqueta,
                                        handleChange2}) {
    return (
        <div style={{borderLeft:'solid 1px #e6e6ea',minHeight: '90vh'}}>
                        {/* <FiltrosBusqueda></FiltrosBusqueda> */}
                        <div style={{width:'250px', padding:'20px 15px 15px 15px'}}>
                            {/*HOLIIIII*/}
                            <div className='container'>
                                <div className='row'  style={{fontSize:'1.1rem'}}>
                                    <div className='col'>
                                        <div style={{display:'flex'}}>
                                            <div style={{width:'90%', fontWeight:'bold'}}><span>Filtros de búsqueda</span></div>
                                            <div title='Elimiar Filtros' onClick={() => fn_eliminarFiltros()} style={{color:'#30cda0', cursor:'pointer'}}><i className="bi bi-trash"></i></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <br></br>
                                <div className="row">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Etiquetas">Tecnologías</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                                <input value={busquedaE} onChange={handleChangeE} id="txtBuscarEtiqueta" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />
                                                
                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            <span className="sr-only">
                                                
                                            </span>
                                            </button>
                                        </div>
                                        <ul>
                                            {etiquetas && etiquetas.map((item) => <li style={{cursor:'pointer'}} className='sombrear' key={Math.random()+""} onClick={()=> seleccionar(item)}>{item}</li>)}
                                        </ul>
                                    </div>
                                    <div id="dvEtiquetas">
                                        <div id='dvEtiquetasAdd'
                                            style={{display:'flex',flexFlow:'wrap'}}>
                                            <div style={{paddingLeft:'10px', fontFamily:'cursive', color:'gray', fontSize:'0.8rem'}}>{lblEtiqueta}</div>
                                            {etiquetasActuales && etiquetasActuales.map((etiqueta) => (
                                                <div key={Math.random()+""}
                                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 5px 0px',padding: '0px 5px 0px 5px',
                                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                                >
                                                    <div>
                                                        {etiqueta}
                                                    </div>
                                                    <div style={{cursor:'pointer'}} onClick={() => eliminarEtiqueta(etiqueta)}>
                                                        <i className="bi bi-x"></i>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <br></br>
                                    {/* <br></br>
                                    <br></br> */}
                                    

                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">País</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <select style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} id="ddlPais" name="select">
                                                <option value="" defaultValue>España</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} className="form-control">
                                                <span>Valencia</span>
                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} id="ddlCiudad" name="select" onChange={handleChange2}>
                                                <option value="" defaultValue>Todos</option>
                                                <option value="Valencia">Valencia</option>
                                                <option value="Sevilla">Sevilla</option>
                                                <option value="Madrid">Madrid</option>
                                                <option value="Barcelona">Barcelona</option>
                                                <option value="Oviedo">Oviedo</option>
                                                <option value="Jaen">Jaen</option>
                                                <option value="Gijón">Gijón</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Presencialidad">Presencial / a distancia</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPresencial" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Presencial</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chRemoto" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>En remoto</span></div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Posibilidad de Traslado</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chTrasladoSi" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Sí</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chTrasladoNo" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>No</span></div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Estado">Estado</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="radio" name="estado" id="chTodos" onChange={handleChange2} defaultChecked={"true"} margin="30px" /></div>
                                        <div><span>Todos</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="radio" name="estado" id="chLibre" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Libre</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="radio" name="estado" id="chEnProceso" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>En Proceso</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="radio" name="estado" id="chContratado" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Contratado</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="radio" name="estado" id="chDescartado" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Descartado</span></div>
                                    </div>
                                    {/* <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPendiente" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Pdte. ofertas</span></div>
                                    </div> */}
                                    {/* <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPreseleccionado" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Preseleccionado</span></div>
                                    </div> */}


                                </div>

                            </div>
                        </div>
                    </div>
    )
}
