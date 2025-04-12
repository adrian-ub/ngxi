import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadiusIcon],svg[lucide-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.34 17.52a10 10 0 1 0-2.82 2.82"></svg:path><svg:circle cx="19" cy="19" r="2"></svg:circle><svg:path d="m13.41 13.41l4.18 4.18"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`
})
export class LucideRadiusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
