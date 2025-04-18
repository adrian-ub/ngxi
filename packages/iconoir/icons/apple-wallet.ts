import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleWalletIcon],svg[iconoir-apple-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"></svg:path><svg:path d="M3 15h6.4c.331 0 .605.278.75.576c.206.423.694.924 1.85.924s1.644-.5 1.85-.924c.145-.298.419-.576.75-.576H21M3 7h18M3 11h18"></svg:path></svg:g>`,
})
export class IconoirAppleWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
