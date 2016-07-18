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
        var win = window.open("https://firebasestorage.googleapis.com/v0/b/homepage-bd6f3.appspot.com/o/Matan%20Lachmish%20-%20CV.pdf?alt=media&token=eed63f35-aff7-4a16-9ca2-c3c2d012e43f", '_blank');
        win.focus();
    }

}
