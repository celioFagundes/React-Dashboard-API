import { URL_API } from "./base";

export const resumoService = () => {
        return fetch(`${URL_API}/resumo`).then(resultado => resultado.json())
}
