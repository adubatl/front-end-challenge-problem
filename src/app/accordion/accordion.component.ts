import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
} from "@angular/core";
import { AccordionPanelComponent } from "../accordion-panel/accordion-panel.component";

@Component({
    selector: "app-accordion",
    templateUrl: "./accordion.component.html",
    styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent implements AfterContentInit {
    @ContentChildren(AccordionPanelComponent) panels: QueryList<
        AccordionPanelComponent
    >;

    ngAfterContentInit() {
        // Loop through all panels
        this.panels.toArray().forEach((panel: AccordionPanelComponent) => {
            // subscribe panel toggle event
            panel.toggle.subscribe(() => {
                // Open the panel
                this.openPanel(panel);
            });
        });
    }

    openPanel(panel: AccordionPanelComponent) {
        // close all panels
        this.panels.toArray().forEach((p) => (p.opened = false));
        // open the selected panel
        panel.opened = true;
    }
}
