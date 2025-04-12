import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGlassWaterIcon],svg[lucide-glass-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"></svg:path><svg:path d="M6 12a5 5 0 0 1 6 0a5 5 0 0 0 6 0"></svg:path></svg:g>`
})
export class LucideGlassWaterIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
