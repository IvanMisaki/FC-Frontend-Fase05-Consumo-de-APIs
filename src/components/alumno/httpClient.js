const API = "https://api-fc.herokuapp.com/api/candidatos/";
const API_tecnologias = "https://api-fc.herokuapp.com/api/tecnologias/";

export function getAPI(id){
    return fetch(API+id,{
            headers:{
                "Authorization" : "Bearer MTY1NQ.rPlQ0MZpBtGGZMpSl0uf21bs1dRr4yLOy29Rh_dvHYMCCsLBFj-bqv739jfn",
                "Content-Type" : "application/json;charset=utf-8"
            },
        })
            .then(result => result.json())
}

export function postAPI(candidato){
    return fetch(API,{
            method: 'POST',
            headers:{
                "Authorization" : "Bearer MTY1NQ.rPlQ0MZpBtGGZMpSl0uf21bs1dRr4yLOy29Rh_dvHYMCCsLBFj-bqv739jfn",
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                "nombreCompleto": candidato.nombreCompleto,
                "email": candidato.email,
                "telefono": candidato.telefono,
                "perfil": candidato.perfil,
                "estado": candidato.estado,
                "experienciaGlobal": null,
                "salarioActual": candidato.salarioActual,
                "salarioDeseado": candidato.salarioDeseado,
                "habilidadesComunicacion": null,
                "feedbackEntrevista": null,
                "observaciones": null,
                "enlaceLinkedin": candidato.enlaceLinkedin,
                "ciudad": candidato.ciudad,
                "pais": candidato.pais,
                "disponibilidadTraslado": candidato.disponibilidadTraslado,
                "remoto": candidato.remoto,
                "avatar": null,
                "userId": 10,
                "idiomas": {},
                "entrevistas": [],
                "tecnologias": {},
                "ofertas": [],
                "meta": {}
            }),
        })
        .then(result => result.json())
}

export function putAPI(candidato){
    return fetch(API+candidato.id,{
            method: 'PUT',
            headers:{
                "Authorization" : "Bearer MTY1NQ.rPlQ0MZpBtGGZMpSl0uf21bs1dRr4yLOy29Rh_dvHYMCCsLBFj-bqv739jfn",
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                "id": candidato.idAlumno,
                "nombreCompleto": candidato.nombreCompleto,
                "telefono": candidato.telefono,
                "email": candidato.email,
                "pais": candidato.pais,
                "ciudad": candidato.ciudad,
                "disponibilidadTraslado": candidato.disponibilidadTraslado,
                "remoto": candidato.remoto,
                "enlaceLinkedin": candidato.enlaceLinkedin,
                "estado": candidato.estado
            }),
        })
        .then(result => result.json())
}

export function getTecnologias(){
    return fetch(API_tecnologias,{
            headers:{
                "Authorization" : "Bearer MTY1NQ.rPlQ0MZpBtGGZMpSl0uf21bs1dRr4yLOy29Rh_dvHYMCCsLBFj-bqv739jfn",
                "Content-Type" : "application/json;charset=utf-8"
            },
        })
            .then(result => result.json())
}