import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitcoinIcon],svg[arcticons-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.46 24.998a4.959 4.959 0 1 1-2.567 9.58L16.99 32.46l5.133-19.159l7.903 2.118a4.959 4.959 0 1 1-2.566 9.58m0-.001l-7.903-2.117m2.566-9.58l-2.807-.752M16.99 32.46l-2.808-.752M24.56 13.954l.91-3.397m3 4.445l.91-3.397M18.516 36.51l.91-3.397m3 4.444l.91-3.396"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBitcoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
