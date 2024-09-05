import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isScrolled = true;

  logo = 'light';
  flag = 'en-us'

  /*   @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    } */

  constructor(private translate: TranslateService) {
    // Define o idioma padrão como português
    translate.setDefaultLang('pt');
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeTheme() {
    const darkTheme = document.body.classList.toggle('dark-theme');

    if (darkTheme) {
      return (this.logo = 'dark');
    }

    return (this.logo = 'light');
  }

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    this.translate.use(currentLang === 'en' ? 'pt' : 'en');
    
    if (this.translate.currentLang === 'en') {
      
      return (this.flag = 'pt-br');
    }

    return (this.flag = 'en-us');
  }
}
