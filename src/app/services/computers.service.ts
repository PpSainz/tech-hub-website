import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  constructor( public ApiService: ApiService) { }

  generatePC(params: any) { params.url = "computers"; return this.ApiService.post(params); }
}
