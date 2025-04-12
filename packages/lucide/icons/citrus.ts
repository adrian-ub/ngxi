import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCitrusIcon],svg[lucide-citrus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"></svg:path><svg:path d="M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5"></svg:path><svg:path d="M14 17.85V10H6.15"></svg:path></svg:g>`
})
export class LucideCitrusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
