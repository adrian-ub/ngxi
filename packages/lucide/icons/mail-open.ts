import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMailOpenIcon],svg[lucide-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z"></svg:path><svg:path d="m22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></svg:path></svg:g>`
})
export class LucideMailOpenIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
