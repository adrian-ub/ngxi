import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibEthereumIcon],svg[cib-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.927 23.959l-9.823-5.797l9.817 13.839l9.828-13.839l-9.828 5.797zM16.073 0L6.254 16.297l9.819 5.807l9.823-5.801z"></svg:path>`,
})
export class CibEthereumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
