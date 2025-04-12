import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIceCreamBowlIcon],svg[lucide-ice-cream-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"></svg:path><svg:path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"></svg:path><svg:path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"></svg:path></svg:g>`
})
export class LucideIceCreamBowlIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
