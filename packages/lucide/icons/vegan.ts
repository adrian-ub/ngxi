import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVeganIcon],svg[lucide-vegan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 8q6 0 6-6q-6 0-6 6"></svg:path><svg:path d="M17.41 3.59a10 10 0 1 0 3 3"></svg:path><svg:path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"></svg:path></svg:g>`
})
export class LucideVeganIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
