import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinIcon],svg[mynaui-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.273 5.25V3m0 2.25H8.182m1.09 0h4.364m0 0V3m0 2.25c1.808 0 3.273 1.511 3.273 3.375S15.444 12 13.636 12m-4.363 9v-2.25m0 0H8.182m1.09 0h4.364m0 2.25v-2.25m0 0h1.091c1.808 0 3.273-1.511 3.273-3.375S16.535 12 14.727 12h-1.09M6 5.25h2.182m0 0V12m5.454 0H8.182M6 18.75h2.182m0 0V12"></svg:path>`,
})
export class MynauiBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
