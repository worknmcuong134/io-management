import { Component, OnInit } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'devextreme/data/odata/store';
import { AreaService } from '../../shared/services/area.service';
import DataSource from 'devextreme/data/data_source';
@Component({
    templateUrl: 'display-data.component.html'
})
export class DisplayDataComponent implements OnInit {
    dataSource: any;
    // priority: any[];
    isCurrent: any[];
    constructor(private areaService: AreaService) {
        // this.dataSource = {
        //   store: {
        //     type: 'odata',
        //     key: 'Task_ID',
        //     url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
        //   },
        //   expand: 'ResponsibleEmployee',
        //   select: [
        //     'Task_ID',
        //     'Task_Subject',
        //     'Task_Start_Date',
        //     'Task_Due_Date',
        //     'Task_Status',
        //     'Task_Priority',
        //     'Task_Completion',
        //     'ResponsibleEmployee/Employee_Full_Name'
        //   ]
        // };
        // this.priority = [
        //   { name: 'High', value: 4 },
        //   { name: 'Urgent', value: 3 },
        //   { name: 'Normal', value: 2 },
        //   { name: 'Low', value: 1 }
        // ];
        this.isCurrent = [
            { name: 'Yes', value: true },
            { name: 'No', value: false },
        ];
    }
    ngOnInit() {
        this.getAreas();
    }
    getAreas(): void {
        this.areaService.getAreas().pipe(
            map(data => {
                // Flip flag to show that loading has finished.
                return data.payload.value;
            }),
            catchError(() => {
                // Catch if the Area API has reached its rate limit. Return empty data.
                return observableOf([]);
            })
        ).subscribe(data => {
            this.dataSource = new DataSource({
                store: {
                    type: 'array',
                    key: 'Id',
                    data: data
                }
            });
        });
    }
}
