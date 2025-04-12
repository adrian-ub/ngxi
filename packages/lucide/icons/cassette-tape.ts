import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCassetteTapeIcon],svg[lucide-cassette-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:circle cx="8" cy="10" r="2"></svg:circle><svg:path d="M8 12h8"></svg:path><svg:circle cx="16" cy="10" r="2"></svg:circle><svg:path d="m6 20l.7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"></svg:path></svg:g>`
})
export class LucideCassetteTapeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
