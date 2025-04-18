import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVectorTimberIcon],svg[logos-vector-timber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#10E7FF" d="m256 0l-91.429 150.862l-18.969-31.219L217.61 0H256ZM47.204 0l44.674 73.367L136.53 0h45.365L90.947 150.068L0 0h47.204Z"></svg:path>`,
})
export class LogosVectorTimberIcon {
  readonly viewBox = input("0 0 256 151")
  readonly width = input("1.7em")
  readonly height = input("1em")
}
