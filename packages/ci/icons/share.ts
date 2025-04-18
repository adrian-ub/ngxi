import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShareIcon],svg[ci-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15a3.478 3.478 0 0 0 2.357-.93l6.26 3.577a3.52 3.52 0 1 0 1.026-1.717l-6.26-3.577c.066-.25.102-.509.108-.768l6.15-3.515A3.489 3.489 0 1 0 14 5.5c.004.288.043.575.117.853L8.433 9.6A3.5 3.5 0 1 0 5.5 15Z"></svg:path>`,
})
export class CiShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
