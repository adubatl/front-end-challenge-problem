import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Equipment } from "../equipment";

@Component({
    selector: "app-accordion-panel",
    templateUrl: "./accordion-panel.component.html",
    styleUrls: ["./accordion-panel.component.css"],
})
export class AccordionPanelComponent {
    @Input() opened = false;
    @Input() item: Equipment;
    @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
