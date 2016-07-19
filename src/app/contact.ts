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

    private linkedinLogoWhite: string = '../img/social/white/linkedin-logo.png';
    private linkedinLogoColor: string = '../img/social/color/linkedin-logo.png';

    private githubLogoWhite: string = '../img/social/white/github-logo.png';
    private githubLogoColor: string = '../img/social/color/github-logo.png';

    private facebookLogoWhite: string = '../img/social/white/facebook-logo.png';
    private facebookLogoColor: string = '../img/social/color/facebook-logo.png';

    private twitterLogoWhite: string = '../img/social/white/twitter-logo.png';
    private twitterLogoColor: string = '../img/social/color/twitter-logo.png';

    public linkedinLogo: string = this.linkedinLogoWhite;
    public githubLogo: string = this.githubLogoWhite;
    public facebookLogo: string = this.facebookLogoWhite;
    public twitterLogo: string = this.twitterLogoWhite;

    private mouseOverLinkedin() {
        this.linkedinLogo = this.linkedinLogoColor;
    };
    private mouseOutLinkedin() {
        this.linkedinLogo = this.linkedinLogoWhite;
    };

    private mouseOverGithub() {
        this.githubLogo = this.githubLogoColor;
    };
    private mouseOutGithub() {
        this.githubLogo = this.githubLogoWhite;
    };

    private mouseOverFacebook() {
        this.facebookLogo = this.facebookLogoColor;
    };
    private mouseOutFacebook() {
        this.facebookLogo = this.facebookLogoWhite;
    };

    private mouseOverTwitter() {
        this.twitterLogo = this.twitterLogoColor;
    };
    private mouseOutTwitter() {
        this.twitterLogo = this.twitterLogoWhite;
    };

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
