import {Component} from '@angular/core';

@Component({
  selector: 'TitleComponent',
  template: require('./title.html')
})
export class Title {
    linkedinLogoWhite: string = '../img/social/white/linkedin-logo.png';
    linkedinLogoColor: string = '../img/social/color/linkedin-logo.png';

    githubLogoWhite: string = '../img/social/white/github-logo.png';
    githubLogoColor: string = '../img/social/color/github-logo.png';

    facebookLogoWhite: string = '../img/social/white/facebook-logo.png';
    facebookLogoColor: string = '../img/social/color/facebook-logo.png';

    twitterLogoWhite: string = '../img/social/white/twitter-logo.png';
    twitterLogoColor: string = '../img/social/color/twitter-logo.png';

    mouseOverLinkedin() {
        (<HTMLImageElement>document.getElementById('linkedin-logo')).src = this.linkedinLogoColor;
    };
    mouseOutLinkedin() {
        (<HTMLImageElement>document.getElementById('linkedin-logo')).src = this.linkedinLogoWhite;
    };

    mouseOverGithub() {
        (<HTMLImageElement>document.getElementById('github-logo')).src = this.githubLogoColor;
    };
    mouseOutGithub() {
        (<HTMLImageElement>document.getElementById('github-logo')).src = this.githubLogoWhite;
    };

    mouseOverFacebook() {
        (<HTMLImageElement>document.getElementById('facebook-logo')).src = this.facebookLogoColor;
    };
    mouseOutFacebook() {
        (<HTMLImageElement>document.getElementById('facebook-logo')).src = this.facebookLogoWhite;
    };

    mouseOverTwitter() {
        (<HTMLImageElement>document.getElementById('twitter-logo')).src = this.twitterLogoColor;
    };
    mouseOutTwitter() {
        (<HTMLImageElement>document.getElementById('twitter-logo')).src = this.twitterLogoWhite;
    };
}
