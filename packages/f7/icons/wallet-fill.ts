import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7WalletFillIcon],svg[f7-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.081 16.001h40.97l.174.005A6 6 0 0 1 53 22v24a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V22l.003-.205l.01-.18A6.01 6.01 0 0 1 6.081 16M37 30a4 4 0 1 0 0 8a4 4 0 0 0 0-8m9.847-21.55a6 6 0 0 1 .205 1.55l-.001 3H14.424l25.075-8.795a6 6 0 0 1 7.348 4.243"></svg:path>`,
})
export class F7WalletFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
