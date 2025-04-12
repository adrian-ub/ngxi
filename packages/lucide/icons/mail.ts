import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMailIcon],svg[lucide-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></svg:path></svg:g>`
})
export class LucideMailIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
