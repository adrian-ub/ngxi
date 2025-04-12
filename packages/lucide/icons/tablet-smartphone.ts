import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTabletSmartphoneIcon],svg[lucide-tablet-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="10" height="14" x="3" y="8" rx="2"></svg:rect><svg:path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4M8 18h.01"></svg:path></svg:g>`
})
export class LucideTabletSmartphoneIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
