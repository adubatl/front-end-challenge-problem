import { Component, OnInit } from "@angular/core";
import { Equipment } from "../equipment";
import { EquipmentService } from "../equipment.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
    equipment: Equipment[];
    name;
    getEquipment(): void {
        this.equipmentService
            .getEquipment()
            .subscribe((equipment) => (this.equipment = equipment));
    }

    constructor(
        private equipmentService: EquipmentService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.getEquipment();
        this.route.queryParams.subscribe((params) => {
            this.name = params["name"];
        });
    }
}
