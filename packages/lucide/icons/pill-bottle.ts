import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePillBottleIcon],svg[lucide-pill-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></svg:path><svg:rect width="16" height="5" x="4" y="2" rx="1"></svg:rect></svg:g>`
})
export class LucidePillBottleIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
