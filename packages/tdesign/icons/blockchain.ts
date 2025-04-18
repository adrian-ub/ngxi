import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBlockchainIcon],svg[tdesign-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2.5h6V2h7v7h-2.5v6H22v7h-7v-2.5H9V22H2v-7h2.5V9H2zm5 5V4H4v3zm-.5 2v6H9v2.5h6V15h2.5V9H15V6.5H9V9zM17 17v3h3v-3zM7 17H4v3h3zM17 4v3h3V4z"></svg:path>`,
})
export class TdesignBlockchainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
