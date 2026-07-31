import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar { 
      scrolled = false;

  @HostListener('window:scroll', [])
onWindowScroll() {
  const shouldBeScrolled = window.scrollY > 50;
  if (this.scrolled !== shouldBeScrolled) {
    this.scrolled = shouldBeScrolled;
  }
}
}
