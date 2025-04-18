import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIndicatorFilledIcon],svg[tdesign-indicator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.353 1v3h3.294V1h2v3h1.89l4.097 3l-4.096 3h-1.89v2.111H22v6h-6.353V23h-2v-4.889h-3.294V23h-2v-4.889h-1.89l-4.097-3l4.096-3h1.89V10H2V4h6.353V1zm3.294 9h-3.294v2.111h3.294z"></svg:path>`,
})
export class TdesignIndicatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
