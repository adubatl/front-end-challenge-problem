import { Component, OnInit } from "@angular/core";
import { EquipmentData as equipmentFallback } from "../backend-interceptor/EquipmentData";

@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
    equipment = equipmentFallback.array;
    constructor() {}

    ngOnInit() {}
}
