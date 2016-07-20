import {Component} from '@angular/core';

@Component({
  selector: 'TitleComponent',
  template: require('./title.html')
})
export class Title {
    private linkedinLogoWhite: string = '../img/social/white/linkedin-logo.png';
    private linkedinLogoColor: string = '../img/social/color/linkedin-logo.png';

    private githubLogoWhite: string = '../img/social/white/github-logo.png';
    private githubLogoColor: string = '../img/social/color/github-logo.png';

    private stackoverflowWhite: string = '../img/social/white/stackoverflow-logo.png'
    private stackoverflowColor: string = '../img/social/color/stackoverflow-logo.png'

    private facebookLogoWhite: string = '../img/social/white/facebook-logo.png';
    private facebookLogoColor: string = '../img/social/color/facebook-logo.png';

    private twitterLogoWhite: string = '../img/social/white/twitter-logo.png';
    private twitterLogoColor: string = '../img/social/color/twitter-logo.png';

    public linkedinLogo: string = this.linkedinLogoWhite;
    public githubLogo: string = this.githubLogoWhite;
    public stackoverflowLogo: string = this.stackoverflowWhite;
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

    private mouseOverStackoverflow() {
        this.stackoverflowLogo = this.stackoverflowColor;
    };
    private mouseOutStackoverflow() {
        this.stackoverflowLogo = this.stackoverflowWhite;
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
}
