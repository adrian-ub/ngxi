import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlMagentoIcon],svg[bx-bxl-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 22.019l-3.717-2.146V9.863l2.479-1.43v10.01l1.238.753l1.238-.753V8.434l2.479 1.43v10.01L12 22.019zm8.666-15.014v10.009l-2.475 1.43V8.434L12 4.861L5.807 8.434v10.01l-2.473-1.43V7.005L12 2l8.666 5.005z" fill="currentColor"></svg:path>`,
})
export class BxBxlMagentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
