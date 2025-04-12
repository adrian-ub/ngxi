import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWrapTextIcon],svg[lucide-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6h18M3 12h15a3 3 0 1 1 0 6h-4"></svg:path><svg:path d="m16 16l-2 2l2 2M3 18h7"></svg:path></svg:g>`
})
export class LucideWrapTextIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
