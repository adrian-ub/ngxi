import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHamIcon],svg[lucide-ham-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"></svg:path><svg:path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288m3.421-10.709L18.6 8.4a2.501 2.501 0 1 0 1.65-4.65a2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025M8.5 16.5l-1-1"></svg:path></svg:g>`
})
export class LucideHamIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
