import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBusFrontIcon],svg[lucide-bus-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6L2 7m8-1h4m8 1l-2-1"></svg:path><svg:rect width="16" height="16" x="4" y="3" rx="2"></svg:rect><svg:path d="M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2"></svg:path></svg:g>`
})
export class LucideBusFrontIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
