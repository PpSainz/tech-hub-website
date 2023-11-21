import { Component } from '@angular/core';
import { ComputersService } from 'src/app/services/computers.service';

@Component({
  selector: 'app-noob',
  templateUrl: './noob.component.html',
  styleUrls: ['./noob.component.scss']
})
export class NoobComponent {
  recomendation_select: any = {
    Tag: '',
  }
  recomendation_list: any = [];

  constructor(
    private ComputersService: ComputersService,
  ) { this.getlist(); }

  async getlist() {
    this.ComputersService.getPCS({}).subscribe(async(return_list:any)=>{
      this.recomendation_list = return_list;
    });
  }

  async selectPC() {
    this.recomendation_select = this.recomendation_list.filter((pc: any) => pc.Tag == this.recomendation_select.Tag);
  }
}
