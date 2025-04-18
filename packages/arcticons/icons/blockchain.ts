import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockchainIcon],svg[arcticons-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.169 41.33L6.67 26.831a4.016 4.016 0 0 1 0-5.662L21.169 6.67a4.016 4.016 0 0 1 5.662 0L41.33 21.169a4.016 4.016 0 0 1 0 5.662L26.831 41.33a4.004 4.004 0 0 1-5.662 0M24 42.502V24m-13.86-6.301L24 24m13.86-6.301L24 24"></svg:path>`,
})
export class ArcticonsBlockchainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
