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
        var win = window.open('https://www.dropbox.com/s/psk38lqq5ei5oyf/MatanLachmishResume.pdf', '_blank');
        win.focus();
    }

}
