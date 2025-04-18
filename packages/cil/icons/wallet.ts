import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWalletIcon],svg[cil-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M489.972 119.059a23.84 23.84 0 0 0-17-7.059H456V72a24.027 24.027 0 0 0-24-24H86.627A70.63 70.63 0 0 0 16 118.627v274.746A70.63 70.63 0 0 0 86.627 464h385.4a24.047 24.047 0 0 0 24-23.923l.944-303.995a23.84 23.84 0 0 0-6.999-17.023M464.053 432H86.627A38.627 38.627 0 0 1 48 393.373V118.627A38.627 38.627 0 0 1 86.627 80H424v32H88v32h376.947Z"></svg:path><svg:path fill="currentColor" d="M392 264h32v32h-32z"></svg:path>`,
})
export class CilWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
