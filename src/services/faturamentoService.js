import { URL_API } from "./base";

export const faturamentoService = () => {
        return fetch(`${URL_API}/faturamento`).then(resultado => resultado.json())
}
