/**
 * Created by matan on 15/07/2016.
 */
import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ProjectComponent} from './project';

export class Project {
    constructor(
        public logo: string,
        public title: string,
        public text: string,
        public tag: string,
        public link: string
    ) {}
}

@Component({
    selector: 'Projects',
    template: require('./projects.html'),
    directives: [ProjectComponent],
    providers: [HTTP_PROVIDERS]
})
export class Projects {
    public projects: Project[];
    public project: Project;

    constructor(public http: Http) {
        this.getProjects().subscribe(result => this.projects = result);
    }

    getProjects(): Observable<Project[]> {
        return this.http
            .get('app/projects/projectList.json')
            .map(response => response.json());
    }
}
