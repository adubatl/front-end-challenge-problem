import { Component, OnInit } from "@angular/core";
import { Equipment } from "../equipment";
import { EquipmentService } from "../equipment.service";

@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
    equipment: Equipment[];

    getEquipment(): void {
        this.equipmentService
            .getEquipment()
            .subscribe((equipment) => (this.equipment = equipment));
    }

    constructor(private equipmentService: EquipmentService) {}

    ngOnInit() {
        this.getEquipment();
    }
}
