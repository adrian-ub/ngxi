import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FastForwardButtonIcon],svg[noto-v1-fast-forward-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m6.24 98.99l54.93-31.71v31.71L121.76 64L61.17 29.01v31.72L6.24 29.01z"></svg:path>`,
})
export class NotoV1FastForwardButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
