import { URL_API } from "./base";

export const consultasService = () => {
        return fetch(`${URL_API}/consultas`).then(resultado => resultado.json())
}
