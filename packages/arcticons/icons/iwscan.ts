import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIwscanIcon],svg[arcticons-iwscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.333 32.697c0-6.727 5.453-12.18 12.18-12.18h0m19.594-7.86c1.395 7.908-1.118 15.38-4.467 22.76c-3.156-6.185-4.128-13.677-4.343-22.81c.414 9.155-1.927 16.315-5.815 22.76c-2.751-6.848-5.562-13.666-3.968-22.785M4.5 32.515c0-11.009 8.924-19.933 19.932-19.933"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.816 31.13a3.876 3.876 0 1 1-.906-2.559"></svg:path>`,
})
export class ArcticonsIwscanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
