import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    static production: boolean               = true;
    static readonly app_version: string      = '0.0.0';
    static readonly api_local: string        = 'http://localhost:3000/';
    static readonly api_production: string   = 'https://tech-hub-2245.onrender.com/';
    static api_url: string                   = 'https://tech-hub-2245.onrender.com/';
}