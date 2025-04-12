import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCableCarIcon],svg[lucide-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5"></svg:path><svg:rect width="16" height="10" x="4" y="12" rx="3"></svg:rect><svg:path d="M9 12v5m6-5v5M4 17h16"></svg:path></svg:g>`
})
export class LucideCableCarIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
