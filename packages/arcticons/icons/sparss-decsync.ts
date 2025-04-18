import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSparssDecsyncIcon],svg[arcticons-sparss-decsync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.09 10.55A16.24 16.24 0 0 0 7.76 24m7.16 13.46A16.23 16.23 0 0 0 40.23 24M9.04 24h2.82l-3.88 5.92L4.11 24zm30.14 0h-2.82l3.87-5.92L44.11 24h0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.528 28.99A13.52 13.52 0 0 0 19.01 15.472M26.8 28.99a7.79 7.79 0 0 0-7.79-7.79"></svg:path><svg:circle cx="19.01" cy="28.99" r="2.482" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSparssDecsyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
