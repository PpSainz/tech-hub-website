import { Component } from '@angular/core';

import { GetcomponentsService } from 'src/app/services/getcomponents.service';
import { ComputersService } from 'src/app/services/computers.service';

@Component({
    selector: 'app-pro',
    templateUrl: './pro.component.html',
    styleUrls: ['./pro.component.scss']
})
export class ProComponent {

    cpu_brand: any = {
        id: null,
        name: null,
        img: '../../../assets/icons/image.svg',
    };
    cpu_list: any = [];
    cpu_id: any;
    cpu_selct: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    gpu_list: any = [];
    gpu_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    mobo_list: any = [];
    mobo_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    ram_list: any = [];
    ram_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    rom_list: any = [];
    rom_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    cool_list: any = [];
    cool_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    power_list: any = [];
    power_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    cases_list: any = [];
    cases_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    os_list: any = [];
    os_select: any = {
        ID: null,
        ImageURL: '../../../assets/icons/image.svg',
    };

    pc_name: any;

    constructor(
        private getComponents: GetcomponentsService,
        private ComputersService: ComputersService,
    ) { }

    async brand_cpu() {
        if (this.cpu_brand.ID == 1) {
            this.cpu_brand.name = 'Intel';
            this.cpu_brand.ImageURL = '../../../assets/photos/intel.png';
        } else if (this.cpu_brand.ID == 2) {
            this.cpu_brand.name = 'AMD';
            this.cpu_brand.ImageURL = '../../../assets/photos/amd.png';
        }
        this.getProcessors();
    }
    async getProcessors() {
        this.getComponents.getCpuList({}).subscribe(async (return_cpu_list: any) => {
            this.cpu_list = return_cpu_list.filter((cpu: any) => cpu.Brand === this.cpu_brand.name);
        });
    }
    async selectProcessor() {
        this.cpu_selct = this.cpu_list.find((cpu: any) => cpu.ID == this.cpu_selct.ID);
        this.gpu_select = { ImageURL: '../../../assets/icons/image.svg', };
        this.getGpuList();
    }

    async getGpuList() {
        this.getComponents.getGpuList({}).subscribe(async (return_gpu_list: any) => {
            this.gpu_list = return_gpu_list;
        });
    }
    async setGpu() {
        this.gpu_select = this.gpu_list.find((gpu: any) => gpu.ID == this.gpu_select.ID);
        this.mobo_select = { ImageURL: '../../../assets/icons/image.svg', };
        this.getMotherboardList();
    }

    async getMotherboardList() {
        this.getComponents.getMoboList({}).subscribe(async (return_mobo_list: any) => {
            this.mobo_list = return_mobo_list.filter((mobo: any) => mobo.SocketType == this.cpu_selct.SocketType);
        });
    }
    async setMobo() {
        this.mobo_select = this.mobo_list.find((mobo: any) => mobo.ID == this.mobo_select.ID);
        this.ram_select = { ImageURL: '../../../assets/icons/image.svg', };
        this.getRAMList();
    }

    async getRAMList() {
        this.getComponents.getRAMList({}).subscribe(async (return_ram_list: any) => {
            this.ram_list = return_ram_list;
        });
    }
    async setRAM() {
        this.ram_select = this.ram_list.find((ram: any) => ram.ID == this.ram_select.ID);
        this.getStorageList();
    }

    async getStorageList() {
        this.getComponents.getStorageList({}).subscribe(async (return_rom_list: any) => {
            this.rom_list = return_rom_list;
        });
    }
    async setStorage() {
        this.rom_select = this.rom_list.find((rom: any) => rom.ID == this.rom_select.ID);
        this.getCoolList();
    }

    async getCoolList() {
        this.getComponents.getCoolList({}).subscribe(async (return_cool_list: any) => {
            this.cool_list = return_cool_list;
        });
    }
    async setCool() {
        this.cool_select = this.cool_list.find((rom: any) => rom.ID == this.cool_select.ID);
        this.getPowerList();
    }

    async getPowerList() {
        this.getComponents.getPowerList({}).subscribe(async (return_power_list: any) => {
            this.power_list = return_power_list;
        });
    }
    async setPower() {
        this.power_select = this.power_list.find((power: any) => power.ID == this.power_select.ID);
        this.getCasesList();
    }

    async getCasesList() {
        this.getComponents.getCasesList({}).subscribe(async (return_cases_list: any) => {
            this.cases_list = return_cases_list;
        });
    }
    async setCases() {
        this.cases_select = this.cases_list.find((cases: any) => cases.ID == this.cases_select.ID);
        this.getOSList();
    }

    async getOSList() {
        this.getComponents.getOSList({}).subscribe(async (return_os_list: any) => {
            this.os_list = return_os_list;
        });
    }
    async setOS() {
        this.os_select = this.os_list.find((os: any) => os.ID == this.os_select.ID);
    }

    async deleteValues() {
        if (confirm("Seguro? se perdera tu progreso")) {
            this.cpu_brand = {
                id: null,
                name: null,
                img: '../../../assets/icons/image.svg',
            };
            this.cpu_selct = {
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.gpu_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.mobo_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.ram_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.rom_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.cool_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.power_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.cases_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.os_select = {
                ID: null,
                ImageURL: '../../../assets/icons/image.svg',
            };
            this.pc_name = '';
        }
    }

    async savePC() {
        let values = {
            ModelName: this.pc_name,
            ProcessorID: this.cpu_selct.ID,
            MotherBoardID: this.mobo_select.ID,
            GraphicsCardID: this.gpu_select.ID,
            RamMemorieID: this.ram_select.ID,
            StorageID: this.rom_select.ID,
            PowerSupplyID: this.power_select.ID,
            CaseID: this.cases_select.ID,
            CoolingSystemID: this.cool_select.ID,
            OSID: this.os_select.ID
        }
        console.log(values);
        this.ComputersService.generatePC(values).subscribe(async (return_pc: any) => {
            if (return_pc.ID != 0) {
                this.deleteValues();
            }
        })
    }

}
