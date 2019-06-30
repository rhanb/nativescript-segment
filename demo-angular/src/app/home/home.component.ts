import { Component, OnInit } from "@angular/core";
import { Segment, SegmentConfig } from 'nativescript-segment';
import { SEGMENT_KEY } from '../../../../secret';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        const config: SegmentConfig = {
            trackLifeCycleEvents: true,
            recordScreenViews: true
        };
        Segment.configure(SEGMENT_KEY, config);
    }

}
