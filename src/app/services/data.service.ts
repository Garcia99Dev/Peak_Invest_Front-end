import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = "https://localhost:7019/consulta/";
    }

    //Serviço de consulta de usuário
    getConsultarUsuario(userId: number) {
        return this.http.get<any>(this.baseURL + '?id=' + userId);
    }

    //Serviço de simulação de investimento
    postSimularInvestimento(parcelas: number, valor: number) {
        return this.http.post<any>(this.baseURL, {Parcelas: parcelas, Valor: valor});
    }
}