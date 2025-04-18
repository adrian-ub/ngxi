import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBitcoinSignIcon],svg[uil-bitcoin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9a4 4 0 0 0-4-4V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h3v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2a4 4 0 0 0 2.62-7A4 4 0 0 0 19 9m-4 8H9v-4h6a2 2 0 0 1 0 4m0-6H9V7h6a2 2 0 0 1 0 4"></svg:path>`,
})
export class UilBitcoinSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
