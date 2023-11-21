import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    api_url: string = '';
    constructor(
        public http: HttpClient
    ) {
        this.api_url = AppConfig.api_url;
    }

    get(params: any, list?: any): any {
        if (list) {
            return this.http.get(this.api_url + params.url, { params: params });
        } else {
            let params_string = '';
            for (let value in params) {
                if (value != "url") { params_string += '/' + params[value]; }
            }
            return this.http.get(this.api_url + params.url + params_string);
        }
    }

    delete(params: any) {
        let params_string = '';
        for (let value in params) {
            if (value != "url") { params_string += '/' + params[value]; }
        }
        return this.http.delete(AppConfig.api_url + params.url + params_string);
    }

    post(params: any): any { return this.http.post(this.api_url + params.url, params); }
    postFormData(params: FormData) { return this.http.post(AppConfig.api_url + params.get('url'), params); }
    put(params: any) { return this.http.put(this.api_url + params.url, params); }
}
