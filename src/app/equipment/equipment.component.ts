import { Component, OnInit } from "@angular/core";
import { EquipmentData as equipmentFallback } from "../backend-interceptor/EquipmentData";
import { AccordionComponent } from "../accordion/accordion.component";
import { AccordionPanelComponent } from "../accordion-panel/accordion-panel.component";

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
