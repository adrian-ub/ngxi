import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAxeIcon],svg[lucide-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"></svg:path><svg:path d="M15 13L9 7l4-4l6 6h3a8 8 0 0 1-7 7z"></svg:path></svg:g>`
})
export class LucideAxeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
