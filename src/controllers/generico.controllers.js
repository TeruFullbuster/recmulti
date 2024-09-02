import { pool } from '../db.js'

import fetch from 'node-fetch';

import archiver from 'archiver';

export const Detalles = async (req, res) => {
    const { Marca, Modelo, Descripcion, Version, Token } = req.body; // Se obtienen los datos del cuerpo de la petición
    console.log(Marca, Modelo, Descripcion, Token);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const url = `https://core-persistance-service.com/v2/car/comparator/details?brand=${Marca}&year=${Modelo}&model=${Descripcion}&variant=${Version}`;
    console.log(url);
    try {
        const response = await fetch(url, requestOptions);

        if (response.ok) {
            const result = await response.json();
            
            res.status(200).json(result); // Devuelve la respuesta del servicio
        } else if (response.status === 401) {
            res.status(401).json({ error: 'No autorizado' }); // Devuelve un mensaje de no autorizado
        } else {
            res.status(response.status).json({ error: 'Error en la solicitud' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la solicitud' });
    }
};

export const VersionH = async (req, res) => {
    const { Marca, Modelo, Descripcion, Token } = req.body; // Se obtienen los datos del cuerpo de la petición
    console.log(Marca, Modelo, Descripcion, Token);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const url = `https://core-persistance-service.com/v2/car/comparator/variants?brand=${Marca}&year=${Modelo}&model=${Descripcion}`;
    console.log(url);
    try {
        const response = await fetch(url, requestOptions);

        if (response.ok) {
            const result = await response.json();
            
            res.status(200).json(result); // Devuelve la respuesta del servicio
        } else if (response.status === 401) {
            res.status(401).json({ error: 'No autorizado' }); // Devuelve un mensaje de no autorizado
        } else {
            res.status(response.status).json({ error: 'Error en la solicitud' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la solicitud' });
    }
};


