import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Usuario } from './usuario';
import $ from 'jquery';
import {axios} from 'axios'
import './contenidoFicha.scss'
import { getAPI, putAPI, getTecnologias } from "./httpClient";

export function ContenidoFicha() {
    const [etiquetas, setEtiquetas] = useState([])//estática
    const [listEtiquetas, setListaEtiquetas] = useState([])//dinámica
    const [busqueda, setBusqueda] = useState([])//filtrada
    
    const [busquedaE, setBusquedaE] = useState([])//filtrada


    const [etiquetasActuales, setEtiquetasActuales] = useState([])


    const [candidato, setCandidato] = useState(null)//estática

    // const poticionGet=()=>{
    //     var listEtiquetas = [
    //         'HTML&CSS',
    //         'ANGULAR',
    //         'REACT',
    //         'SYMFONY',
    //         'FLUTTER',
    //         'PHP',
    //         'JAVA',
    //         'C#',
    //         'SPRING',
    //         'JAVASCRIPT'
    //     ];
    //     console.log(listEtiquetas)
    //     //setEtiquetas(listEtiquetas)
    //     setListaEtiquetas(listEtiquetas)
    // }

    const poticionEGet=()=>{

        getTecnologias()
            .then(tecnologias => {
                console.log("Inicio-Tecnologias")
                console.log(tecnologias.data.data)
                // setCandidatosMeta(data.data.meta)
                // setCandidatos(data.data.data)
                setListaEtiquetas(tecnologias.data.data)
                console.log("Fin-Tecnologias")
            });

        // var listEtiquetas = [
        //     'HTML&CSS',
        //     'ANGULAR',
        //     'REACT',
        //     'SYMFONY',
        //     'FLUTTER',
        //     'PHP',
        //     'JAVA',
        //     'C#',
        //     'SPRING',
        //     'JAVASCRIPT'
        // ];
        //console.log(listEtiquetas)
    }

    const seleccionar= (item) =>{
        // console.log("item : "+item)
        // var lstEtiquetasActuales = etiquetasActuales;
        // console.log("etiquetasActuales : "+etiquetasActuales)
        // console.log("lstEtiquetasActuales : "+lstEtiquetasActuales)
        // lstEtiquetasActuales[lstEtiquetasActuales.length] =item;
        // console.log("lstEtiquetasActuales2 : "+lstEtiquetasActuales)
        //setEtiquetasActuales(lstEtiquetasActuales)
        //console.log("lstEtiquetasActuales3 : "+lstEtiquetasActuales)
        // setBusqueda([]);
        // console.log("busqueda : "+busqueda)
        // setEtiquetas([]);

    }

    const handleChangeE=e=>{
        //console.log(e.target.value)
        if(e.target.value.length ===0){
            setEtiquetas([])
        }else{
            filtrarE(e.target.value);
        }

        setBusquedaE(e.target.value);
    }
    const filtrarE=(filtro)=>{
        console.log("Hola 1111")
        console.log(listEtiquetas)
        console.log("Hola 2222")
        var mi_array = []
        var mi_array_cont = 0
        var resultado = listEtiquetas.filter((elemento) => {
            console.log("ele -> "+elemento.nombre)
            if(elemento.nombre.toLowerCase().includes(filtro.toLowerCase())){
                console.log("coincide -> "+elemento.nombre)
                mi_array[mi_array_cont]=elemento.nombre
                mi_array_cont++;
            }else{
                return null;
            }
        });
        setEtiquetas(mi_array);
        //setListaEtiquetas(resultado);
        //console.log(resultado)
    }

    const eliminarEtiqueta = (item) =>{
        var lstEtiquetasActuales = etiquetasActuales;
        var lstEtiquetasActuales2 = [];
        var contador = 0;
        lstEtiquetasActuales.forEach(element => {
            if(element != item){
                lstEtiquetasActuales2[contador]=element
                contador++;
            }
        });
        setEtiquetasActuales(lstEtiquetasActuales2)
        setBusqueda([]);
        setEtiquetas([]);
    }

    const handleChange=e=>{
        console.log(e.target.value)
        if(e.target.value.length ===0){
            setEtiquetas([])
        }else{
            filtrar(e.target.value);
        }

        setBusqueda(e.target.value);
        //console.log("Busqueda : "+e.target.value);
    }

    const filtrar=(filtro)=>{
        console.log(filtro)
        var resultado = listEtiquetas.filter((elemento) =>{
            console.log("ele -> "+elemento)
            if(elemento.toLowerCase().includes(filtro.toLowerCase())){
                return elemento;
            }
        });
        setEtiquetas(resultado);
        //setListaEtiquetas(resultado);
        console.log(resultado)
    }




    const { idAlumno } = useParams();

    useEffect(() => {
        poticionEGet();

        console.log("idAlumno : " + idAlumno)
        //poticionGet();
        var alu = idAlumno;
        // console.log("alu : " + alu)
        //Etiquetas();

        getAPI(alu)
            .then(data => {
                console.log("Inicio")
                console.log(data.data)
                setCandidato(data.data)
                llenarContenido(data.data)
                console.log("Fin")
            });


    }, [idAlumno]);

    function llenarContenido(myCandidato){
        

            $("#lblNombre").text(myCandidato.nombreCompleto)
            $("#lblNombreSpan").text(myCandidato.nombreCompleto)
            $("#txtAlumno").val(myCandidato.nombreCompleto)
            $("#txtTelefono").val(myCandidato.telefono)
            $("#lblCiudad").text(myCandidato.ciudad)
            $("#ddlCiudad").val(myCandidato.ciudad)
            $("#lblPais").text(myCandidato.pais)
            $("#ddlPais").val(myCandidato.pais)
            $("#txtEmail").val(myCandidato.email)

            var traslado = myCandidato.disponibilidadTraslado?"Sí":"No"
            var presecialidad = myCandidato.remoto?"En remoto":"Presencial"
            $("#ddlTraslado").val(traslado?"SI":"NO")
            $("#ddlPresencialidad").val(presecialidad?"Remoto":"Presencial")
            $("#linkLinkedin").val(myCandidato.enlaceLinkedin)
            $("#ddlEstadoLaboral").val(myCandidato.estado)
            if(myCandidato.avatar!=null){
                $("#img_foto").attr("src",myCandidato.avatar.url)
            }else{
                $("#img_foto").attr("src","https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg")
            }
            if(myCandidato.cv!=null){
                $("#mbPdf").attr("src",myCandidato.cv.url)
            }else{
                $("#mbPdf").attr("src","https://storage.googleapis.com/api-fc/cvs/ckz1q0b6z000104090vyi44ay.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20220207%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220207T070625Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=76d11f0b52a5df8b961ae8e713bcb629dfad2cbfce72b2000505338de1eba1a16980a3b70b7bfab0e1a01f14c8e96feb76678f88b51cee8141c50c1a65d38944a44998bc27796750b52cee9102da44adc4100647c27702cfbf5ef6f8c35510d128e80112cf84a2a04d7d737d3dbb70de2fadfc9d517ca45df374d1c78ec26580271eee502cc7cd9820f19530f2f35887fde0d7108462bb547484dee02edf65d51f2f108013bd9f2af613a9e27227fc261ea00002dd4e2a178982e7df8775bf97731e347d043b1ad4327865a8f5d12fc56ce0f2c85db16de1e2b647b86e45732bcb18d4743eb8dc43b777952d64296d740a5c4ee8dd61081f916e962dbdfd6ec8")
            }


            var desTraslado = myCandidato.disponibilidadTraslado?"Con Traslado":"Sin Traslado"
            $("#spn_remoto").text(presecialidad)
            $("#spn_traslado").text(desTraslado)

            console.log("myCandidato.tecnologias : "+myCandidato.tecnologias)
            setEtiquetasActuales(myCandidato.tecnologias)

        return false;
    }

    function change_habilidades(){
        $("#dvHabilidades").show()
        $("#dvCV").hide()
        $("#dvProcesos").hide()

        $("#liHabilidades").removeAttr("class")
        $("#liCV").removeAttr("class")
        $("#liProcesos").removeAttr("class")

        $("#liHabilidades").addClass("activado")
        $("#liCV").addClass("desactivado")
        $("#liProcesos").addClass("desactivado")
    }

    function change_cv(){
        $("#dvHabilidades").hide()
        $("#dvCV").show()
        $("#dvProcesos").hide()

        $("#liHabilidades").removeAttr("class")
        $("#liCV").removeAttr("class")
        $("#liProcesos").removeAttr("class")

        $("#liHabilidades").addClass("desactivado")
        $("#liCV").addClass("activado")
        $("#liProcesos").addClass("desactivado")
    }

    function change_procesos(){
        $("#dvHabilidades").hide()
        $("#dvCV").hide()
        $("#dvProcesos").show()

        $("#liHabilidades").removeAttr("class")
        $("#liCV").removeAttr("class")
        $("#liProcesos").removeAttr("class")

        $("#liHabilidades").addClass("desactivado")
        $("#liCV").addClass("desactivado")
        $("#liProcesos").addClass("activado")
    }

    function fn_actualizar(){
        var candidato = {
            "id": idAlumno,
            "nombreCompleto": $("#txtAlumno").val(),
            "telefono": $("#txtTelefono").val(),
            "email": $("#txtEmail").val(),
            "pais": $("#ddlPais").val(),
            "ciudad": $("#ddlCiudad").val(),
            "disponibilidadTraslado": $("#ddlTraslado").val()==="SI"?true:false,
            "remoto": $("#ddlPresencialidad").val()==="Remoto"?true:false,
            "enlaceLinkedin": $("#linkLinkedin").val(),
            "estado": $("#ddlEstadoLaboral").val()
        }
        putAPI(candidato)
        alert("Update OK")
        getAPI(idAlumno)
            .then(data => {
                console.log("Inicio")
                console.log(data.data)
                setCandidato(data.data)
                llenarContenido(data.data)
                console.log("Fin")
            });
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col d-none'>
                    <Link to={"/alumnos"} style={{textDecoration:'none'}}>
                        <div style={{fontSize:'large', cursor:'pointer', color:'black'}}>
                            <i className="bi bi-arrow-left"></i>
                            <span>volver</span>
                        </div>
                    </Link>

                </div>
                <div className='col'>
                    <Usuario></Usuario>
                </div>
            </div>

            {/**Contenido */}
            <div>
                <div style={{borderTop:'1px solid rgb(230, 230, 234)',
                             borderBottom:'1px solid rgb(230, 230, 234)',
                             paddingTop: '5px',
                             paddingBottom: '5px'}}>
                    <Link to={"/alumnos"} style={{textDecoration:'none'}}>
                        <span style={{color: '#a6a9b4'}}>Candidatos </span>
                    </Link>
                    <i style={{color: '#a6a9b4', fontWeight:'bold'}} className="bi bi-chevron-left"></i>
                    <span> </span>
                    <span id="lblNombreSpan">Nombre</span>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6" >
                            <div style={{borderRight:'solid 1px #e6e6ea',
                            background: 'white', overflow: 'auto',
                            height: 'auto', padding: '20px'}}>
                                <div style={{display: 'flex',
                                             borderBottom: '1px solid #e6e6ea'}}>
                                    <div id="fotoAlumno" style={{width:'70px', height:'70px', borderRadius: '40px',backgroundColor: '#e6e6ea'}}>
                                        <img id="img_foto"
                                                alt="1" width="60px" height="60px"
                                                    style={{margin: '5px', borderRadius: '40px'}} />
                                                   
                                    </div>
                                    <div style={{padding:'10px', width:'100%'}}>
                                        <div>
                                            <label style={{fontSize: 'larger', fontWeight: 'bold'}} id="lblNombre" htmlFor=""></label>
                                        </div>
                                        <div style={{color: '#a6a9b4'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                            <label id="lblCiudad"></label>
                                            <label>, </label>
                                            <label id="lblPais"></label>
                                            <span>     </span>
                                            <i className="bi bi-vinyl"></i>
                                            <label id="lblPresencialidadTraslado"><span id="spn_remoto"></span>, <span id="spn_traslado"></span></label>
                                        </div>
                                    </div>
                                    <div style={{padding:'15px', textAlign:'right'}}>
                                        <button className='btn btn-primary' onClick={fn_actualizar}>Actualizar</button>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Nombre">Nombre y Apellidos</label>
                                    </div>
                                    <div>
                                        <input id="txtAlumno" style={{background:'#f8f8f9',border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Telefono">N° Teléfono</label>
                                    </div>
                                    <div>
                                        <input id="txtTelefono" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Email">Email</label>
                                    </div>
                                    <div>
                                        <input id="txtEmail" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">Pais</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button id="ddlPais" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="ddlPais" name="select">
                                                {/* <option value="" defaultValue>Elige un pais</option> */}
                                                <option value="España">España</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button id="ddlCiudad" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="ddlCiudad" name="select">
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
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Traslado</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button id="ddlTraslado" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="ddlTraslado" name="select">
                                                <option value="" defaultValue>Elige una opción</option>
                                                <option value="SI">Sí</option>
                                                <option value="NO">No</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Presencialidad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button id="ddlPresencialidad" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="ddlPresencialidad" name="select">
                                                <option value="" defaultValue>Elige una opción</option>
                                                <option value="Presencial">Presencial</option>
                                                <option value="Remoto">Remoto</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="EnlaceLinkedin">Enlace a LinkedIn</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}><span id="linkLinkedin"></span></button> */}
                                            <input id="linkLinkedin" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                            <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                                <i className="bi bi-link-45deg"></i>
                                            </button>
                                          </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Estado Laboral</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <button id="ddlEstadoLaboral" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}><span id="spnEstadoLaboral"></span></button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', borderRadius:'5px', height:'35px', width: '100%', textAlign: 'left', border:'none'}} id="ddlEstadoLaboral" name="select">
                                                <option value="" defaultValue>Elige una opción</option>
                                                <option value="libre">libre</option>
                                                <option value="en_proceso">en_proceso</option>
                                                <option value="contratado">contratado</option>
                                                <option value="descartado">descartado</option>
                                            </select>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Documento CV">Documento CV</label>
                                    </div>
                                    <div>
                                        <button type="button" style={{background: '#a5a8b3'}} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                            <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                        </svg> <label htmlFor="">Subir de nuevo</label></button>

                                        <button type="button" className="btn" style={{border: 'solid 1px #a5a8b3'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg> <label htmlFor="">Borrar</label></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <ul className="nav nav-tabs">
                                <li id="liHabilidades" style={{cursor:'pointer'}} onClick={() => change_habilidades()} className="activado"><a>Habilidades</a></li>
                                <li id="liCV" style={{cursor:'pointer'}} onClick={() => change_cv()} className="desactivado"><a>Curriculum Vitae</a></li>
                                <li id="liProcesos" style={{cursor:'pointer'}} onClick={() => change_procesos()} className="desactivado"><a>Procesos</a></li>
                            </ul>
                            <div id="dvHabilidades" style={{display:'block'}}>
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
                                            {etiquetasActuales && etiquetasActuales.map((etiqueta) => (
                                                <div key={Math.random()+""}
                                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 5px 0px',padding: '0px 5px 0px 5px',
                                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                                >
                                                    <div>
                                                        {etiqueta.nombre}
                                                    </div>
                                                    <div style={{cursor:'pointer'}} onClick={() => eliminarEtiqueta(etiqueta)}>
                                                        <i className="bi bi-x"></i>
                                                    </div>
                                                    <div>
                                                        {etiqueta.meta.pivot_nivel}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Idiomas">Idiomas</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                                <input id="txtBuscarIdiomas" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />

                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            <span className="sr-only">

                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="dvEtiquetas">
                                        <div id='dvEtiquetasAdd'
                                            style={{display:'flex',flexFlow:'wrap'}}>
                                                <div key={Math.random()+""}
                                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 5px 0px',padding: '0px 5px 0px 5px',
                                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                                >
                                                    <div>
                                                        {"INGLÉS"}
                                                    </div>
                                                    <div style={{cursor:'pointer'}} onClick={() => alert("pendiente")}>
                                                        <i className="bi bi-x"></i>
                                                    </div>
                                                    <div>
                                                        INTER.
                                                    </div>
                                                </div>
                                                <div key={Math.random()+""}
                                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 5px 0px',padding: '0px 5px 0px 5px',
                                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                                >
                                                    <div>
                                                        {"ESPAÑOL"}
                                                    </div>
                                                    <div style={{cursor:'pointer'}} onClick={() => alert("pendiente")}>
                                                        <i className="bi bi-x"></i>
                                                    </div>
                                                    <div>
                                                        NATIVO
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="dvCV" style={{display:'none'}}>
                                <embed id="mbPdf"
                                type="application/pdf" width="100%" height="550px" style={{borderRadius: '20px'}} />
                            </div>
                            <div id="dvProcesos" style={{display:'none'}}>
                                <button className='btn d-flex' style={{backgroundColor:'transparent',
                                                                              border:'1px solid #eeeef1',
                                                                              margin:'20px'}}>
                                    <div style={{textAlign:'center'}}><i className="bi bi-plus-lg"></i></div>
                                    <div>Añadir Proceso</div>
                                </button>

                                <div className='container-fluid'>
                                    <div className='row filaOferta'>
                                        <div className='col'>
                                            <div className='tituloOferta'>Programador en ReactJS</div>
                                            <div className='nombreEmpresa'>Los Angeles SA</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div>5 candidatos</div>
                                        </div>
                                        <div className='col'>
                                            <div className='nombreEmpresa'>Fecha Plazo</div>
                                            <div className='fechaOferta'>05 nov 2021</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div key={Math.random()+""} className='fondo_azul'>PDTE. ENTREVISA</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row filaOferta'>
                                        <div className='col'>
                                            <div className='tituloOferta'>Programador Java</div>
                                            <div className='nombreEmpresa'>Indra SA</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div>5 candidatos</div>
                                        </div>
                                        <div className='col'>
                                            <div className='nombreEmpresa'>Fecha Plazo</div>
                                            <div className='fechaOferta'>18 nov 2021</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div key={Math.random()+""} className='fondo_celeste'>ENTREVISTADO</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row filaOferta'>
                                        <div className='col'>
                                            <div className='tituloOferta'>Programador en C#</div>
                                            <div className='nombreEmpresa'>Proyecto Olmos</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div>5 candidatos</div>
                                        </div>
                                        <div className='col'>
                                            <div className='nombreEmpresa'>Fecha Plazo</div>
                                            <div className='fechaOferta'>25 nov 2021</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div key={Math.random()+""} className='fondo_celeste'>ESPERANDO CV</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row filaOferta'>
                                        <div className='col'>
                                            <div className='tituloOferta'>Analista Programador .NET</div>
                                            <div className='nombreEmpresa'>Microsoft Corp</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div>5 candidatos</div>
                                        </div>
                                        <div className='col'>
                                            <div className='nombreEmpresa'>Fecha Plazo</div>
                                            <div className='fechaOferta'>05 nov 2021</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div key={Math.random()+""} className='fondo_rojo'>RECHAZADO</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row filaOferta'>
                                        <div className='col'>
                                            <div className='tituloOferta'>Analista Senior</div>
                                            <div className='nombreEmpresa'>Amazon SA</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div>5 candidatos</div>
                                        </div>
                                        <div className='col'>
                                            <div className='nombreEmpresa'>Fecha Plazo</div>
                                            <div className='fechaOferta'>25 dic 2021</div>
                                        </div>
                                        <div className='col colOferta'>
                                            <div key={Math.random()+""} className='fondo_verde'>CONTRATADO</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
