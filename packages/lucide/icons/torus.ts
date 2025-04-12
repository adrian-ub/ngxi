import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTorusIcon],svg[lucide-torus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="11" rx="3" ry="2"></svg:ellipse><svg:ellipse cx="12" cy="12.5" rx="10" ry="8.5"></svg:ellipse></svg:g>`
})
export class LucideTorusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
