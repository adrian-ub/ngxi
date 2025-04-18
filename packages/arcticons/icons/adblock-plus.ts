import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdblockPlusIcon],svg[arcticons-adblock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.532 30.015V17.988h3.909a4.059 4.059 0 0 1 0 8.118h-3.909m-5.557-2.107a3.007 3.007 0 0 1 0 6.013h-4.96V17.985h4.96a3.007 3.007 0 1 1 0 6.014m0 0h-4.961m-2.546 6.016l-3.909-12.027L9.5 30.015m1.353-4.059h5.262"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.663 5.5H16.337L5.5 16.337v15.326L16.337 42.5h15.326L42.5 31.663V16.337z"></svg:path>`,
})
export class ArcticonsAdblockPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
