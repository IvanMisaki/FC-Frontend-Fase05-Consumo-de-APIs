import React from 'react';
import '../../'

export default function NuevoCandidato({PopupCandidatos_hide, PostCandidato}) {

  return (
    <div>
        <div id="PProtect" className="protectpopup" clientidmode="Static" 
            style={{textAlign: 'center',verticalAlign: 'central'}}>
        </div>
        <div className='popupGrid popupPosicion' style={{border: 'solid 1px'}} id="popupCandidatos" clientidmode="Static">
            <div className='container' style={{padding:'10px 20px 10px 20px'}}>
                <div className='row'>
                    <div className='col'>
                        <h5>Nuevo Candidato</h5>
                    </div>
                    <div className='col' style={{textAlign:'right'}}>
                        <button className='btn' onClick={PopupCandidatos_hide}>x</button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className='col'>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">Nombre y Apellidos</label>
                                    </div>
                                    <div>
                                        <input id="newAlumno" 
                                        placeholder='Ej. Juan Pérez Lorca ' 
                                        style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">Pais</label>
                                    </div>
                                    <div style={{width: '100%'}} className="btn-group">
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="newPais" name="select">
                                                <option value="" defaultValue>Elige un pais</option>
                                                <option value="España">España</option>
                                            </select>
                                        </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                                    </div>
                                    <div style={{width: '100%'}} className="btn-group">
                                        <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="newCiudad" name="select">
                                            <option value="" defaultValue>Elige una ciudad</option>
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
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Telefono">N° Teléfono</label>
                                    </div>
                                    <div>
                                        <input id="newTelefono" 
                                            placeholder='Ej. +34 612 34 56 78' 
                                            style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Email">Email</label>
                                    </div>
                                    <div>
                                        <input id="newEmail" 
                                            placeholder='Ej: user@mail.com' 
                                            style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Presencialidad">Presencialidad</label>
                                    </div>
                                    <div style={{width: '100%'}} className="btn-group">
                                        <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="newPresencialidad" name="select">
                                            <option value="" defaultValue>Elige una opción</option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Remoto">Remoto</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Traslado</label>
                                    </div>
                                    <div>
                                        <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="newTraslado" name="select">
                                            <option value="" defaultValue>Elige una opción</option>
                                            <option value="SI">Sí</option>
                                            <option value="NO">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="PerfilLinkedIn">Perfil LinkedIn</label>
                                    </div>
                                    <div>
                                        <input id="newLinkedin" 
                                        placeholder='Enlace a Linkedin' 
                                        style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="row">
                            <div className="col">
                                <div>
                                    <label style={{fontWeight: 'bold'}} htmlFor="FotoPerfil">Foto de perfil</label>
                                </div>
                                <div className='d-flex'>
                                    <button type="button" style={{background: '#a5a8b3', height:'35px', border:'none'}} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                            <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                        </svg> <label htmlFor="">Subir imagen</label></button>
                                        <div style={{width:'auto', paddingLeft:'10px'}}>
                                            <div style={{fontSize:'0.7rem'}}><label>Archivos soportados: <b>.png, .jpg, y .jpeg</b></label></div>
                                            <div style={{fontSize:'0.7rem'}}><label>Tamaño de archivo máximo: <b>2 MB</b></label></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <div>
                                    <label style={{fontWeight: 'bold'}} htmlFor="DocumentoCV">Documento CV</label>
                                </div>
                                <div className='d-flex'>
                                    <button type="button" style={{background: '#a5a8b3', height:'35px', border:'none'}} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                            <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                        </svg> <label htmlFor="">Subir documento PDF</label></button>
                                        <div style={{width:'auto', paddingLeft:'10px'}}>
                                            <div style={{fontSize:'0.7rem'}}><label>Archivos soportados: <b>.pdf</b></label></div>
                                            <div style={{fontSize:'0.7rem'}}><label>Tamaño de archivo máximo: <b>20 MB</b></label></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <div>
                                    <label style={{fontWeight: 'bold'}} htmlFor="Etiquetas">Etiquetas</label>
                                </div>
                                <div style={{width: '100%'}} className="btn-group">
                                    <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                                <input id="newBuscarEtiqueta" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />
                                                
                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            <span className="sr-only">
                                                
                                            </span>
                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col' style={{textAlign:'right'}}>
                        <div style={{display:'flex', float:'right'}}>
                            <div style={{paddingRight:'10px'}}><button className='btn' style={{background:'rgb(196 196 199)', border:'rgb(110 110 112)', color:'white'}} onClick={PostCandidato}>Guardar</button></div>
                            <div style={{paddingRight:'10px'}}><button className='btn' style={{background:'rgb(157 157 161)', border:'rgb(110 110 112)', color:'white'}} onClick={PopupCandidatos_hide}>Cancelar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
