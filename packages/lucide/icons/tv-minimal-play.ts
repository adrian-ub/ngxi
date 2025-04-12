import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTvMinimalPlayIcon],svg[lucide-tv-minimal-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64zM7 21h10"></svg:path><svg:rect width="20" height="14" x="2" y="3" rx="2"></svg:rect></svg:g>`
})
export class LucideTvMinimalPlayIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
