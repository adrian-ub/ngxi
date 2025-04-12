import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFerrisWheelIcon],svg[lucide-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M12 2v4m-5.2 9l-3.5 2M20.7 7l-3.5 2M6.8 9L3.3 7m17.4 10l-3.5-2M9 22l3-8l3 8m-7 0h8"></svg:path><svg:path d="M18 18.7a9 9 0 1 0-12 0"></svg:path></svg:g>`
})
export class LucideFerrisWheelIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
