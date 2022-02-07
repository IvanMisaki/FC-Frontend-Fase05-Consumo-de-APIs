import React, {useEffect, useState } from 'react'
import $ from 'jquery';
import { Link } from "react-router-dom";
import FiltrosBusqueda from './filtrosBusqueda';
import GrillaAlumnos from './grillaAlumnos';
import NuevoCandidato from './nuevoCandidato';
import { getAPI, getTecnologias, postAPI } from "./httpClient";

export function Contenido() {

    const [alumnos, setAlumnos] = useState([])//estática
    const [tablaAlumnos, setTablaAlumnos] = useState([])//dinámica
    const [busqueda, setBusqueda] = useState([])//filtrada
    const [lblEtiqueta, setLblEtiqueta] = useState('Listar todas...')//filtrada
    
    const [candidatos, setCandidatos] = useState([])//estática
    const [candidatosMeta, setCandidatosMeta] = useState([])//estática
    // const [paginaActual, setPaginaActual] = useState(1)//estática
    const [tablaCandidatos, setTablaCandidatos] = useState([])//dinámica
    const [busquedaC, setBusquedaC] = useState([])//filtrada


    const [etiquetas, setEtiquetas] = useState([])//estática
    const [busquedaE, setBusquedaE] = useState([])//filtrada
    const [listEtiquetas, setListaEtiquetas] = useState([])//dinámica
    const [etiquetasActuales, setEtiquetasActuales] = useState([])
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

    const fn_eliminarFiltros = () => {

        //Eliminar todas las etiquetas - Inicio
        var lstEtiquetasActuales = etiquetasActuales;

        var cont = 0;
        lstEtiquetasActuales.forEach(element => {
            lstEtiquetasActuales[cont] = null;
            cont++;
        });
        //Eliminar todas las etiquetas - Fin
        setEtiquetasActuales([])
        
        $("#ddlCiudad").val('')
        //$("#txtAlumno").val('')

        $("#chPresencial")[0].checked = false
        $("#chRemoto")[0].checked = false
        $("#chTrasladoSi")[0].checked = false
        $("#chTrasladoNo")[0].checked = false
        $("#chTodos")[0].checked = true
        $("#chLibre")[0].checked = false
        $("#chEnProceso")[0].checked = false
        $("#chContratado")[0].checked = false
        $("#chDescartado")[0].checked = false
        
        handleChange2();//Misaki
        setLblEtiqueta('Listar todas...')
    }

    const seleccionar= (item) =>{
        var lstEtiquetasActuales = etiquetasActuales;
        lstEtiquetasActuales[lstEtiquetasActuales.length] =item;
        setEtiquetasActuales(lstEtiquetasActuales)
        setBusquedaE([]);
        setEtiquetas([]);
        handleChange2();//Misaki
        //IrAPagina(1)//Misaki 2

        if(lstEtiquetasActuales.length>0){
            setLblEtiqueta('')
        }else{
            setLblEtiqueta('Listar todas...')
        }
    }
    const eliminarEtiqueta= (item) =>{
        var lstEtiquetasActuales = etiquetasActuales;
        var lstEtiquetasActuales2 = [];

        var cont = 0;
        var cont2 = 0;
        lstEtiquetasActuales.forEach(element => {
            if(element === item){
                lstEtiquetasActuales[cont] = null;
            }else{
                lstEtiquetasActuales2[cont2] = element;
                cont2++;
            }
            cont++;
        });
        lstEtiquetasActuales = lstEtiquetasActuales2

        setEtiquetasActuales(lstEtiquetasActuales)
        setBusquedaE([]);
        setEtiquetas([]);

        //IrAPagina(1)//Misaki 2
        handleChange2();//Misaki

        if(lstEtiquetasActuales2.length>0){
            setLblEtiqueta('')
        }else{
            setLblEtiqueta('Listar todas...')
        }
    }
    const handleChangeE=e=>{
        //console.log(e.target.value)
        if(e.target.value.length ===0){
            setEtiquetas([])
        }else{
            filtrarE(e.target.value);
        }

        setBusquedaE(e.target.value);
        ////console.log("Busqueda : "+e.target.value);
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


    useEffect(() => {
            getAPI("?todos=true")
            .then(data => {
                console.log("Inicio")
                console.log(data.data.meta)
                console.log(data.data.data)
                setCandidatosMeta(data.data.meta)
                setCandidatos(data.data.data)
                console.log("Fin")
            });
    }, []);
    
    function PostCandidato(){

        if($("#newAlumno").val()===""){
            alert("Ingrese un nombre válido")
            $("#newAlumno").focus()
            return false
        }
        if($("#newPais").val()===""){
            alert("Ingrese un Pais válido")
            $("#newPais").focus()
            return false
        }
        if($("#newCiudad").val()===""){
            alert("Ingrese una ciudad válida")
            $("#newCiudad").focus()
            return false
        }
        if($("#newTelefono").val()===""){
            alert("Ingrese un teléfono válido")
            $("#newTelefono").focus()
            return false
        }
        if($("#newEmail").val()===""){
            alert("Ingrese un email válido")
            $("#newEmail").focus()
            return false
        }
        if($("#newPresencialidad").val()===""){
            alert("Ingrese Presencialidad válida")
            $("#newPresencialidad").focus()
            return false
        }
        if($("#newTraslado").val()===""){
            alert("Ingrese Traslado válido")
            $("#newTraslado").focus()
            return false
        }
        if($("#newLinkedin").val()===""){
            alert("Ingrese linkedin válido")
            $("#newLinkedin").focus()
            return false
        }

        var candidato = {
            "nombreCompleto": $("#newAlumno").val(),
            "email": $("#newEmail").val(),
            "telefono": $("#newTelefono").val(),
            "perfil": "fullstack",
            "estado": "libre",
            "experienciaGlobal": null,
            "salarioActual": 32000,
            "salarioDeseado": 38000,
            "habilidadesComunicacion": null,
            "feedbackEntrevista": null,
            "observaciones": null,
            "enlaceLinkedin": "https://www.linkedin.com/",
            "ciudad": $("#newCiudad").val(),
            "pais": $("#newPais").val(),
            "disponibilidadTraslado": $("#newTraslado").val()==="SI"?true:false,
            "remoto": $("#newPresencialidad").val()==="Remoto"?true:false,
            "avatar": null,
            "userId": 10,
            "idiomas": {},
            "entrevistas": [],
            "tecnologias": {},
            "ofertas": [],
            "meta": {}
        }

        console.log(candidato)

        postAPI(candidato)
        .then(dataPost => {
            // //console.log("Inicio - Post")
            getAPI("")
            .then(data => {
                // //console.log("Inicio")
                // //console.log(data.data.data)
                setCandidatos(data.data.data)
                // //console.log("Fin")
            });
            // ////console.log("Fin - Post")
        });
        PopupCandidatos_hide()
    }

    function IrAPagina(pag){
        $("#paginaActual").val(pag)
        $("#paginacionPulsada").val(1)//1:true, 0:false

         $('span[id^=pag]').removeClass("fondoPaginacion")
         $("#pag"+pag).addClass("fondoPaginacion")

         handleChange2();//Misaki


        return false;
    }




    // const poticionGet=()=>{
    //     var myJson = {datos: [
    //         {"id":"1","nombre":"Álvaro Sánchez Monteagudo","ciudad":"Valencia","pais":"España","telefono":"+34657852546","email":"smontegudo@gmail.com","etiquetas":["ANGULAR","REACT","+1"],"etiquetas_buscar":"ANGULAR,REACT,HTML&CSS", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
    //         {"id":"2","nombre":"Amparo Herra Climent","ciudad":"Sevilla","pais":"España","telefono":"+34123456789","email":"aherrera@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT", "Estado":"PDTE. OFERTAS", "Estado_buscar":"PDTE. OFERTAS", "presencialidad":"Remoto", "traslado":"trasladono"}, 
    //         {"id":"3","nombre":"Ana Gutierrez Lozano","ciudad":"Madrid","pais":"España","telefono":"+34987541236","email":"agutierrez@gmail.com","etiquetas":["REACT","SYMFONY"],"etiquetas_buscar":"REACT,SYMFONY", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
    //         {"id":"4","nombre":"Antonio Miguel Lacunza","ciudad":"Barcelona","pais":"España","telefono":"+34758426985","email":"amiguel@gmail.com","etiquetas":["ANGULAR","REACT"],"etiquetas_buscar":"ANGULAR,REACT", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
    //         {"id":"5","nombre":"Antonio Delgado Jimeno","ciudad":"Oviedo","pais":"España","telefono":"+34542874517","email":"adelgado@gmail.com","etiquetas":["ANGULAR","HTML&CSS"],"etiquetas_buscar":"ANGULAR,HTML&CSS", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
    //         {"id":"6","nombre":"Belén Jerez Rivera","ciudad":"Jaen","pais":"España","telefono":"+34968574215","email":"bjerez@gmail.com","etiquetas":["HTML&CSS"],"etiquetas_buscar":"HTML&CSS", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
    //         {"id":"7","nombre":"Carla Barroso Soriano","ciudad":"Gijón","pais":"España","telefono":"+34485926157","email":"cbarroso@gmail.com","etiquetas":["REACT"],"etiquetas_buscar":"REACT", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
    //         {"id":"8","nombre":"Carlos Yuste Guerrero","ciudad":"Valencia","pais":"España","telefono":"+34487596854","email":"cyuste@gmail.com","etiquetas":["ANGULAR"],"etiquetas_buscar":"ANGULAR", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladono"}, 
    //         {"id":"9","nombre":"Carmina Pérez Lopez","ciudad":"Sevilla","pais":"España","telefono":"+34154785426","email":"cperez@gmail.com","etiquetas":["FLUTTER"],"etiquetas_buscar":"FLUTTER", "Estado":"PDTE. OFERTAS", "Estado_buscar":"PDTE. OFERTAS", "presencialidad":"Remoto", "traslado":"trasladosi"}, 
    //         {"id":"10","nombre":"Iker Casillas","ciudad":"Madrid","pais":"España","telefono":"+34154859263","email":"ikasillas@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladosi"}]};

    //     ////console.log(myJson)
    //     setAlumnos(myJson.datos)
    //     setTablaAlumnos(myJson.datos)
    // }

    const handleChange=e=>{
        setBusqueda(e.target.value);

        // var ciudad = $("#ddlCiudad").val()
        //var filtroGeneral = $("#txtAlumno").val()
        filtrar();
        //////console.log("Busqueda : "+e.target.value);
    }

    const handleChange2=e=>{
        //setBusqueda(e.target.value);

        //var filtroGeneral = $("#txtAlumno").val()
        filtrar();
        //////console.log("Busqueda : "+e.target.value);
    }

    const filtrar=()=>{
        var filtro = "?todos=true"

        var ciudad = $("#ddlCiudad").val()//OK
        filtro = filtro+"&ciudad="+ciudad

        var chTodos = $("#chTodos")[0].checked
        var chLibre = $("#chLibre")[0].checked
        var chEnProceso = $("#chEnProceso")[0].checked
        var chContratado = $("#chContratado")[0].checked
        var chDescartado = $("#chDescartado")[0].checked
        filtro = chTodos? filtro:
                 chLibre? filtro+"&estado=libre":
                 chEnProceso? filtro+"&estado=en_proceso":
                 chContratado? filtro+"&estado=contratado":
                 chDescartado? filtro+"&estado=descartado":
                 filtro
        
        var chPresencial = $("#chPresencial")[0].checked//OK
        var chRemoto = $("#chRemoto")[0].checked//OK
        filtro = (
                    (chPresencial === false && chRemoto === false)
                    ||
                    (chPresencial === true && chRemoto === true)
                )?
                filtro: (chPresencial === true?filtro+"&remoto=false":filtro+"&remoto=true")

                console.log(filtro)

        var chTrasladoSi = $("#chTrasladoSi")[0].checked
        var chTrasladoNo = $("#chTrasladoNo")[0].checked
        filtro = (
            (chTrasladoSi === false && chTrasladoNo === false)
            ||
            (chTrasladoSi === true && chTrasladoNo === true)
        )?
        filtro: (chTrasladoSi === true?filtro+"&traslado=true":filtro+"&traslado=false")

        console.log(filtro)


        console.log("Etiquetas Actuales - Inicio")
        var etiquetas_codigo = ""
        console.log(etiquetasActuales)
        console.log(listEtiquetas)
        listEtiquetas.forEach(element => {
            etiquetasActuales.forEach(element2 => {
                if(element.nombre === element2){
                    etiquetas_codigo = etiquetas_codigo===""?
                                       element.id+":1":
                                       etiquetas_codigo+","+element.id+":1";
                }
            });
        });
        if(etiquetas_codigo!==""){
            filtro = filtro+"&tecnologias=["+etiquetas_codigo+"]";
        }

        var filtroGeneral = $("#txtAlumno").val()
        if(filtroGeneral.trim()!==""){
            filtro = filtro+"&search="+filtroGeneral;
        }

        
        var paginacionPulsada = $("#paginacionPulsada").val()
        var paginaActual ="1"
        if(paginacionPulsada==="1"){
            paginaActual = $("#paginaActual").val()
        }
        
        console.log("paginaActual = "+paginaActual)

        filtro = filtro+"&page="+paginaActual;
        
        getAPI(filtro)
        .then(data => {
            setCandidatosMeta(data.data.meta)
            setCandidatos(data.data.data)
            console.log("traza 1")

            //el cambio de color en las paginas será al final
            if(paginacionPulsada==="1"){
                $("#paginacionPulsada").val(0)
            }else{
                $('span[id^=pag]').removeClass("fondoPaginacion")
                $("#pag"+1).addClass("fondoPaginacion")
            }
        });

        
        console.log("traza 2")
    }

    // function handleOnClick (userid) {
    //     this.context.router.transitionTo("/");
    //   }

    useEffect(() => {
        //poticionGet();
        poticionEGet();

        $('th').click(function() {
            var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) {
            rows = rows.reverse()
            }
            for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
            }
            setIcon($(this), this.asc);
        })

    },[])
    
      function comparer(index) {
        return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc) {
        $("th").each(function(index) {
        $(this).removeClass("sorting");
        $(this).removeClass("asc");
        $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }


    //POPUP
    function PopupCandidatos_show(){
        $("#PProtect").show();
        $("#popupCandidatos").show();
    }
    function PopupCandidatos_hide(){
        $("#PProtect").hide();
        $("#popupCandidatos").hide();
    }

    return (
        <div style={{borderTop:'solid 1px #e6e6ea'}}>
            <div className="container-fluid">
                <div className='d-flex'>
                    <GrillaAlumnos busqueda={busqueda}
                                   handleChange={handleChange}
                                   alumnos={alumnos}
                                   Link={Link}
                                   PopupCandidatos_show={PopupCandidatos_show}

                                   candidatos={candidatos}
                                   IrAPagina={IrAPagina}
                                   candidatosMeta={candidatosMeta}
                    >
                    </GrillaAlumnos>
                    <FiltrosBusqueda fn_eliminarFiltros={fn_eliminarFiltros} 
                                     busquedaE={busquedaE}
                                     handleChangeE={handleChangeE}
                                     etiquetas={etiquetas}
                                     seleccionar={seleccionar}
                                     lblEtiqueta={lblEtiqueta}
                                     etiquetasActuales={etiquetasActuales}
                                     eliminarEtiqueta={eliminarEtiqueta}
                                     handleChange2={handleChange2}
                    >
                    </FiltrosBusqueda>
                    <NuevoCandidato PopupCandidatos_hide={PopupCandidatos_hide} PostCandidato={PostCandidato}></NuevoCandidato>
                    <input type="hidden" id='paginaActual' value={"1"} text="1"></input>
                    <input type="hidden" id='paginacionPulsada' value={"0"} text="1"></input>
                </div>
                
            </div>
        </div>
    )
}
