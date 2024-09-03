import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isScrolled = true;

  logo = 'light';

/*   @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  } */

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
}
