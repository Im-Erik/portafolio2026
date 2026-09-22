import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit {
  scrolled = false;
  isDarkMode = false;
  private readonly themeStorageKey = 'portfolio-theme';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isDarkMode = window.localStorage.getItem(this.themeStorageKey) === 'dark';
      this.applyTheme();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const shouldBeScrolled = window.scrollY > 50;
    if (this.scrolled !== shouldBeScrolled) {
      this.scrolled = shouldBeScrolled;
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof window === 'undefined') {
      return;
    }

    document.body.classList.toggle('theme-dark', this.isDarkMode);
    document.body.classList.toggle('theme-light', !this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    document.documentElement.style.colorScheme = this.isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem(this.themeStorageKey, this.isDarkMode ? 'dark' : 'light');
  }
}
