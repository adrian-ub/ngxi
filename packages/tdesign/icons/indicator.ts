import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIndicatorIcon],svg[tdesign-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.353 1v3h3.294V1h2v3h1.89l4.097 3l-4.096 3h-1.89v2.111H22v6h-6.353V23h-2v-4.889h-3.294V23h-2v-4.889h-1.89l-4.097-3l4.096-3h1.89V10H2V4h6.353V1zM4 6v2h12.884l1.365-1l-1.365-1zm9.647 4h-3.294v2.111h3.294zm-6.53 4.111l-1.366 1l1.366 1H20v-2z"></svg:path>`,
})
export class TdesignIndicatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
