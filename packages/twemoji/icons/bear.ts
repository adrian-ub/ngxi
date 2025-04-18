import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBearIcon],svg[twemoji-bear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="6" r="6" fill="#C1694F"></svg:circle><svg:circle cx="29" cy="6" r="6" fill="#C1694F"></svg:circle><svg:circle cx="7" cy="6" r="4" fill="#E6AAAA"></svg:circle><svg:circle cx="29" cy="6" r="4" fill="#E6AAAA"></svg:circle><svg:path fill="#C1694F" d="M35 22S33.692 0 18 0S1 22 1 22c0 5.872 4.499 10.323 12.216 11.61a5.982 5.982 0 0 0 9.568 0C30.501 32.323 35 27.872 35 22"></svg:path><svg:circle cx="18" cy="30" r="4" fill="#DD2E44"></svg:circle><svg:path fill="#D99E82" d="M18 20S7 23.687 7 27a6 6 0 0 0 11 3.315A6 6 0 0 0 29 27c0-3.313-11-7-11-7"></svg:path><svg:path fill="#272B2B" d="M11 17s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm10 0s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm-7.875 8c-1.624 1 3.25 4 4.875 4s6.499-3 4.874-4s-8.124-1-9.749 0"></svg:path>`,
})
export class TwemojiBearIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
