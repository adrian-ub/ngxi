import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationTriangleFillIcon],svg[mage-exclamation-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.86 17.249l-7.61-13.19a2.65 2.65 0 0 0-4.57 0l-7.61 13.19a2.6 2.6 0 0 0 0 2.64a2.6 2.6 0 0 0 1 1a2.67 2.67 0 0 0 1.32.36h15.23a2.67 2.67 0 0 0 1.32-.35a2.6 2.6 0 0 0 1-1c.23-.402.35-.857.35-1.32s-.12-.814-.35-1.216zm-10.9-9.7a1 1 0 1 1 2 0v6.28a1 1 0 0 1-2 0zm1.05 11a1.25 1.25 0 1 1 .471-.092a1.3 1.3 0 0 1-.481.092z"></svg:path>`,
})
export class MageExclamationTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
