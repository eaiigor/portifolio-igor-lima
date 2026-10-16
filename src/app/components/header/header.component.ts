import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  isDark = document.documentElement.classList.contains('dark-theme');

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    const saved = this.readStorage('lang');
    const lang = saved === 'en' || saved === 'pt' ? saved : 'pt';
    this.useLanguage(lang);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 8;
  }

  scrollTo(elementId: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen = false;
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event?: Event): void {
    event?.preventDefault();
    this.menuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeTheme(): void {
    this.isDark = document.documentElement.classList.toggle('dark-theme');
    this.writeStorage('theme', this.isDark ? 'dark' : 'light');
  }

  switchLanguage(): void {
    const current = this.translate.currentLang || 'pt';
    this.useLanguage(current === 'en' ? 'pt' : 'en');
  }

  private useLanguage(lang: 'pt' | 'en'): void {
    this.translate.use(lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    this.writeStorage('lang', lang);
  }

  private readStorage(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private writeStorage(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* armazenamento indisponível: segue sem persistir */
    }
  }
}
