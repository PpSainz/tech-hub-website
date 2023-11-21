import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GetcomponentsService {

  constructor( public ApiService: ApiService) { }

  getCpuList(params: any): any { params.url = "processors"; return this.ApiService.get(params, true) };
  getMoboList(params: any): any { params.url = "mobos"; return this.ApiService.get(params, true) };
  getGpuList(params: any): any { params.url = "gpus"; return this.ApiService.get(params, true) };
  getRAMList(params: any): any { params.url = "ramMemories"; return this.ApiService.get(params, true) };
  getStorageList(params: any): any { params.url = "storages"; return this.ApiService.get(params, true) };
  getCoolList(params: any): any { params.url = "coolings"; return this.ApiService.get(params, true) };
  getPowerList(params: any): any { params.url = "power"; return this.ApiService.get(params, true) };
  getCasesList(params: any): any { params.url = "cases"; return this.ApiService.get(params, true) };
  getOSList(params: any): any { params.url = "os"; return this.ApiService.get(params, true) };
}
