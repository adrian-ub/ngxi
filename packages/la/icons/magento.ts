import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMagentoIcon],svg[la-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.227L5 10.174V22.44l3 1.713V11.826l8-5.053l8 5.053V24.15l3-1.712V10.174zm-2 8.351l-3 1.887v12.404l5 2.86l5-2.86V13.484L18 11.6v12.53l-2 1.141l-2-1.14z"></svg:path>`,
})
export class LaMagentoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
