/**
 * Created by matan on 15/07/2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'AboutComponent',
    template: require('./about.html')
})
export class About {

    openCV() {
        var win = window.open('http://bit.ly/2ASl3fT', '_blank');
        win.focus();
    }

}
