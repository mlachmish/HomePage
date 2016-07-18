/**
 * Created by matan on 15/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Project} from './projects';

@Component({
    selector: 'Project',
    template: require('./project.html')
})
export class ProjectComponent {
    @Input() public project: Project;
}
