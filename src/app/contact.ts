/**
 * Created by matan on 15/07/2016.
 */
import {Injectable, Inject, Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'ContactComponent',
    template: require('./contact.html'),
    providers: [HTTP_PROVIDERS]
})

@Injectable()
export class Contact {

    constructor(@Inject(Http) public http: Http) {
        this.http = http;
    }

    sendMessage() {
        var name = (<HTMLInputElement>document.getElementById('contact-name')).value;
        var email = (<HTMLInputElement>document.getElementById('contact-email')).value;
        var message = (<HTMLTextAreaElement>document.getElementById('contact-message')).value;
        var subject = 'Website contact';

        var body = {
            name: JSON.stringify(name),
            email: JSON.stringify(email),
            message: JSON.stringify(message),
            subject: JSON.stringify(subject)
        };

        this.http.post('//formspree.io/' + 'matanlachmish' + '@' + 'gmail.com', body, {})
            .subscribe(res => {
                alert('I will be in touch :)');
            });
    }

}
