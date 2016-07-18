import {Component} from '@angular/core';
import {Title} from './title';
import {About} from './about';
import {Footer} from './footer';
import {Projects} from './projects/projects';
import {Contact} from './contact';

@Component({
  selector: 'App',
  template: require('./main.html'),
  directives: [Title, About, Projects, Contact, Footer]
})
export class Main {}
