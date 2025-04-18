import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWalletFillIcon],svg[lets-icons-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 5a1 1 0 1 0 0-2zM5.5 5H20V3H5.5zm0 5h8V8h-8zM4 6.5A1.5 1.5 0 0 1 5.5 5V3A3.5 3.5 0 0 0 2 6.5zm-2 0A3.5 3.5 0 0 0 5.5 10V8A1.5 1.5 0 0 1 4 6.5z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M3 12V6.5"></svg:path><svg:path fill="currentColor" stroke="currentColor" d="M3 8.5h-.5v10.533c0 .443 0 .825.041 1.13c.044.329.144.643.398.898c.255.255.57.354.897.398c.306.041.688.041 1.131.041h14.066c.443 0 .825 0 1.13-.041c.329-.044.643-.143.898-.398s.354-.57.398-.897c.041-.306.041-.688.041-1.131V17.5H18a2.5 2.5 0 0 1 0-5h3.5v-1.533c0-.443 0-.825-.041-1.13c-.044-.329-.143-.643-.398-.898c-.255-.254-.57-.354-.897-.398c-.306-.041-.688-.041-1.131-.041z"></svg:path></svg:g>`,
})
export class LetsIconsWalletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
