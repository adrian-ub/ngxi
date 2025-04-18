import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPlusIcon],svg[el-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.078 0v430.078H0v339.844h430.078V1200h339.844V769.922H1200V430.078H769.922V0z"></svg:path>`,
})
export class ElPlusIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
